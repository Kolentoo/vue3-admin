import service from "./request"

export default {
 
    //登录接口
    loginApi() {
        return service({
            url: `/api/login`,
            method: "post",
        });
    },

    //登录接口
    loginOutApi() {
        return service({
            url: `/api/loginout`,
            method: "post",
        });
    }
   
}
