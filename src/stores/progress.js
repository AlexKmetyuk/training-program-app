import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { weeks } from '../data/program.js'

export const useProgressStore = defineStore('progress', () => {
  const startDate = ref('2026-03-02')

  const saved = localStorage.getItem('training-progress')
  const completed = ref(saved ? JSON.parse(saved) : {})

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

  // Current position: global week 1-48
  const currentPosition = computed(() => {
    const start = new Date(startDate.value)
    const now = new Date()
    const diffMs = now - start
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return { week: 1, dayOfWeek: 1 }

    const week = Math.min(Math.floor(diffDays / 7) + 1, 48)
    const dayOfWeek = (diffDays % 7) + 1 // 1=Mon .. 7=Sun

    return { week, dayOfWeek }
  })

  // Progress for a single week (by global ID 1-48)
  function weekProgress(weekId) {
    const week = weeks[weekId - 1]
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

  // Progress for a phase (12 weeks each)
  function phaseProgress(phaseId) {
    const startWeek = (phaseId - 1) * 12 + 1
    const endWeek = phaseId * 12
    let total = 0
    let done = 0

    for (let wId = startWeek; wId <= endWeek; wId++) {
      const week = weeks[wId - 1]
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
  }

  // Total progress across all 48 weeks
  const totalProgress = computed(() => {
    let total = 0
    let done = 0
    for (let wId = 1; wId <= 48; wId++) {
      const week = weeks[wId - 1]
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

  return {
    startDate,
    completed,
    toggle,
    isCompleted,
    currentPosition,
    weekProgress,
    phaseProgress,
    totalProgress,
  }
})
