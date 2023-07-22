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
              path:'/auth/button',
              name:'button',
              component:ButtonAuth
            },
            {
              path:'/auth/menu',
              name:'menu',
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

// 导航守卫

router.beforeEach((to, from, next) => {
  let sessionStr = sessionStorage.getItem('kolento');
  let sessionData = JSON.parse(sessionStr);
  let token = sessionData.token;
  if(token) {
      if (to.name === 'login'){
        next('/')
      }else{
        next()
      }
  } else {
      // 没有token 只能访问登录页面 其它页面无法访问
    if (to.name === 'login'){
      next()
    }else{
      next('/login')
    } 
  }
  
})

export default router
