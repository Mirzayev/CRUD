import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllEmployee from '../views/AllEmployee.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'about',
      component: () => import('../views/AddEmploye.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: AllEmployee
    }
  ]
})

export default router
