<template>
  <div class="side-bar" style="width: 100%">
    <!-- 常规菜单 -->
    <!-- <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items">
    </a-menu> -->

    <!-- 递归菜单 -->
    <a-menu
      :inline-collapsed="state.collapsed"
      v-model:selectedKeys="state.selectedKeys"
      theme="dark"
      mode="inline">
      <menu-tree
        :menuList="items"
        @menuClick="menuClick" >
      </menu-tree>
    </a-menu>


  </div>
</template>

<script setup>
import { reactive, watch, h,computed } from 'vue';
import { useRouter } from 'vue-router';
import menuTree from './menuTree.vue';
import {useStore} from '../stores/index';
const store  = useStore();

const router = useRouter();

// 菜单栏状态
const state = reactive({
  collapsed: computed(()=>{
    return store.menuStatus
  }),
  selectedKeys:['home']
});

// 菜单数据
let authBox = reactive(['home','user','auth','menuAuth','setting','zimeiti','douyin'])
const items = reactive(
  [
    {
      icon: 'ri-home-3-line',
      label: '首页',
      title: 'home',
      auth:'home',
      key:'home',
      path:'/'
    },
    {
      icon: 'ri-user-line',
      label: '用户管理',
      title: 'user',
      auth:'user',
      key:'user',
      path:'/user'
    },
    {
      icon: 'ri-bard-line',
      label: '自媒体管理',
      title: 'zimeiti',
      auth:'zimeiti',
      key:'zimeiti',
      path:'/zimeiti',
      children: [
        {

          label: '抖音直播点赞',
          title: 'douyin',
          auth: 'douyin',
          key: 'douyin',
          path:'/zimeiti/douyin'
        }
      ]
    },
    {
      icon: 'ri-function-line',
      label: '权限管理',
      title: 'auth',
      auth: 'auth',
      key: 'auth',
      children: [
        {

          label: '菜单权限',
          title: 'menuAuth',
          auth: 'menuAuth',
          key: 'menuAuth',
          path:'/auth/menu'
        }
      ]
    },
    {
      icon: 'ri-book-mark-fill',
      label: '项目管理',
      title: 'auth2',
      auth: 'auth2',
      key: 'auth2',
      children: [
        {

          label: '菜单权限2',
          title: 'menuAuth2',
          auth: 'menuAuth2',
          key: 'menuAuth2',
          path:'/auth/menu'
        }, 
        {
          label: '按钮权限2',
          title: 'buttonAuth2',
          auth: 'buttonAuth2',
          key: 'buttonAuth2',
          path:'/auth/button',
          children:[
            {

              label: '三级菜单1',
              title: 'three',
              auth: 'three',
              key: 'three',
              path:'/auth/menu'
            }, 
            {

              label: '三级菜单2',
              title: 'four',
              auth: 'four',
              key: 'four',
              path:'/auth/button'
            }, 
          ]
        }
      ]
    },
    {
      icon: 'ri-settings-3-line',
      label: '表单设置',
      title: 'setting',
      auth: 'setting',
      key: 'setting',
      path:'/setting'
    },
  ]
);

let menuClick=(item)=>{
  router.push(item.path);
}

</script>

<style scoped>
  .side-bar {
    height: calc(100vh - 75px);
    overflow-y: auto;
  }

</style>