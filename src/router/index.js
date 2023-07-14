import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
