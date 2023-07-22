<template>
  <div class="main">
    <div :class="['side-box',smallSide?'small-side':'']">
      <div class="logo">
        <p class="title">Kolento</p>
      </div>
      <sideBar />
    </div>
    <div :class="['content-box',smallSide?'big-content':'']">
      <topBar />
      <div class="content">
        <router-view />
      </div>
      
    </div>
  </div>
</template>

<script setup>
  import {computed} from 'vue';
  import sideBar from '@/components/sideBar.vue';
  import topBar from '@/components/topBar.vue';
  import {useStore} from '../stores/index';
  const store  = useStore();

  let smallSide =computed(()=>{
    return store.menuStatus;
  })

</script>

<style lang="scss" scoped>
  .main {
    display:flex;
    .side-box {
      height: 100vh;
      width: 250px;
      transition:all ease 0.3s;
      background: #001529;
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
      .logo {
        width: 80%;
        margin:0 auto;
        padding:20px 0;
        .title {
          font-size: 30px;
          color: rgba(0,0,0,.85);
          font-weight: 600;
          text-align: center;
          background: linear-gradient(120deg, #4abf8a,#fff 30%, #aaa 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          margin-bottom: 0;
          letter-spacing: 6px;
          transition: all ease 0.3s;
        }
      }
    }
    .small-side {
      width: 80px;
      .logo {
        .title {
          width: 96%;
          font-size: 13px;
          letter-spacing: 2px;
        }
      }
    }

    .content-box {
      width: calc(100vw - 250px);
      background: rgb(240,242,245);
      transition:all ease 0.3s;
      .content {padding: 20px;}
    }
    .big-content {
      width: calc(100vw - 80px);
    }
  }
</style>