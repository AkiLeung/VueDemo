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
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="" prepend-icon="mdi-account-circle" />
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
        <v-btn color="info">Login</v-btn>
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
      showPassword: false,
    };
  },
};
</script>
