<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Login</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="http://www.baidu.com" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>
