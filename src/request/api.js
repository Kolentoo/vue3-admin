import service from "./request"

export default {
 
    //登录接口
    loginApi() {
        return service({
            url: `/api/login`,
            method: "post",
        });
    },

    //退出登录接口
    loginOutApi() {
        return service({
            url: `/api/loginout`,
            method: "post",
        });
    },

    // 首页数据
    homeApi() {
        return service({
            url: `/api/home/data`,
            method: "get",
        });
    },
   
}
