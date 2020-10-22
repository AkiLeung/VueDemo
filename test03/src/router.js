import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Home from "./views/Home";
import Test from "./views/test/Test03";
import Test1 from "./views/test/Test01";
import Test2 from "./views/test/Test02";

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
      children:[
      {
        path: "/homeTest1",
        name: "homeTest1",
        component: Test1,
      },{
        path: "/homeTest2",
        name: "homeTest2",
        component: Test2,
      }]
    },
    {
      path: "/Test",
      name: "Test",
      component: Test,
    }
  ],
});