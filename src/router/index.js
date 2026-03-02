import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import WeeksView from '../views/WeeksView.vue'
import WeekView from '../views/WeekView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/weeks', name: 'weeks', component: WeeksView },
  { path: '/week/:id', name: 'week', component: WeekView, props: true },

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
  history: createWebHistory(),
  routes,
})

export default router
