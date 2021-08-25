<template>
  <Comp @onCompClick="onCompClick"></Comp>
  <h1>{{ msg }}</h1>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <button @click="onHelloClick">hello emit</button>
</template>

<script setup>
// 1. 组件直接导入，直接使用
import Comp from './Comp.vue'
import { defineProps, reactive } from 'vue'

// 2. props 定义
defineProps({
  msg: String
});

// 3. 事件传递
const emit = defineEmits(['onHelloClick']);
const onHelloClick = () => {
  emit('onHelloClick')
};

// 4. 获取上下文

const state = reactive({ count: 0 });

const onCompClick = () => {
  console.log('yoooo');
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
