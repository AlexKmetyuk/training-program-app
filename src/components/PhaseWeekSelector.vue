<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress.js'
import { useRouter, useRoute } from 'vue-router'
import { phases, getWeek } from '../data/program.js'
import ProgressBar from './ProgressBar.vue'

const emit = defineEmits(['close'])
const store = useProgressStore()
const router = useRouter()
const route = useRoute()

const openPhases = ref({ [currentPhaseId()]: true })

function currentPhaseId() {
  let weekId
  if (route.name === 'week') {
    weekId = parseInt(route.params.id) || 1
  } else {
    weekId = store.currentPosition.week
  }
  const contentId = store.getContentWeekId(weekId)
  const w = getWeek(contentId)
  return w ? w.phase : Math.ceil(contentId / 12)
}

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

function togglePhase(id) {
  openPhases.value[id] = !openPhases.value[id]
}

function select(weekId) {
  router.push(`/week/${weekId}`)
  emit('close')
}

function isActive(weekId) {
  return route.params.id == weekId
}
</script>

<template>
  <div class="phase-week-selector">
    <div v-for="group in phaseCalendarWeeks" :key="group.phase.id" class="pws-phase">
      <div class="pws-phase__header" @click="togglePhase(group.phase.id)">
        <span class="pws-phase__dot" :style="{ background: group.phase.color }"></span>
        <span class="pws-phase__name">{{ group.phase.name }}</span>
        <span class="pws-phase__pct">{{ store.phaseProgress(group.phase.id) }}%</span>
        <svg
          :class="['pws-phase__chevron', { 'pws-phase__chevron--open': openPhases[group.phase.id] }]"
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        ><polyline points="6 9 12 15 18 9"/></svg>
      </div>

      <ul v-if="openPhases[group.phase.id]" class="pws-week-list">
        <li
          v-for="item in group.weeks"
          :key="item.calendarId"
          :class="['pws-week', { 'pws-week--active': isActive(item.calendarId), 'pws-week--skipped': item.isSkipped }]"
          @click="select(item.calendarId)"
        >
          <span class="pws-week__num" :style="{ color: group.phase.color }">{{ item.calendarId }}</span>
          <div class="pws-week__info">
            <div class="pws-week__name">
              {{ item.contentWeek.name }}
              <span v-if="item.isRepeat" class="week-repeat-badge week-repeat-badge--inline">ПОВТОР</span>
            </div>
          </div>
          <div class="pws-week__progress" style="width: 40px;">
            <ProgressBar :value="store.weekProgress(item.calendarId)" :color="group.phase.color" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.phase-week-selector {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.pws-phase__header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 4px;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
}
.pws-phase__header:hover {
  background: var(--hover-bg, rgba(255,255,255,0.05));
}
.pws-phase__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.pws-phase__name {
  flex: 1;
  font-weight: 600;
  font-size: 0.85rem;
}
.pws-phase__pct {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.pws-phase__chevron {
  transition: transform 0.2s;
  flex-shrink: 0;
  color: var(--text-muted);
}
.pws-phase__chevron--open {
  transform: rotate(180deg);
}
.pws-week-list {
  list-style: none;
  padding: 0 0 0 16px;
  margin: 0 0 4px;
}
.pws-week {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
}
.pws-week:hover {
  background: var(--hover-bg, rgba(255,255,255,0.05));
}
.pws-week--active {
  background: var(--hover-bg, rgba(255,255,255,0.08));
}
.pws-week__num {
  font-weight: 700;
  font-size: 0.75rem;
  min-width: 20px;
}
.pws-week__info {
  flex: 1;
}
.pws-week__name {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pws-week--skipped {
  opacity: 0.5;
}
</style>
