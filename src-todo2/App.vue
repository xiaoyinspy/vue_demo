<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo"/>  &lt;!&ndash;绑定自定义事件监听&ndash;&gt;-->
      <TodoHeader ref="header"/>  <!--绑定自定义事件监听-->
      <TodoMain :todos="todos"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :deleteComputed="deleteComputed">
        <input type="checkbox" v-model="allComplete" slot="selectAll"/>
        <span slot="size">已完成{{completeSize}}/ 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize>0"
                @click="deleteComputed" slot="clearCompleted">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from './utils/storageUtil'
  import   PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        // 从localStorage中读取保存todos数据
        todos: storageUtil.readTodos()
      }
    },
//    created() {
//      //绑定自定义的事件监听
//      this.$refs.header.$on('addTodo',this.addTodo)
//    },
    mounted (){
      //绑定自定义的事件监听
      this.$refs.header.$on('addTodo',this.addTodo)
      //订阅消息
      PubSub.subscribe('deleteTodo', (msg,index)=>{
        this.deleteTodo(index)
      })
    },
    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 删除todo
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      // 全选或全不选
      selectAll (check) {
        this.todos.forEach(todo => todo.completed = check)
      },
      //删除完成的
      deleteComputed () {
        // 过滤产生新的数组并更新
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    },

    watch: {
      todos: {
        deep: true, //深度监视
        /*handler: function (newValue) { // 最新的todos
          // 将todos保存localStorage (todos的JSON数据)
          // window.localStorage.setItem('todos_key', JSON.stringify(newValue))
          storageUtil.saveTodos(newValue)
        }*/
        handler: storageUtil.saveTodos
        }
      },
    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preToal, todo) => preToal+(todo.completed?1:0),0)
      },

      allComplete: {
        get () {
          return this.completeSize===this.todos.length && this.todos.length>0
        },
        set (value) {// value是boolean类型
          // 对所有todos进行全选或者全不选
          this.selectAll(value)
        }
      }
    }
  }
</script>

<style>
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
