<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn href="#" target="_blank" text>
      <span class="mr-2">UserName</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "FrameHead",

  data: () => ({}),
};
</script>
