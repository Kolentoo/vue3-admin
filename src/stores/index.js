import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      username:'admin',
      id:'',
      menuStatus:false,
      token:'',
      authBox:[]
    }
  },
  getters: {

  },
  actions: {
    clearAll() {
      console.log('删除记录',this)
      this.username='admin';
      this.id='';
      this.token='';
      this.authBox=['home','user']
    },
  },
})
