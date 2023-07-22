<template>
  <div class="setting bg">
    <h2>表单设置</h2>
    <div class="form-box">
      <a-checkbox :checked="componentDisabled" @change="e => (componentDisabled = e.target.checked)">
        禁用表单
      </a-checkbox>
      <a-form
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        layout="horizontal"
        :disabled="componentDisabled"
        style="max-width: 600px">
        <a-form-item label="姓名">
          <a-input />
        </a-form-item>
        <a-form-item label="性别">
          <a-radio-group v-model:value="radioValue">
            <a-radio value="mail">男</a-radio>
            <a-radio value="femail">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="行业">
          <a-cascader :options="options" />
        </a-form-item>
        <a-form-item label="职业">
          <a-select>
            <a-select-option value="demo">Demo</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="地区">
          <a-tree-select :tree-data="treeData" />
        </a-form-item>
        <a-form-item label="生日">
          <a-date-picker placeholder="" />
        </a-form-item>
        <a-form-item label="工作日期">
          <a-range-picker placeholder="" />
        </a-form-item>
        <a-form-item label="备注">
          <a-textarea :rows="4" />
        </a-form-item>
        <a-form-item label="上传照片">
          <a-upload action="/upload.do" list-type="picture-card">
            <div>
              <PlusOutlined />
              <div style="margin-top: 8px">上传</div>
            </div>
          </a-upload>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
const componentDisabled = ref(true);
const labelCol = {
  style: {
    width: '150px',
  },
};
const wrapperCol = {
  span: 14,
};
const radioValue = ref('apple');
const treeData = reactive([{
  title: 'Light',
  value: 'light',
  children: [{
    title: 'Bamboo',
    value: 'bamboo',
  }],
}]);
const options = reactive([{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
  }],
}]);
const checked = ref(false);
</script>

<style scoped>
  h2 {
    color: rgba(0, 0, 0, 0.88);
    font-weight: bold;
    font-size: 16px;
  }
  .form-box {
    margin-top: 16px;
  }
  
</style>