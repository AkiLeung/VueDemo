<template>
  <v-app id="login">
    <!-- <v-app-bar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Login</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="http://www.baidu.com" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar> -->

    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <br><br><br>
    <v-card max-height="400" width="400" class="mx-auto mt-5" >
      <v-card-title class="pb-0">
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="" prepend-icon="mdi-account-circle" clearable />
          <v-text-field
            label=""
            prepend-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>

    
  </v-app>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      value: 1,
      showPassword: false,
    };
  },
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
  methods:{
    login(){
      //console.log('login vue login');
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
body {
overflow-y: hidden;
}
</style>