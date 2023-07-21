// 导入mock
import Mock from 'mockjs';

// 只要拦截到这个地址就会触发 /api/login
let loginData = {
  token:'kolento',
  username:'Kolento',
  id:1,
  authBox:['home','user','setting','auth','menuAuth','buttonAuth'],
}
Mock.mock("/api/login", {
  success:true,
  data:loginData
})

Mock.mock("/api/loginout", {
  success:true,
  data:{},
  msg:'退出成功'
})

export default Mock