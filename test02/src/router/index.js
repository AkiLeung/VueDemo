import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '主页',
    component: Home,
    iconCls: 'el-icon-platform-element'
  },
  {
    path: '/Header',
    name: 'Header',
    component: Header,
    iconCls: 'el-icon-platform-element'
  }, {
    path: '/Footer',
    name: 'Footer',
    component: Footer,
    iconCls: 'el-icon-platform-element'
  }]
})
