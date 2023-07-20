import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue';
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import User from '@/views/user.vue';
import Setting from '@/views/setting.vue';
import ButtonAuth from '@/views/ButtonAuth.vue';
import MenuAuth from '@/views/MenuAuth.vue';


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
        },
        {
          path:'/user',
          name:'user',
          component:User
        },
        {
          path:'/auth',
          name:'auth',
          children:[
            {
              path:'/button-auth',
              name:'button-auth',
              component:ButtonAuth
            },
            {
              path:'/menu-auth',
              name:'menu-auth',
              component:MenuAuth
            }
          ]
        },
        {
          path:'/setting',
          name:'setting',
          component:Setting
        }
      ]
    }
  ]
})

export default router
