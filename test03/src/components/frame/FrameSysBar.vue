<template> 
    <v-system-bar
      app
      dark
      color="blue lighten-2"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
</template>

<script>
export default {
  name: "FrameSysBar",
  data() {
    return {};
  },
};
</script>
