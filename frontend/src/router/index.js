import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/Index.vue'
import Login from '../components/login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
