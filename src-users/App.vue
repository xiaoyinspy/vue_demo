<template>
  <div class="container">
    <Search />
    <Main />
  </div>
</template>
<script>

import axios from 'axios'
import Search from "./components/search.vue"
import Main from "./components/main.vue"

  export default {
    components:{
      Search,
      Main
    }
  }

</script>
<style>

</style>
