<template>
  <div class="home bg">
    <a-descriptions title="项目信息" bordered>
      <a-descriptions-item label="项目架构">Vue3.x</a-descriptions-item>
      <a-descriptions-item label="UI框架">Ant Degin Vue 4.0.0</a-descriptions-item>
      <a-descriptions-item label="状态管理">Pinia 2.1.3</a-descriptions-item>
      <a-descriptions-item label="数据模拟">Axios + Mock.js</a-descriptions-item>
      <a-descriptions-item label="描述" :span="2">基于Vue3.x + Ant 的后台管理系统模板。</a-descriptions-item>
      <a-descriptions-item label="状态" :span="3">
        <a-badge status="processing" text="开发迭代中" />
      </a-descriptions-item>
      <a-descriptions-item label="开发者">Kolento</a-descriptions-item>
      <a-descriptions-item label="个人网站"><a href="https://kolentoo.github.io/kolento/">Kolento</a></a-descriptions-item>
      <a-descriptions-item label="状态">开源</a-descriptions-item>
      <a-descriptions-item label="主要功能">
        1.简单的登录、退出登录功能，通过mock进行数据模拟，调用对应接口。
        <br />
        2.导航守卫，路由拦截功能。
        <br />
        3.菜单栏及按钮权限控制，通过接口返回的权限列表进行控制，按钮通过自定义指令v-auth控制。
        <br />
        4.使用了Pinia进行登录信息的数据存储，安装了pinia-plugin-persist将数据session持久化
        <br />
        5.标签页：可以缓存页面的状态，在多个页面中来回切换。（开发中）
        <br />
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<style scoped>

</style>