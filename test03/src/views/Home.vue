<template>
  <v-app id="inspire">
     <v-system-bar app>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <!-- 页面顶端 -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon  @click="showHide"></v-app-bar-nav-icon>
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
          <v-list-item v-for="(item, i) in more" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

     <!--导航菜单  -->
    <v-navigation-drawer
      src="@/assets/bg-2.jpg"
      v-model="drawer"
      dark
      app
    >
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

     <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- 操作主页 -->
    <v-main class="grey lighten-2">
      <FrameMain></FrameMain>
    </v-main>
  </v-app>
</template>

<script>
import store from '@/store.js';

// import FrameHead from "../components/frame/FrameHead";
// import FrameMenu from "../components/frame/FrameMenu";
import FrameMain from "../components/frame/FrameMain";

export default {
  name: "Home",
  store,
  components: {
    // FrameHead,
    // FrameMenu,
    FrameMain,
  },

  data: () => ({
    drawer: true, //store.state.drawer
    more: [
      { title: "Click Me 1" },
      { title: "Click Me 2" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
    ],
    items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
  methods:{
    showHide(){
      //store.commit('testLogin');
      this.drawer = !this.drawer;
      store.state.drawer = this.drawer;
    } 
  } 
};
</script>
