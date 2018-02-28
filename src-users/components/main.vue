<template>
  <div class="row">
    <h2 v-show="firstView">输入用户名搜索</h2>
    <h2 v-show="isLoading">LOADING......</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row">
    <div class="card" v-for="(user, index) in users" :key="index" >
      <a :href="user.url" target="_blank">
        <img :src="user.avatar" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'

  export default {
    props:{
      searchName: String,
    },
    data() {
      return {
        users: [],
        firstView:true,
        isLoading:false,
        errorMsg:'',
        }
      },
    mounted (){
      // 订阅消息(search)
       PubSub.subscribe('search',(message, searchName) =>{
         // 需要发送新的ajax请求
         // 请求之前，更新状态
         this.firstView = false
         this.isLoading = true
         this.users= []
         this.errorMsg =''
         //发送请求
         const url = `https://api.github.com/search2/users?q=${searchName}`
         axios.get(url)
           .then(response => {
             // 请求返回成功
             //修改状态
             this.isLoading = false
             //console.log(response);
             const result= response.data;
             const users = result.items;
             this.users = users.map((user, index)=> ({
               avatar: user.avatar_url,
               url: user.html_url,
               name: user.login
             }))
           })
           .catch(error =>{
             //请求返回（失败）
             this.isLoading = false
             this.errorMsg = '请求失败!'
           })
    })
    }
  }


</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
