<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress.js'
import ExerciseItem from './ExerciseItem.vue'

const props = defineProps({
  workout: Object,
  weekId: Number,
  initialOpen: { type: Boolean, default: false },
})

const store = useProgressStore()
const open = ref(props.initialOpen)

const progress = computed(() => {
  const exercises = props.workout.exercises || []
  if (exercises.length === 0) return { done: 0, total: 0, pct: 0 }
  let done = 0
  for (const ex of exercises) {
    if (store.isCompleted(`week-${props.weekId}-workout-${props.workout.id}-exercise-${ex.id}`)) done++
  }
  return { done, total: exercises.length, pct: Math.round((done / exercises.length) * 100) }
})

const isDone = computed(() => progress.value.total > 0 && progress.value.done === progress.value.total)

const dayShort = {
  'Понеділок': 'Пн',
  'Середа': 'Ср',
  "П'ятниця": 'Пт',
  'Вівторок': 'Вт',
  'Четвер': 'Чт',
  'Субота': 'Сб',
  'Неділя': 'Нд',
}

const dayIcons = {
  'Понеділок': '🏋️',
  'Середа': '💪',
  "П'ятниця": '🔥',
}
</script>

<template>
  <div :class="['wcard', { 'wcard--open': open, 'wcard--done': isDone }]" style="--wcard-color: var(--accent); --wcard-dim: var(--accent-dim);">
    <div class="wcard__main" @click="open = !open">
      <div class="wcard__icon">{{ dayIcons[workout.day] || '🏋️' }}</div>
      <div class="wcard__info">
        <div class="wcard__day">{{ dayShort[workout.day] || workout.day }}</div>
        <div class="wcard__name">{{ workout.name }}</div>
        <div class="wcard__meta">{{ workout.duration || '' }}</div>
      </div>
      <div class="wcard__status">
        <span v-if="isDone" class="wcard__done-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span v-else-if="progress.done > 0" class="wcard__count">{{ progress.done }}/{{ progress.total }}</span>
      </div>
      <svg :class="['wcard__chevron', { 'wcard__chevron--open': open }]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
    </div>
    <div v-if="open" class="wcard__body">
      <div v-if="progress.total > 0" class="wcard__progress-bar">
        <div class="wcard__progress-fill" :style="{ width: progress.pct + '%' }"></div>
      </div>
      <div v-if="workout.warmup" class="wcard__warmup">{{ workout.warmup }}</div>
      <ExerciseItem
        v-for="ex in workout.exercises"
        :key="ex.id"
        :exercise="ex"
        :exercise-key="`week-${weekId}-workout-${workout.id}-exercise-${ex.id}`"
      />
    </div>
  </div>
</template>
