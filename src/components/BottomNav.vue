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

function goSettings() {
  router.push('/settings')
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

    <button
      :class="['bottom-nav__item', { 'bottom-nav__item--active': route.name === 'settings' }]"
      @click="goSettings"
    >
      <svg class="bottom-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
      <span>Ще</span>
    </button>
  </nav>
</template>
