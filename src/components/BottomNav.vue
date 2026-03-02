<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'

const router = useRouter()
const route = useRoute()
const store = useProgressStore()

function goHome() {
  router.push('/')
}

function goToday() {
  const p = store.currentPosition
  router.push(`/week/${p.week}`)
}

function goWeeks() {
  router.push('/weeks')
}
</script>

<template>
  <nav class="bottom-nav">
    <button
      :class="['bottom-nav__item', { 'bottom-nav__item--active': route.name === 'dashboard' }]"
      @click="goHome"
    >
      <svg class="bottom-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <span>Головна</span>
    </button>

    <button
      :class="['bottom-nav__item', { 'bottom-nav__item--active': route.name === 'week' && parseInt(route.params.id) === store.currentPosition.week }]"
      @click="goToday"
    >
      <svg class="bottom-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span>Сьогодні</span>
    </button>

    <button
      :class="['bottom-nav__item', { 'bottom-nav__item--active': route.name === 'weeks' }]"
      @click="goWeeks"
    >
      <svg class="bottom-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      <span>Тижні</span>
    </button>
  </nav>
</template>
