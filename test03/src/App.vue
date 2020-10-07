<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-img
        alt="Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="./assets/vuetify-name-dark.png"
        width="100"
      />
      <v-spacer></v-spacer>

      <v-btn href="#" target="_blank" text>
        <span class="mr-2">UserName</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <FrameHome />
    </v-main>
  </v-app>
</template>

<script>
import FrameHome from "./components/FrameHome";

export default {
  name: "App",

  components: {
    FrameHome,
  },

  data: () => ({
    //
  }),
};
</script>
