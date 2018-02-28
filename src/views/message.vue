<template>
    <div>
      <ul>
        <li v-for="(m, index) in messages" :key="index">
            <router-link :to="'/home/message/mdetail/'+ m.id">{{m.title}}</router-link>
            <button @click="pushShow(m.id)">push查看</button>
          <button @click="replaceShow(m.id)">replace查看</button>
        </li>
        <button @click="$router.back()">返回</button>
        <hr>
            <router-view></router-view>
      </ul>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        messages:[]
      }},
    mounted () {
      //模拟异步获取数据
      setTimeout( () => {
        this.messages = [
          {id: 1, title: 'message01'},
          {id: 3, title: 'message03'},
          {id: 5, title: 'message05'},
        ]
      }, 1000)
    },
    methods: {
      pushShow (id) {
        this.$router.push('/home/message/mdetail/'+ id)
      },
      replaceShow(id) {
        this.$router.replace('/home/message/mdetail/'+ id)
      }
    },
    computed: {},
    components: {}
  }

</script>
<style scoped>

</style>
