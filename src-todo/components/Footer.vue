<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allCompleted"/>
    </label>
    <span>
          <span>已完成{{completedTodos}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completedTodos>0" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props:{
      todos:Array,
      selectAll:Function,
      clearCompleted:Function
    },
    data() {return {
    }},
    methods: {
    },
    computed: {
      //已完成todo项目
      completedTodos(){
        return  this.todos.reduce((proDate,todo)=>{
          return proDate +(todo.completed ? 1:0)
        },0)
      },
      allCompleted: {
        get(){
          return this.completedTodos === this.todos.length && this.todos.length > 0;
        },
        set(value){// value是boolean类型
          // 对所有todos进行全选或者全不选
          this.selectAll(value);
        }
      }
    },
    components: {}
  }

</script>
<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
