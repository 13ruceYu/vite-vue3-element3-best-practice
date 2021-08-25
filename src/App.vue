<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="state.msg" @onHelloClick="onHelloClick" />
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import HelloWorld from 'comps/HelloWorld.vue'

const state = reactive({
  msg: 'Hola Vue3'
});

const onHelloClick = () => {
  state.msg = 'Yo Vue3'
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
