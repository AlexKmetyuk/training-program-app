<script setup>
import { useProgressStore } from '../stores/progress.js'

const props = defineProps({
  workout: Object,
  poolKey: String,
  initialOpen: { type: Boolean, default: false },
})

const store = useProgressStore()

function toggle() {
  store.toggle(props.poolKey)
}
</script>

<template>
  <div :class="['wcard', { 'wcard--done': store.isCompleted(poolKey) }]" style="--wcard-color: var(--pool-color); --wcard-dim: var(--pool-dim);">
    <div class="wcard__main" @click="toggle">
      <div class="wcard__icon">🏊</div>
      <div class="wcard__info">
        <div class="wcard__day">Нд</div>
        <div class="wcard__name">Басейн</div>
        <div class="wcard__meta">30-45 хв · {{ workout.note }}</div>
      </div>
      <label class="wcard__check" @click.stop>
        <input type="checkbox" :checked="store.isCompleted(poolKey)" @change="toggle" />
        <span class="wcard__check-box">
          <svg class="wcard__check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </span>
      </label>
    </div>
  </div>
</template>
