<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'
import { phases, getPhaseWeeks } from '../data/program.js'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()
const store = useProgressStore()
const pos = store.currentPosition

function goToWeek(id) {
  router.push(`/week/${id}`)
}
</script>

<template>
  <div>
    <div v-for="phase in phases" :key="phase.id" class="phase-section">
      <div class="phase-section__header">
        <div class="phase-section__title">
          <span class="phase-section__dot" :style="{ background: phase.color }"></span>
          Фаза {{ phase.id }} — {{ phase.name }}
        </div>
        <span class="phase-section__pct">{{ store.phaseProgress(phase.id) }}%</span>
      </div>
      <div v-if="phase.description" class="phase-section__desc">{{ phase.description }}</div>
      <ProgressBar :value="store.phaseProgress(phase.id)" :color="phase.color" style="margin-bottom: 12px;" />

      <div class="week-card-grid">
        <div
          v-for="week in getPhaseWeeks(phase.id)"
          :key="week.id"
          :class="['week-mini-card', { 'week-mini-card--current': week.id === pos.week }]"
          @click="goToWeek(week.id)"
        >
          <div
            class="week-mini-card__num"
            :style="{ background: phase.color + '25', color: phase.color }"
          >
            {{ week.id }}
          </div>
          <div class="week-mini-card__info">
            <div class="week-mini-card__name">{{ week.name }}</div>
            <div class="week-mini-card__meta">RPE {{ week.rpeTarget }}</div>
          </div>
          <div class="week-mini-card__progress">
            <ProgressBar :value="store.weekProgress(week.id)" :color="phase.color" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.phase-section {
  margin-bottom: 28px;
}
.phase-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.phase-section__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1rem;
}
.phase-section__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.phase-section__pct {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}
.phase-section__desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.45;
  margin-bottom: 10px;
}
.week-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}
.week-mini-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background: var(--card-bg);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  border: 2px solid transparent;
}
.week-mini-card:active {
  transform: scale(0.97);
}
.week-mini-card--current {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-dim);
}
.week-mini-card__num {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.85rem;
}
.week-mini-card__info {
  flex: 1;
}
.week-mini-card__name {
  font-weight: 600;
  font-size: 0.85rem;
}
.week-mini-card__meta {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.week-mini-card__progress {
  width: 100%;
}
</style>
