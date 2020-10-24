<template>
  <v-toolbar
    flat
    color="primary"
    dark
    >
     <div class="d-flex align-center" >
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
  </v-toolbar>
</template>

<script> 
export default {
  name: "FrameHead",
  props: {
  },
  computed: {
  
  },
  data: () => ({
    more: [
      { title: "Click Me 1" },
      { title: "Click Me 2" },
      { title: "Click Me 3" },
      { title: "Click Me 4" },
    ],
  }),
  methods: {
  
  },
};
</script>
