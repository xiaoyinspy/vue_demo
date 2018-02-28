<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="submitConent">提交</button>
        </div>
      </div>
    </form>
  </div>

</template>
<script>
  export default {
    props: {
       addComment: Function
    },
    data() {
      return {
      name: '',
      content: ''
     }
    },
    methods: {
      submitConent () {
        // 1.检查数据
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert('必须正常输入')
          return
        }
        // 2.根据数据封装一个comment对象
        const comment = {
          name,
          content
        }
        // 3.将生成的comment对象添加到comments上
        this.addComment(comment)
        // 4.清空
        this.name= ''
        this.content= ''
      }
    },
    computed: {},
    components: {}
  }

</script>
<style scoped>

</style>
