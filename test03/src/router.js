import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Home from "./views/Home";
import Main from "./views/main/Main";
import Test from "./views/test/Test03";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children:[{
        path: "/main",
        name: "main",
        component: Main,
      }]
    },
    {
      path: "/Test",
      name: "Test",
      component: Test,
    }
  ],
});