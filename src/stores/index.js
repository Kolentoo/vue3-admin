import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 用户信息
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

// 标签页信息
export const tabStore = defineStore('tab',{
  persist: {
    enabled: true,//开启数据持久化
    strategies: [
      {
        key: 'tab',//给一个要保存的名称
        storage: sessionStorage,//sessionStorage / localStorage 存储方式
      }
    ]
  },
  state:()=>{
    return {
      tabList:[
        {    
          path:'/',
          title: '首页',
          key:'home',
          closable:false,
        }
      ],
    }
  },
  actions:{
    addTab(state,tab){
      // 判断是否已经存在该标签
      const isSome = state.some((item)=>{
        return item.path==tab.path
      })
      if(!isSome){
        state.push(tab);
      }
    },
    removeTab(state,tab){
      let cindex = 0;
      state.filter((item,idx)=>{
        if(item.key==tab){
          cindex=idx
        }
      });
      state.splice(cindex,1);
    }
  }
})
