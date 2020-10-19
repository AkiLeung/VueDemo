<template>
  <v-app id="inspire">
    <!-- 系统条 -->
    <FrameSysBar></FrameSysBar>

    <!-- 页面顶端 -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon  @click.stop="showMenu"></v-app-bar-nav-icon>
      <FrameHead></FrameHead>
    </v-app-bar>

     <!--导航菜单  -->
    <v-navigation-drawer
      src="@/assets/bg-2.jpg"
      v-model="drawer"
      dark
      app
    >
      <FrameMenu></FrameMenu>
    </v-navigation-drawer>

    <!-- 操作主页 -->
    <v-main class="grey lighten-2" style="paddingTop: 0px">
      <router-view></router-view>
    </v-main>

    <!--页面底部  -->
    <FrameBottom></FrameBottom>
  </v-app>
</template>

<script>
import store from '@/store.js';

import FrameSysBar from "../components/frame/FrameSysBar";
import FrameHead from "../components/frame/FrameHead";
import FrameMenu from "../components/frame/FrameMenu";
// import FrameMain from "../components/frame/FrameMain";
import FrameBottom from "../components/frame/FrameBottom";

export default {
  name: "Home",
  store,
  components: {
    FrameSysBar,
    FrameHead,
    FrameMenu,
    // FrameMain,
    FrameBottom,
  },

  data: () => ({
    drawer: true,
    items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
  methods:{
    showMenu(){
      //store.commit('testLogin');
      this.drawer = !this.drawer;
      store.state.drawer = this.drawer;
    } 
  } 
};
</script>