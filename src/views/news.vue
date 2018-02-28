<template>
<ul>
  <li v-for="(news, index) in newsArry" :key="index" >{{news}}</li>
</ul>
</template>
<script>
  export default {
    data() {
      return {
        newsArry: ['news01', 'news02', 'news03']
      }
      },
    methods: {},
    computed: {},
    components: {}
  }

</script>
<style scoped>

</style>
