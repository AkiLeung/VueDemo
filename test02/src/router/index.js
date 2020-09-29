import Vue from 'vue'
import Router from 'vue-router'
import Test01 from '@/components/Test01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test01',
      component: Test01
    }
  ]
})
