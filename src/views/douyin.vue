<template>
  <div class="douyin">
    <div class="tips-box">
      <a-alert message="输入直播间号和点赞次数后，保存配置，选择帐号后开启点赞任务即可。" type="info" show-icon/>
    </div>
    <div class="search-box">
      <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed" >
        <a-form-item>
          <a-input v-model:value="formState.room" placeholder="抖音直播间号" allow-clear></a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.count" type="count" placeholder="每秒点赞次数" allow-clear></a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit">
            保存配置
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="table-box">
      <a-table :dataSource="tableData" :columns="tableHead" :pagination="false">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'status'">
            <a-tag color="success">{{ record.status }}</a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <a-button class="btn-list" type="primary" size="small">开始</a-button>
            <a-button class="btn-list" type="primary" size="small">停止</a-button>
            <a-button class="btn-list" type="primary" size="small">查看日志</a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  // 输入框操作
  const formState = reactive({
    room: '',
    count: 20,
  });
  const handleFinish = values => {
    console.log(values, formState);
  };
  const handleFinishFailed = errors => {
    console.log(errors);
  };

  const tableData = reactive([
    {
      key: '1',
      username: '动漫推荐_Kolento',
      password:'kolento2023',
      phone: '150****3453',
      status: '空闲',
    },
    {
      key: '2',
      username: 'KIRIKO',
      password:'kolento2023',
      phone: '180****1126',
      status: '空闲',
    },
  ])

  const tableHead = reactive([
    {
      title: '帐号名称',
      dataIndex: 'username',
      key: 'username',
      width:250
    },
    {
      title: '帐号密码',
      dataIndex: 'password',
      key: 'password',
      width:250
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width:250
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width:250
    },
  ])
</script>

<style scoped>
  .ant-alert {width: 500px;}
  .search-box {margin-top: 12px;}
  .table-box {margin-top: 12px;}
  .btn-list {margin:0 5px;}
</style>