import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  persist: {
    enabled: true,//开启数据持久化
    strategies: [
      {
        key: 'kolento',//给一个要保存的名称
        storage: sessionStorage,//sessionStorage / localStorage 存储方式
      }
    ]
  },
  state: () => {
    return {
      username:'',
      id:'',
      menuStatus:false,
      token:'',
      authBox:[]
    }
  },
  getters: {
    
  },
  actions: {
    toggleSide(){
      this.menuStatus=!this.menuStatus;
    },
    clearAll() {
      this.username='';
      this.id='';
      this.token='';
      this.authBox=[];
      sessionStorage.clear();
    },
  },
})
