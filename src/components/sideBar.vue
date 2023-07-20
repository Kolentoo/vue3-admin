<template>
  <div class="side-bar" style="width: 100%">
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items">
    </a-menu>
  </div>
</template>

<script setup>
import { reactive, watch, h } from 'vue';
import { HomeOutlined,UserOutlined,SettingOutlined,SolutionOutlined  } from '@ant-design/icons-vue';

// 菜单栏状态
const state = reactive({
  collapsed: false,
});

// 菜单数据
const items = reactive(
  [
    {
      icon: () => h(HomeOutlined),
      label: '首页',
      title: 'home',
      auth:'home,'
    },
    {
      icon: () => h(UserOutlined ),
      label: '用户管理',
      title: 'user',
      auth:'user'
    },
    {
      icon: () => h(SolutionOutlined),
      label: '权限管理',
      title: 'auth',
      auth: 'auth',
      children: [
        {

          label: '菜单权限',
          title: 'menuAuth',
          auth: 'menuAuth',
        }, {
          label: '按钮权限',
          title: 'buttonAuth',
          auth: 'buttonAuth',
        }
      ]
    },
    {
      icon: () => h(SettingOutlined),
      label: '系统设置',
      title: 'setting',
      auth: 'setting',
    },
  ]
);


</script>

<style scoped>
  .side-bar {
    height: calc(100vh - 75px);
    overflow-y: auto;
  }
</style>