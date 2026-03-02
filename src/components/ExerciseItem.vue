<script setup>
import { useProgressStore } from '../stores/progress.js'

const props = defineProps({
  exercise: Object,
  exerciseKey: String,
})

const store = useProgressStore()

function toggle() {
  store.toggle(props.exerciseKey)
}
</script>

<template>
  <div :class="['exercise-item', { 'exercise-item--completed': store.isCompleted(exerciseKey) }]">
    <label class="exercise-checkbox">
      <input
        type="checkbox"
        :checked="store.isCompleted(exerciseKey)"
        @change="toggle"
      />
      <span class="exercise-checkbox__box">
        <svg class="exercise-checkbox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    </label>
    <div class="exercise-info">
      <div class="exercise-name">
        {{ exercise.name }}
        <span v-if="exercise.category" :class="'category-badge category-badge--' + exercise.category">
          {{ exercise.category }}
        </span>
      </div>
      <div v-if="exercise.nameEn" class="exercise-name-en">{{ exercise.nameEn }}</div>
      <div class="exercise-params">
        <span class="exercise-param exercise-param--sets">{{ exercise.sets }} &times; {{ exercise.reps }}</span>
        <span v-if="exercise.rpe" class="exercise-param">RPE {{ exercise.rpe }}</span>
        <span v-if="exercise.rest" class="exercise-param">{{ exercise.rest }}</span>
      </div>
      <div v-if="exercise.notes" class="exercise-notes">{{ exercise.notes }}</div>
    </div>
  </div>
</template>
