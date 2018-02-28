import Vue from 'vue'
import App from './App.vue'
import router from './router'

//创建vue配置路由器
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router // 配置路由器
})
