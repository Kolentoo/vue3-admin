<template>
  <div class="menu-auth bg">
    <h2>菜单权限</h2>
    <div class="tree-box">
      <a-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
        checkable
        :tree-data="treeData" >
        <template #title="{ title, key }">
          <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
          <template v-else>{{ title }}</template>
        </template>
      </a-tree>
    </div>
    <div class="btn-group">
      <a-button class="auth-btn" @click="reset">初始化</a-button>
      <a-button class="auth-btn" type="primary" @click="save">保存</a-button>
    </div>
  </div>
</template>
  
<script setup>
import { ref, watch } from 'vue';
import {message} from 'ant-design-vue'
const treeData = [
  {
    title: '首页',
    key: 'home',
    disabled: true,
  }, 
  {
    title: '用户管理',
    key: 'user',
  },
  {
    title: '权限管理',
    key: 'auth',
    children: [
      {
        key: 'menu-auth',
        title: '菜单权限',
      },
      {
        key: 'button-auth',
        title: '团队分组',
      }
    ]
  },
  {
    title: '系统设置',
    key: 'setting',
  },
];
const expandedKeys = ref([]);
const selectedKeys = ref(['home']);
const checkedKeys = ref(['home']);
watch(expandedKeys, () => {
  // console.log('expandedKeys', expandedKeys);
});
watch(selectedKeys, () => {
  // console.log('selectedKeys', selectedKeys);
});
watch(checkedKeys, () => {
  // console.log('checkedKeys', checkedKeys);
});

// 初始化
let reset=()=>{
  message.success('操作成功');
}

// 保存权限
let save=()=>{
  message.success('操作成功');
}


</script>

<style scoped>
 h2 {
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 16px;
 }

 .tree-box {
  margin-top: 16px;
 }

.btn-group {
  margin-top: 20px;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: flex-end;
}
 .auth-btn {margin-left: 10px;}
</style>