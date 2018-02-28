<template>
  <div>
  <h2>第一个vue项目</h2>
  <img src="./assets/logo.png" alt="logo" class="logo">
  <HelloWorld/><!--使用组件标签-->
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
    export default {
      components: {
          HelloWorld
      }
    }
</script>
<style scoped>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
