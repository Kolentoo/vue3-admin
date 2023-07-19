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
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined } from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false,
});

const items = reactive(
  [

    {
      key: '2',
      icon: () => h(DesktopOutlined),
      label: 'Option 2',
      title: 'Option 2',
    },
    {
      key: '3',
      icon: () => h(InboxOutlined),
      label: 'Option 3',
      title: 'Option 3',
    },
    {
      key: 'sub1',
      icon: () => h(MailOutlined),
      label: 'Navigation One',
      title: 'Navigation One',
      children: [
        {
          key: '5',
          label: 'Option 5',
          title: 'Option 5',
        }, {
          key: '6',
          label: 'Option 6',
          title: 'Option 6',
        }, {
          key: '7',
          label: 'Option 7',
          title: 'Option 7',
        }, {
          key: '8',
          label: 'Option 8',
          title: 'Option 8',
        }
      ]
    },
    {
      key: '1',
      icon: () => h(PieChartOutlined),
      label: 'Option 1',
      title: 'Option 1',
    },
  ]
);


const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  // state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

</script>

<style scoped>
  .side-bar {
    height: calc(100vh - 75px);
    overflow-y: auto;
  }
</style>