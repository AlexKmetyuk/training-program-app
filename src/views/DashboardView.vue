<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'
import { getWeek, phases } from '../data/program.js'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()
const store = useProgressStore()

const pos = store.currentPosition
const currentWeek = getWeek(store.getContentWeekId(pos.week))
const currentPhase = phases.find(p => currentWeek && currentWeek.phase === p.id)

function goToWeek(id) {
  router.push(`/week/${id}`)
}

function goToCurrent() {
  router.push(`/week/${pos.week}`)
}
</script>

<template>
  <div>
    <div class="dashboard-hero">
      <div class="dashboard-hero__title">Програма тренувань</div>
      <div class="dashboard-hero__sub">{{ store.totalWeeks }} тижнів / 4 фази / Full Body 3x + басейн</div>
    </div>

    <div class="dashboard-stats">
      <div class="stat-card">
        <div class="stat-card__value">{{ store.totalProgress }}%</div>
        <div class="stat-card__label">Загальний прогрес</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__value">{{ pos.week }}/{{ store.totalWeeks }}</div>
        <div class="stat-card__label">Тиждень</div>
      </div>
      <div class="stat-card" v-if="currentPhase">
        <div class="stat-card__value" :style="{ color: currentPhase.color }">{{ currentPhase.id }}/4</div>
        <div class="stat-card__label">Фаза</div>
      </div>
    </div>

    <ProgressBar :value="store.totalProgress" large style="margin-bottom: 24px;" />

    <!-- Quick action: go to current week -->
    <div
      v-if="currentWeek"
      class="today-card"
      @click="goToCurrent"
      :style="{ borderColor: currentWeek.phaseColor }"
    >
      <div class="today-card__icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div class="today-card__info">
        <div class="today-card__title">Тренування сьогодні</div>
        <div class="today-card__sub">Тиждень {{ pos.week }} · {{ currentWeek.name }} · {{ currentWeek.phaseName }}</div>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
    </div>

    <!-- Test history shortcut -->
    <div class="today-card" @click="router.push('/tests')" style="border-color: var(--warning);">
      <div class="today-card__icon" style="color: var(--warning);">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
      </div>
      <div class="today-card__info">
        <div class="today-card__title">Історія тестів</div>
        <div class="today-card__sub">Присід, тяга, жим — результати кожні 3 місяці</div>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>
    </div>

    <div class="dashboard-section" v-if="currentWeek && currentPhase">
      <div class="dashboard-section__title">Поточна фаза — {{ currentPhase.name }}</div>
      <div
        class="month-mini-card month-mini-card--current"
        @click="goToWeek(pos.week)"
      >
        <div
          class="month-mini-card__num"
          :style="{ background: currentWeek.phaseColor + '25', color: currentWeek.phaseColor }"
        >
          {{ pos.week }}
        </div>
        <div class="month-mini-card__info">
          <div class="month-mini-card__name">Тиждень {{ pos.week }} — {{ currentWeek.name }}</div>
          <div class="month-mini-card__phase">{{ currentWeek.phaseName }}</div>
        </div>
        <div class="month-mini-card__progress">
          <ProgressBar :value="store.weekProgress(pos.week)" :color="currentWeek.phaseColor" />
        </div>
      </div>
    </div>

  </div>
</template>
