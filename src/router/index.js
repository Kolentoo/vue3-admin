import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Main from '@/views/main.vue';
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import User from '@/views/user.vue';
import Setting from '@/views/setting.vue';
import MenuAuth from '@/views/MenuAuth.vue';
import Douyin from '@/views/douyin.vue'


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
          component:Home,
          meta:{
            title:'首页',
            name:'home'
          }
        },
        {
          path:'/user',
          name:'user',
          component:User,
          meta:{
            title:'用户管理',
            name:'user'
          }
        },
        {
          path:'/zimeiti',
          name:'zimeiti',
          children:[
            {
              path:'/zimeiti/douyin',
              name:'douyin',
              component:Douyin,
              title:'自媒体管理',
              meta:{
                title:'抖音直播点赞',
                name:'douyin'
              }
            }
          ]
        },
        {
          path:'/auth',
          name:'auth',
          children:[
            {
              path:'/auth/menu',
              name:'menu',
              component:MenuAuth,
              title:'菜单权限',
              meta:{
                title:'菜单权限',
                name:'menu'
              }
            }
          ]
        },
        {
          path:'/setting',
          name:'setting',
          component:Setting,
          title:'表单设置',
          meta:{
            title:'表单设置',
            name:'setting'
          }
        }
      ]
    }
  ]
})

// 导航守卫

router.beforeEach((to, from, next) => {
  let sessionStr = sessionStorage.getItem('kolento');
  let sessionData = JSON.parse(sessionStr);
  let token = sessionData?sessionData.token:'';
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
