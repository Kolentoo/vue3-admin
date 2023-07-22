// 导入mock
import Mock from 'mockjs';

// 只要拦截到这个地址就会触发 /api/login
// 登录接口
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

// 退出登录
Mock.mock("/api/loginout", {
  success:true,
  data:{},
  msg:'退出成功'
})

// 首页数据
let indexData = {
  barData:[50,80,90,45,66,120,58],
  timeData:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
}
Mock.mock("/api/home/data", {
  success:true,
  data:indexData
})

export default Mock