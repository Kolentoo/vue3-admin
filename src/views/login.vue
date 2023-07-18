<template>
  <div class="login">
    <div class="form-box">
      <el-form
        ref="ruleFormRef"
        :model="loginForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm" >
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)" >Submit</el-button >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .login {
    background: url('../../public/images/login-bj.jpg') no-repeat center center;
    background-size: cover;
    width: 100%;
    max-width: 100vw;
    height: 100vh;
  }
</style>