<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress.js'
import { getWeek } from '../data/program.js'
import BottomNav from './BottomNav.vue'
import PhaseWeekSelector from './PhaseWeekSelector.vue'
import GlossaryModal from './GlossaryModal.vue'
import BackupModal from './BackupModal.vue'

const store = useProgressStore()
const route = useRoute()
const router = useRouter()
const showGlossary = ref(false)
const showBackup = ref(false)

const headerTitle = computed(() => {
  if (route.name === 'week') {
    const id = parseInt(route.params.id)
    const w = getWeek(store.getContentWeekId(id))
    return w ? `Тиждень ${id} — ${w.name}` : 'Training 48W'
  }
  if (route.name === 'weeks') return 'Тижні'
  return 'Training 48W'
})

const showBack = computed(() => route.name !== 'dashboard')

function goBack() {
  if (route.name === 'week') {
    router.push('/weeks')
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div class="app-layout">
    <!-- Mobile header -->
    <header class="app-header">
      <button v-if="showBack" class="app-header__back" @click="goBack">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <span class="app-header__title">{{ headerTitle }}</span>
      <div class="app-header__right">
        <button class="app-header__help" @click="showBackup = true" title="Бекап">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </button>
        <button class="app-header__help" @click="showGlossary = true" title="Глосарій">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>
        <span class="app-header__progress">{{ store.totalProgress }}%</span>
      </div>
    </header>

    <!-- Desktop sidebar -->
    <aside class="sidebar">
      <div class="sidebar__logo" @click="router.push('/')" style="cursor:pointer;">Training 48W</div>
      <nav class="sidebar-nav">
        <button :class="['sidebar-nav__item', { 'sidebar-nav__item--active': route.name === 'dashboard' }]" @click="router.push('/')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Головна
        </button>
        <button :class="['sidebar-nav__item', { 'sidebar-nav__item--active': route.name === 'week' && parseInt(route.params.id) === store.currentPosition.week }]" @click="router.push(`/week/${store.currentPosition.week}`)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Сьогодні
        </button>
        <button :class="['sidebar-nav__item', { 'sidebar-nav__item--active': route.name === 'weeks' }]" @click="router.push('/weeks')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Тижні
        </button>
        <button class="sidebar-nav__item" @click="showBackup = true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Бекап
        </button>
        <button class="sidebar-nav__item" @click="showGlossary = true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Глосарій
        </button>
      </nav>
      <PhaseWeekSelector />
    </aside>

    <!-- Main content -->
    <main class="app-main">
      <slot />
    </main>

    <!-- Mobile bottom nav -->
    <BottomNav />

    <!-- Glossary modal -->
    <GlossaryModal v-if="showGlossary" @close="showGlossary = false" />

    <!-- Backup modal -->
    <BackupModal v-if="showBackup" @close="showBackup = false" />
  </div>
</template>
