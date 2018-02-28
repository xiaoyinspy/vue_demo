<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :todos="todos" :addTodo="addTodo"/>
        <TodoMain :todos="todos"  :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :selectAll="selectAll" :clearCompleted="clearCompleted"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "./components/Header.vue"
  import Main from "./components/Main.vue"
  import  Footer from "./components/Footer.vue"
  import PubSub from "pubsub-js"

  export default {
      components:{
        TodoHeader: Header,
        TodoMain: Main,
        TodoFooter: Footer
      },
    data() {
        return {
      //从localStorage中读取保存todos数据
      todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]')
    }
    },
    methods: {
        //添加todo
      addTodo(todo){
        this.todos.unshift(todo)
      },
      //删除todo
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      //全选或全不选
      selectAll(check){
        this.todos.forEach(todo=>todo.completed=check)
      },
      clearCompleted(){
        this.todos=this.todos.filter(function (todo) {
          return !todo.completed
        })
      }
    },
    computed: {
    },
    watch:{
        todos:{
          deep:true, //深度监视
          handler:function (newValue) { //最新的todos
            //将todos保存在localStorage(保存的是newValue的JSON格式)
            window.localStorage.setItem('todos_key',JSON.stringify(newValue))
          }
        }
    }
  }

</script>
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
