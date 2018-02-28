/*
路由器对象模块
  */

import Vue from 'vue'
import  VueRouter from 'vue-router'

import About from '../views/about.vue'
import Home from '../views/home.vue'
import News from '../views/news.vue'
import Message from '../views/message.vue'
import MessageDetail from '../views/messageDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component: Message,
          children:[
            {
              path: 'mdetail/:id',
              component:MessageDetail
            },
            {
              path: '/home',
              redirect: 'news'
            }

          ]
        }
      ]
    }
  ]
})
