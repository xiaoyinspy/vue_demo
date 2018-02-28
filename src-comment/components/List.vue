<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
    <Item :comments="comments" v-for=" (comment,index) in comments" :key="index"
          :comment="comment" :index="index" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>
<script>
  import Item from './Item.vue'
  export default {
    props: {
      comments: Array,
      deleteComment: Function
    },
    data () {
      return {}
      },
    methods: {},
    computed: {},
    components: {
      Item
    }
  }

</script>
<style scoped>
  .reply {
    margin-top: 0px;
  }

</style>
