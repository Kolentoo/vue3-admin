import './assets/main.css'

import { createApp } from 'vue'
// pinia数据存储 状态管理
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'//引入pinia数据持久化插件

import App from './App.vue'
// 路由
import router from './router'
// ant design ui框架
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// 数据模拟mock
import Mock from './mock'
// 图标库
import 'remixicon/fonts/remixicon.css'



const app = createApp(App)
app.use(Antd)
app.use(createPinia().use(piniaPluginPersist));
app.use(router)

// 全局自定义指令
let sessionStr = sessionStorage.getItem('kolento');
let sessionData = JSON.parse(sessionStr);
let authBox = sessionData?sessionData.authBox:[];
app.directive('auth',{
    mounted(el, binding, vnode) {
        if (!authBox.includes(binding.value)) {
            el.remove();
        }
    }
})

app.mount('#app')




