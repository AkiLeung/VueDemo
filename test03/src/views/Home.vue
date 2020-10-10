<template>
  <v-app id="inspire">
    <!-- 页面顶端 -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="showHide"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-title>Application Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer color="primary" v-model="drawer" fixed temporary>
      <!-- 导航菜单 -->
      <FrameMenu></FrameMenu>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <!-- 操作主页 -->
      <FrameMain></FrameMain>
    </v-main>
  </v-app>
</template>

<script>
import store from '@/store.js';

// import FrameHead from "../components/frame/FrameHead";
import FrameMenu from "../components/frame/FrameMenu";
import FrameMain from "../components/frame/FrameMain";


export default {
  name: "Home",
  store,
  components: {
    // FrameHead,
    FrameMenu,
    FrameMain,
  },

  data: () => ({
    drawer: store.state.drawer,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  methods:{
    showHide(){
      //store.commit('testLogin');
      this.drawer = !this.drawer;
      store.state.drawer = this.drawer; //!store.state.drawer;
    } 
 
  } 
};
</script>
