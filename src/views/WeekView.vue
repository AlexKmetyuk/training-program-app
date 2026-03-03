<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'
import { getWeek } from '../data/program.js'
import { useSwipe } from '../composables/useSwipe.js'
import WorkoutCard from '../components/WorkoutCard.vue'
import PoolCard from '../components/PoolCard.vue'
import ProgressBar from '../components/ProgressBar.vue'

const route = useRoute()
const router = useRouter()
const store = useProgressStore()
const pageRef = ref(null)

const weekId = computed(() => parseInt(route.params.id) || 1)
const week = computed(() => getWeek(store.getContentWeekId(weekId.value)))

const pos = store.currentPosition
const isCurrentWeek = computed(() => pos.week === weekId.value)

// Map dayOfWeek (1=Mon..7=Sun) to workout day name
const dayMap = { 1: 'Понеділок', 3: 'Середа', 5: "П'ятниця", 7: 'Неділя' }
const todayDayName = computed(() => isCurrentWeek.value ? (dayMap[pos.dayOfWeek] || null) : null)

function shouldOpen(workout) {
  return isCurrentWeek.value && todayDayName.value === workout.day
}

const recommendation = computed(() => store.getRecommendation(weekId.value))

watch(weekId, async () => {
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

function goPrevWeek() {
  if (weekId.value > 1) {
    router.push(`/week/${weekId.value - 1}`)
  }
}

function goNextWeek() {
  if (weekId.value < store.totalWeeks) {
    router.push(`/week/${weekId.value + 1}`)
  }
}

useSwipe(pageRef, { onLeft: goNextWeek, onRight: goPrevWeek })
</script>

<template>
  <div ref="pageRef" v-if="week">
    <!-- Week title row with nav -->
    <div class="month-title-row">
      <button class="month-nav-btn" :disabled="weekId <= 1" @click="goPrevWeek">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="month-title-center">
        <h2 class="month-title-text">Тиждень {{ weekId }} — {{ week.name }}</h2>
        <span class="month-title-pct">RPE {{ week.rpeTarget }} · {{ store.weekProgress(weekId) }}%</span>
      </div>
      <button class="month-nav-btn" :disabled="weekId >= store.totalWeeks" @click="goNextWeek">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 12px;">
      <div class="week-phase-badge" :style="{ background: week.phaseColor + '20', color: week.phaseColor }">
        {{ week.phaseName }}
      </div>
      <div v-if="store.isRepeatWeek(weekId)" class="week-repeat-badge">
        ПОВТОР
      </div>
    </div>

    <ProgressBar :value="store.weekProgress(weekId)" :color="week.phaseColor" large style="margin-bottom: 16px;" />

    <div v-if="week.note" class="week-note">{{ week.note }}</div>

    <!-- Recommendation banner -->
    <div v-if="recommendation" :class="['week-recommendation', `week-recommendation--${recommendation.type}`]">
      {{ recommendation.text }}
    </div>

    <!-- Workouts -->
    <template v-for="workout in week.workouts" :key="`${weekId}-${workout.id}`">
      <PoolCard
        v-if="workout.type === 'pool' && store.settings.poolEnabled"
        :workout="workout"
        :pool-key="`week-${weekId}-pool`"
        :week-id="weekId"
        :initial-open="isCurrentWeek && pos.dayOfWeek === 7"
      />
      <WorkoutCard
        v-else-if="workout.type !== 'pool'"
        :workout="workout"
        :week-id="weekId"
        :initial-open="shouldOpen(workout)"
      />
    </template>
  </div>
  <div v-else style="text-align: center; padding: 40px; color: var(--text-secondary);">
    Тиждень не знайдено
  </div>
</template>

<style scoped>
.week-phase-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
