<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="index"
          :todo="todo" index="index" :deleteTodo="deleteTodo"/>
  </ul>
</template>
<script>
  import Item from './Item.vue'
  export default {
    props:{
      todos:Array,
      deleteTodo:Function
    },
    data() {return {

    }},
    methods: {},
    computed: {},
    components: {
      Item
    }
  }

</script>
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
