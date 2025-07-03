import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('@/views/MainView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('@/modules/auth/views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import ('@/modules/auth/views/register.vue')
    },
    {
      path: '/TyC',
      name: 'TyC',
      component: () => import ('@/components/Layout/TyC.vue'),
    },
    {
      path: '/policies',
      name: 'policies',
      component: () => import ('@/components/Layout/Policies.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import ('@/modules/dashboard/views/dashboard.vue'),
      meta: { requiresAuth: true }
    },
  ],
})

export default router
