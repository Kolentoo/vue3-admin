// 导入mock
import Mock from 'mockjs';

// 只要拦截到这个地址就会触发 /api/login
Mock.mock(/\/api\/login/, {
	success:true,
  data:{
    token:'kolento',
    username:'Kolento',
    authBox:['home','user','table','article'],
  }
})