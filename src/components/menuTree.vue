<template>
    
    <template v-for="item in menuData" :key="item.key">
        <template v-if="item.children">
            <a-sub-menu :key="item.key" v-if="authBox.includes(item.auth)">
                <template #title>
                    <i :class="item.icon"></i>
                    {{ item.label }}
                </template>
                <template v-if="!item.children">
                    <template v-for="list in item.children" :key="list.key">
                        <a-menu-item v-if="authBox.includes(list.auth)" :key="list.key"  @click="menuClick(list)">
                            {{ list.label }}{{ item.auth }}
                        </a-menu-item>
                    </template>

                </template>
                
                <template v-if="item.children">
                    <menu-tree
                        :menuList="item.children"
                        @menuClick="menuClick" >
                    </menu-tree>
                </template>

            </a-sub-menu>
        </template>
        <template v-else>
            <a-menu-item v-if="authBox.includes(item.auth)" :key="item.key" @click="menuClick(item)">
                <i :class="item.icon"></i>
                {{ item.label }}
            </a-menu-item>
        </template>
    </template>
    
</template>

<script setup>
import {reactive} from 'vue';
import {useStore} from '../stores/index'
const store = useStore();
console.log('store',store)

// 权限数据
let authBox = reactive(['home','user','auth','menuAuth','setting'])

const emit = defineEmits(['menuClick']);

const props = defineProps(['menuList']);
console.log('props',props);

let menuData = reactive([]);
menuData=props.menuList;

const menuClick = (item) => {
  emit('menuClick', item);
};
</script>
