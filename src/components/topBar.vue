<template>
  <div class="top-bar">
    <div class="menu-btn pointer">
      <MenuUnfoldOutlined v-show="open" />
      <MenuFoldOutlined v-show="!open"  />
    </div>
    <div class="user-info">
      <a-dropdown class="drop-btn" :trigger="['hover']">
        <a class="ant-dropdown-link" @click.prevent>
          <div class="user-detail">
            <div class="avatar-box">
              <img src="../../public/images/avatar.gif" alt="">
            </div>
            <p class="username">K o l e n t o</p>
          </div>
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined,DownOutlined} from '@ant-design/icons-vue';
import {ref} from 'vue';
let open = ref(false)
  
</script>

<style lang="scss" scoped>
  .top-bar {
    height: 60px;
    padding: 0;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;

    .menu-btn {
      background: rgba(0,0,0,0);
      height: 60px;
      font-size: 20px;
      width: 60px;
      transition:all ease 0.2s;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .menu-btn:hover {
      background: rgba(0,0,0,.025);
    }

    .user-info {
      margin-right: 10px;
      padding:0 10px;
      height: 60px;
      background: rgba(0,0,0,0);
      transition:all ease 0.2s;
      cursor: pointer;
      .drop-btn {
        height: 100%;
        display:flex;
        align-items: center;
      }
      .user-detail {
        display:flex;
        align-items: center;
        .avatar-box {
          width: 32px;height: 32px;
          border-radius:50%;
          overflow: hidden;
          margin-right: 6px;
          img{width: 100%;height: 100%;}
          
        }
        .username {
          font-size: 16px;
          color: rgba(0,0,0,.85);
          font-weight: 600;
          text-align: center;
          background: linear-gradient(120deg, #4abf8a,#3eaf7c 30%, #3e71af 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }
    .user-info:hover {
      background: rgba(0,0,0,.025);
    }
  }
  
</style>