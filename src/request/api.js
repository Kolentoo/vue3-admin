import service from "./request"

export default {
 
    //登录接口
    loginApi() {
        return service({
            url: `/api/login`,
            method: "post",
        });
    }
   
}
