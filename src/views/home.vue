<template>
  <div class="home">
    首页
    <button v-auth="'home'">有权限</button>
    <button v-auth="'hello'">没有权限</button>
  </div>
</template>

<script setup>
import apiBox from '../../src/request/api'


let getData=async()=>{
  const result = await apiBox.homeApi({});
  console.log('result',result);
}
getData();
</script>