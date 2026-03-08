import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import WeeksView from '../views/WeeksView.vue'
import WeekView from '../views/WeekView.vue'
import SettingsView from '../views/SettingsView.vue'
import HelpView from '../views/HelpView.vue'
import TestHistoryView from '../views/TestHistoryView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/weeks', name: 'weeks', component: WeeksView },
  { path: '/week/:id', name: 'week', component: WeekView, props: true },
  { path: '/tests', name: 'tests', component: TestHistoryView },
  { path: '/settings', name: 'settings', component: SettingsView },
  { path: '/help', name: 'help', component: HelpView },

  // Legacy redirects
  { path: '/months', redirect: '/weeks' },
  { path: '/month/:id', redirect: '/weeks' },
  {
    path: '/month/:id/week/:weekId',
    redirect: to => {
      const monthId = parseInt(to.params.id) || 1
      const weekId = parseInt(to.params.weekId) || 1
      const globalWeek = (monthId - 1) * 4 + weekId
      return `/week/${globalWeek}`
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
