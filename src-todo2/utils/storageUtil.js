/*
  数据存储的工具模块
  向外暴露对象还是函数？ 看有几个方法
*/

const TODOS_KEYS = 'todos_key'
export default {
  //读取保存的todos
  readTodos (){
    return JSON.parse(window.localStorage.getItem(TODOS_KEYS) || '[]')
  },

  //保存指定的todos
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEYS,JSON.stringify(todos))
  }
}
