// 导入mock
import Mock from 'mockjs';

// 只要拦截到这个地址就会触发 /api/login
let loginData = {
  token:'kolento',
  username:'Kolento',
  authBox:['home','user','table','article'],
}
Mock.mock("/api/login", {
  success:true,
  data:loginData
})

export default Mock