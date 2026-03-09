<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'
import { phases, getWeek } from '../data/program.js'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()
const store = useProgressStore()
const pos = store.currentPosition

// Build calendar weeks grouped by content phase
const phaseCalendarWeeks = computed(() => {
  const groups = phases.map(p => ({ phase: p, weeks: [] }))

  for (let calId = 1; calId <= store.totalWeeks; calId++) {
    const contentId = store.getContentWeekId(calId)
    const contentWeek = getWeek(contentId)
    if (!contentWeek) continue

    const phaseGroup = groups.find(g => g.phase.id === contentWeek.phase)
    if (phaseGroup) {
      phaseGroup.weeks.push({
        calendarId: calId,
        contentWeek,
        isRepeat: store.isRepeatWeek(calId),
        isSkipped: store.isFullySkipped(calId),
      })
    }
  }

  return groups
})

function goToWeek(id) {
  router.push(`/week/${id}`)
}
</script>

<template>
  <div>
    <div v-for="group in phaseCalendarWeeks" :key="group.phase.id" class="phase-section">
      <div class="phase-section__header">
        <div class="phase-section__title">
          <span class="phase-section__dot" :style="{ background: group.phase.color }"></span>
          Фаза {{ group.phase.id }} — {{ group.phase.name }}
        </div>
        <span class="phase-section__pct">{{ store.phaseProgress(group.phase.id) }}%</span>
      </div>
      <div v-if="group.phase.description" class="phase-section__desc">{{ group.phase.description }}</div>
      <ProgressBar :value="store.phaseProgress(group.phase.id)" :color="group.phase.color" style="margin-bottom: 12px;" />

      <div class="week-card-grid">
        <div
          v-for="item in group.weeks"
          :key="item.calendarId"
          :class="['week-mini-card', { 'week-mini-card--current': item.calendarId === pos.week, 'week-mini-card--skipped': item.isSkipped, 'week-mini-card--done': store.weekProgress(item.calendarId) === 100 && !item.isSkipped }]"
          @click="goToWeek(item.calendarId)"
        >
          <div
            class="week-mini-card__num"
            :style="store.weekProgress(item.calendarId) === 100 && !item.isSkipped
              ? { background: 'var(--success)', color: '#fff' }
              : { background: group.phase.color + '25', color: group.phase.color }"
          >
            <svg v-if="store.weekProgress(item.calendarId) === 100 && !item.isSkipped" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <template v-else>{{ item.calendarId }}</template>
          </div>
          <div class="week-mini-card__info">
            <div class="week-mini-card__name">
              {{ item.contentWeek.name }}
              <span v-if="item.isRepeat" class="week-repeat-badge week-repeat-badge--inline">ПОВТОР</span>
            </div>
            <div class="week-mini-card__meta">
              <template v-if="item.isSkipped"><span class="week-skipped-label">ПРОПУЩЕНО</span></template>
              <template v-else>RPE {{ item.contentWeek.rpeTarget }}</template>
            </div>
          </div>
          <div class="week-mini-card__progress">
            <ProgressBar :value="store.weekProgress(item.calendarId)" :color="group.phase.color" />
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
.week-mini-card--done {
  opacity: 0.6;
  border-color: var(--success);
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
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.week-mini-card__meta {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.week-mini-card__progress {
  width: 100%;
}
</style>
