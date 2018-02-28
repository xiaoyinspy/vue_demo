<template>
  <div>
  <h2>Home route Component</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">New</router-link>
      </li>
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
  export default {
    data() {return {}},
    methods: {},
    computed: {},
    components: {}
  }

</script>
<style scoped>

</style>
