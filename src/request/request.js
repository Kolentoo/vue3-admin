import axios from 'axios';
let sessionStr = sessionStorage.getItem('kolento');
let sessionData = JSON.parse(sessionStr);
let token = sessionData?sessionData.token:'';

// 创建axios实例
const service = axios.create({
  baseURL: "",
  //前半段url
  timeout: 5000
  //如果5s后未响应，就通知用户页面存在加载错误
})

// 接口请求拦截
service.interceptors.request.use(
  (res) => {
    // 请求成功拦截, 无论地址是否是对的, 只要发请求就会走这个
    if (token) {
      res.headers['Authorization'] = token // 如果要求携带在请求头中
    }
    return res
  },
  (err) => {
    // 不知道什么情况下会走这个, 把地址删除了好像也是正常的
    return err
  }
)

// 接口响应拦截
service.interceptors.response.use(
  (res) => {
    // 返回的status 以 2 开头会走这个
    return res
  },
  (err) => {
    // 响应拦截, status !== 200 会被这里拦截
    console.log(err)
  }
)

export default service;