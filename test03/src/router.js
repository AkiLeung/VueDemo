import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Home from "./views/Home";
import Test from "./views/Test01";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/Test",
      name: "Test",
      component: Test,
    }
  ],
});