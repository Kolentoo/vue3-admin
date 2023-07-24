<template>
  <div class="nav-box">
    <a-tabs size="small" v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" @tabClick="chooseNav" hide-add>
      <a-tab-pane v-for="item in tabBox.tabList" :key="item.key" :tab="item.title" :closable="item.closable" >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {tabStore} from '../stores/index'
import {useRoute,useRouter} from 'vue-router';
const route = useRoute();
const router = useRouter();
let tabBox = tabStore();

// 设置默认选中tab
const activeKey = ref(tabBox.tabList[0].key);

// 添加标签页
const add = () => {
  let newTab = {
    path:route.path,
    title: route.meta.title,
    key: route.meta.name,
  }
  tabBox.addTab(tabBox.tabList,newTab);
};

// 关闭标签页【处理关闭标签页后标签页的tab跳转和页面跳转】
const remove = targetKey => {
  let lastIndex = 0;
  tabBox.tabList.forEach((list, index) => {
    if (list.key === targetKey) {
      lastIndex = index - 1;
    }
  });
  if (tabBox.tabList.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = tabBox.tabList[lastIndex].key;
    } else {
      activeKey.value = tabBox.tabList[0].key;
    }
    router.push({name:activeKey.value})
  }
};

// 操作标签页
const onEdit = (targetKey, action) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey);
    tabBox.removeTab(tabBox.tabList,targetKey);
  }
};

let chooseNav=(item)=>{
  router.push({name:item});
}

watch(()=>route.path,()=>{
  // 路由变化时，判断是否需要添加标签页
  activeKey.value=route.meta.name;
  add();
})


</script>

<style scoped>
  .nav-box {padding: 10px 10px 0 ;}
</style>