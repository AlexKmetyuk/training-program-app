import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { weeks } from '../data/program.js'

export const useProgressStore = defineStore('progress', () => {
  const startDate = ref('2026-03-02')

  const saved = localStorage.getItem('training-progress')
  const completed = ref(saved ? JSON.parse(saved) : {})

  const savedSkipped = localStorage.getItem('training-skipped')
  const skipped = ref(savedSkipped ? JSON.parse(savedSkipped) : {})

  const savedRepeat = localStorage.getItem('training-repeat-weeks')
  const repeatWeeks = ref(savedRepeat ? JSON.parse(savedRepeat) : [])

  // --- Migration: month-based keys → week-based keys ---
  if (!localStorage.getItem('progress-migrated-v2')) {
    const old = { ...completed.value }
    const newCompleted = {}
    let migrated = false

    for (const key of Object.keys(old)) {
      const match = key.match(/^month-(\d+)-week-(\d+)-(.+)$/)
      if (match) {
        const monthId = parseInt(match[1])
        const weekId = parseInt(match[2])
        const rest = match[3]
        const globalWeek = (monthId - 1) * 4 + weekId
        newCompleted[`week-${globalWeek}-${rest}`] = true
        migrated = true
      } else {
        newCompleted[key] = old[key]
      }
    }

    if (migrated) {
      completed.value = newCompleted
    }
    localStorage.setItem('progress-migrated-v2', 'true')
  }

  watch(completed, (val) => {
    localStorage.setItem('training-progress', JSON.stringify(val))
  }, { deep: true })

  watch(skipped, (val) => {
    localStorage.setItem('training-skipped', JSON.stringify(val))
  }, { deep: true })

  watch(repeatWeeks, (val) => {
    localStorage.setItem('training-repeat-weeks', JSON.stringify(val))
  }, { deep: true })

  // --- Repeat weeks logic ---

  const totalWeeks = computed(() => 48 + repeatWeeks.value.length)

  function getContentWeekId(calendarWeekId) {
    const shiftCount = repeatWeeks.value.filter(r => r < calendarWeekId).length
    return calendarWeekId - shiftCount
  }

  function isRepeatWeek(calendarWeekId) {
    if (calendarWeekId <= 1) return false
    return getContentWeekId(calendarWeekId) === getContentWeekId(calendarWeekId - 1)
  }

  function isFullySkipped(calendarWeekId) {
    return repeatWeeks.value.includes(calendarWeekId)
  }

  // Count of gym workouts in a content week
  function weekGymCount(weekId) {
    const contentId = getContentWeekId(weekId)
    const week = weeks[contentId - 1]
    if (!week) return 0
    return week.workouts.filter(w => w.type !== 'pool').length
  }

  function toggle(key) {
    if (completed.value[key]) {
      delete completed.value[key]
    } else {
      completed.value[key] = true
    }
  }

  function isCompleted(key) {
    return !!completed.value[key]
  }

  // Current position: global week 1..totalWeeks
  const currentPosition = computed(() => {
    const start = new Date(startDate.value)
    const now = new Date()
    const diffMs = now - start
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return { week: 1, dayOfWeek: 1 }

    const week = Math.min(Math.floor(diffDays / 7) + 1, totalWeeks.value)
    const dayOfWeek = (diffDays % 7) + 1 // 1=Mon .. 7=Sun

    return { week, dayOfWeek }
  })

  // Progress for a single calendar week (uses content mapping)
  function weekProgress(weekId) {
    const contentId = getContentWeekId(weekId)
    const week = weeks[contentId - 1]
    if (!week) return 0

    const prefix = `week-${weekId}-`
    let total = 0
    let done = 0

    for (const workout of week.workouts) {
      if (workout.type === 'pool') {
        total++
        if (completed.value[`${prefix}pool`]) done++
      } else if (workout.exercises) {
        for (const ex of workout.exercises) {
          total++
          if (completed.value[`${prefix}workout-${workout.id}-exercise-${ex.id}`]) done++
        }
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100)
  }

  // Progress for a phase — iterates calendar weeks 1..totalWeeks, groups by content phase
  function phaseProgress(phaseId) {
    let total = 0
    let done = 0

    for (let wId = 1; wId <= totalWeeks.value; wId++) {
      const contentId = getContentWeekId(wId)
      const week = weeks[contentId - 1]
      if (!week || week.phase !== phaseId) continue

      const prefix = `week-${wId}-`
      for (const workout of week.workouts) {
        if (workout.type === 'pool') {
          total++
          if (completed.value[`${prefix}pool`]) done++
        } else if (workout.exercises) {
          for (const ex of workout.exercises) {
            total++
            if (completed.value[`${prefix}workout-${workout.id}-exercise-${ex.id}`]) done++
          }
        }
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100)
  }

  // Total progress across all calendar weeks
  const totalProgress = computed(() => {
    let total = 0
    let done = 0
    for (let wId = 1; wId <= totalWeeks.value; wId++) {
      const contentId = getContentWeekId(wId)
      const week = weeks[contentId - 1]
      if (!week) continue
      const prefix = `week-${wId}-`
      for (const workout of week.workouts) {
        if (workout.type === 'pool') {
          total++
          if (completed.value[`${prefix}pool`]) done++
        } else if (workout.exercises) {
          for (const ex of workout.exercises) {
            total++
            if (completed.value[`${prefix}workout-${workout.id}-exercise-${ex.id}`]) done++
          }
        }
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100)
  })

  function toggleSkip(key) {
    if (skipped.value[key]) {
      delete skipped.value[key]
    } else {
      skipped.value[key] = true
    }

    // Auto-manage repeatWeeks based on skip state
    const match = key.match(/^week-(\d+)-workout-/)
    if (match) {
      const weekId = parseInt(match[1])
      const gymCount = weekGymCount(weekId)
      const skipCount = weekSkipCount(weekId)

      if (skipCount >= gymCount && gymCount > 0) {
        // All gym workouts skipped — add to repeatWeeks
        if (!repeatWeeks.value.includes(weekId)) {
          repeatWeeks.value.push(weekId)
          repeatWeeks.value.sort((a, b) => a - b)
        }
      } else {
        // Not all skipped — remove from repeatWeeks
        const idx = repeatWeeks.value.indexOf(weekId)
        if (idx !== -1) {
          repeatWeeks.value.splice(idx, 1)
        }
      }
    }
  }

  function isSkipped(key) {
    return !!skipped.value[key]
  }

  const dayOffsets = {
    'Понеділок': 0,
    'Вівторок': 1,
    'Середа': 2,
    'Четвер': 3,
    "П'ятниця": 4,
    'Субота': 5,
    'Неділя': 6,
  }

  function getWorkoutDate(weekId, dayName) {
    const start = new Date(startDate.value)
    const weekOffset = (weekId - 1) * 7
    const dayOffset = dayOffsets[dayName] ?? 0
    const date = new Date(start)
    date.setDate(date.getDate() + weekOffset + dayOffset)
    return date
  }

  const monthNamesShort = ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру']

  function formatDate(date) {
    return `${date.getDate()} ${monthNamesShort[date.getMonth()]}`
  }

  function weekSkipCount(weekId) {
    const contentId = getContentWeekId(weekId)
    const week = weeks[contentId - 1]
    if (!week) return 0
    let count = 0
    for (const workout of week.workouts) {
      if (workout.type === 'pool') continue
      const key = `week-${weekId}-workout-${workout.id}`
      if (skipped.value[key]) count++
    }
    return count
  }

  function weekGymDoneCount(weekId) {
    const contentId = getContentWeekId(weekId)
    const week = weeks[contentId - 1]
    if (!week) return 0
    let count = 0
    for (const workout of week.workouts) {
      if (workout.type === 'pool') continue
      if (!workout.exercises || workout.exercises.length === 0) continue
      const allDone = workout.exercises.every(ex =>
        completed.value[`week-${weekId}-workout-${workout.id}-exercise-${ex.id}`]
      )
      if (allDone) count++
    }
    return count
  }

  function getRecommendation(weekId) {
    const skipCount = weekSkipCount(weekId)
    if (skipCount === 0) return null

    const gymCount = weekGymCount(weekId)
    const doneCount = weekGymDoneCount(weekId)

    let text = ''
    if (skipCount >= gymCount && gymCount > 0 && doneCount === 0) {
      text = 'Пропущено весь тиждень. Програму зміщено — наступний тиждень повторить цей.'
    } else if (skipCount >= 3 && doneCount === 0) {
      text = 'Пропущено весь тиждень. Рекомендація: повтори його наступного.'
    } else if (skipCount === 2 && doneCount === 0) {
      text = 'Спробуй зробити хоча б одне тренування цього тижня.'
    } else if (doneCount === 0) {
      text = 'Продовжуй за графіком — 2 тренування цього тижня достатньо.'
    } else {
      return null
    }

    if (weekId > 1 && weekSkipCount(weekId - 1) >= 2) {
      text += ' Знизь RPE на 1 пункт для повернення.'
    }

    return { type: skipCount >= gymCount ? 'danger' : 'warning', text }
  }

  function exportData() {
    return {
      version: 2,
      app: 'training-48w',
      date: new Date().toISOString(),
      totalProgress: totalProgress.value,
      completed: { ...completed.value },
      skipped: { ...skipped.value },
      repeatWeeks: [...repeatWeeks.value],
    }
  }

  function importData(data) {
    if (!data || data.app !== 'training-48w' || typeof data.completed !== 'object') {
      throw new Error('Невалідний файл бекапу')
    }
    completed.value = { ...data.completed }
    localStorage.setItem('training-progress', JSON.stringify(completed.value))
    if (data.skipped && typeof data.skipped === 'object') {
      skipped.value = { ...data.skipped }
      localStorage.setItem('training-skipped', JSON.stringify(skipped.value))
    }
    if (Array.isArray(data.repeatWeeks)) {
      repeatWeeks.value = [...data.repeatWeeks]
      localStorage.setItem('training-repeat-weeks', JSON.stringify(repeatWeeks.value))
    }
  }

  return {
    startDate,
    completed,
    skipped,
    repeatWeeks,
    totalWeeks,
    toggle,
    isCompleted,
    toggleSkip,
    isSkipped,
    getWorkoutDate,
    formatDate,
    getContentWeekId,
    isRepeatWeek,
    isFullySkipped,
    weekGymCount,
    weekSkipCount,
    getRecommendation,
    currentPosition,
    weekProgress,
    phaseProgress,
    totalProgress,
    exportData,
    importData,
  }
})
