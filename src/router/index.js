import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import code from '@/pages/code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Code',
      component: code
    }
  ]
})
