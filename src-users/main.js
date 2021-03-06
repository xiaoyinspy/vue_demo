import Vue from "vue";
import  App from "./App.vue"
import VueResource from 'vue-resource'


// 声明使用（安装插件）
Vue.use(VueResource) // 内部调用install给vm/组件对象添加了一个属性: $http
new Vue({
  el:"#app",
  components:{App},
  template:'<App/>'
})
