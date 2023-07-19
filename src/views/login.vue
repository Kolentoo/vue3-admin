<template>
  <div class="login">
    <div class="form-box">
      <p class="title">K o l e n t o</p>
      <a-form
        ref="loginBox"
        :model="formState"
        name="basic"
        :label-col="{span:0}"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        :rules="rules"
        size="large"
        @validate="checkForm"
        @finish="onFinish"
        @finishFailed="onFinishFailed" >
        <a-form-item
          name="uname">
          <a-input  v-model:value="formState.uname" placeholder="请输入用户名" allow-clear>
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input> 
        </a-form-item>

        <a-form-item
          name="psd">
          <a-input-password  v-model:value="formState.psd" placeholder="请输入密码" type="password" allow-clear>
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
          <a-button class="login-btn"  type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
  import { reactive,ref } from 'vue';
  import { useRouter } from "vue-router";
  import { message } from 'ant-design-vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

  // 定义路由
  const router = useRouter();
  
  // 用户名+密码
  const formState = reactive({
    uname: '',
    psd: '',
  });

  // 表单验证规则
  let loginBox = ref();
  let usernameCheck = async (_rule, value) => {
    if (value === '') {
      return Promise.reject('请输入用户名');
    } else {
      if (formState.username !== '') {
        loginBox.value.validateFields('验证通过');
      }
      return Promise.resolve();
    }
  };
  let passwordCheck = async (_rule, value) => {
    if (value === '') {
      return Promise.reject('请输入密码');
    } else {
      if (formState.password !== '') {
        loginBox.value.validateFields('验证通过');
      }
      return Promise.resolve();
    }
  };
  const rules = {
    uname: [{
      required: true,
      validator: usernameCheck,
      trigger: 'change',
    }],
    psd: [{
      required: true,
      validator: passwordCheck,
      trigger: 'change',
    }],
  };

  // 验证成功
  const onFinish = values => {
    console.log('Success:', values,'跳转到首页');
    if(values.uname=='kolento'&&values.psd=='kolento'){
      router.push('/');
    }else{
      message.info('用户名或密码错误');
    }

  };


  // 验证失败
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // 表单重置
  const resetForm = () => {
    loginBox.value.resetFields();
  };

  // 表单验证时触发
  const checkForm = (...args) => {
    console.log(1,args);
  };

</script>

<style lang="scss" scoped>
  .title {
    font-size: 44px;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    text-align: center;
    background: linear-gradient(120deg, #4abf8a,#3eaf7c 30%, #3e71af 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .login {
    height: 100vh;
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(../../public/images/bj.svg) no-repeat 50%;
    background-size: 100%;

    .form-box {
      width: 400px;
      margin:0 auto;
      padding-top: 15%;
      .login-btn {
        width: 100%;
      }
      
    }
  }
</style>