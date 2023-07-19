import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue';
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/',
      name:'main',
      component:Main,
      children:[
        {
          path:'',
          name:'home',
          component:Home
        }
      ]
    }
  ]
})

export default router
