import Vue from 'vue'
import Router from 'vue-router'
import Test01 from '@/components/Test01'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Test01',
    component: Test01
  }]
})
