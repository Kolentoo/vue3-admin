<template>
  <div class="user-box">
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            姓名
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span class="operate-btn">
            <a>编辑</a>
          </span>
          <span class="operate-btn" v-auth="'home'">
            <a>删除</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup>
  // 表头
  const columns = [{
    name: 'name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
  }, {
    title: '操作',
    key: 'action',
  }];
  // 表格数据
  const data = [
    {
      key: '1',
      name: 'Kolento',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      name: 'Amiee',
      age: 19,
      address: 'London No. 1 Lake Park',
      tags: ['pretty'],
    }, {
      key: '3',
      name: 'Jessie',
      age: 32,
      address: 'Shanghai ',
      tags: ['cool', 'teacher'],
    }, {
      key: '14',
      name: 'Merry',
      age: 18,
      address: 'Sidney No. 1 Lake Park',
      tags: ['loser', 'teacher'],
    }, {
      key: '4',
      name: 'Linda',
      age: 22,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'engineer'],
    }, {
      key: '5',
      name: 'Peter',
      age: 22,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'student'],
    }, {
      key: '6',
      name: 'Oicad',
      age: 62,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'pupil'],
    }, {
      key: '7',
      name: 'Master',
      age: 19,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'player'],
    }, {
      key: '8',
      name: 'Oclivar',
      age: 30,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'Leader'],
    }, {
      key: '9',
      name: 'Happy',
      age: 29,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'happy'],
    }, {
      key: '10',
      name: 'Tom',
      age: 12,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'cat'],
    }, {
      key: '11',
      name: 'Jerry',
      age: 6,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'mouse'],
    }, {
      key: '12',
      name: 'Snack',
      age: 12,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'snack'],
    }, {
      key: '13',
      name: 'Cat',
      age: 13,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'animal'],
    }
  ];
</script>

<style scoped>
  .operate-btn {margin:0 4px;}
</style>