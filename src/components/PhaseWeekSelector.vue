<script setup>
import { ref } from 'vue'
import { useProgressStore } from '../stores/progress.js'
import { useRouter, useRoute } from 'vue-router'
import { phases, getPhaseWeeks } from '../data/program.js'
import ProgressBar from './ProgressBar.vue'

const emit = defineEmits(['close'])
const store = useProgressStore()
const router = useRouter()
const route = useRoute()

const openPhases = ref({ [currentPhaseId()]: true })

function currentPhaseId() {
  if (route.name === 'week') {
    const weekId = parseInt(route.params.id) || 1
    return Math.ceil(weekId / 12)
  }
  return Math.ceil(store.currentPosition.week / 12)
}

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
    <div v-for="phase in phases" :key="phase.id" class="pws-phase">
      <div class="pws-phase__header" @click="togglePhase(phase.id)">
        <span class="pws-phase__dot" :style="{ background: phase.color }"></span>
        <span class="pws-phase__name">{{ phase.name }}</span>
        <span class="pws-phase__pct">{{ store.phaseProgress(phase.id) }}%</span>
        <svg
          :class="['pws-phase__chevron', { 'pws-phase__chevron--open': openPhases[phase.id] }]"
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        ><polyline points="6 9 12 15 18 9"/></svg>
      </div>

      <ul v-if="openPhases[phase.id]" class="pws-week-list">
        <li
          v-for="week in getPhaseWeeks(phase.id)"
          :key="week.id"
          :class="['pws-week', { 'pws-week--active': isActive(week.id) }]"
          @click="select(week.id)"
        >
          <span class="pws-week__num" :style="{ color: phase.color }">{{ week.id }}</span>
          <div class="pws-week__info">
            <div class="pws-week__name">{{ week.name }}</div>
          </div>
          <div class="pws-week__progress" style="width: 40px;">
            <ProgressBar :value="store.weekProgress(week.id)" :color="phase.color" />
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
}
</style>
