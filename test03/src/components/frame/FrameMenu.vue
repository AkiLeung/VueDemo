<template>
    <div>
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
            <v-list-item-title>
              <router-link to="/home/main">{{ item.title }}</router-link>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <br><br><br><br>
      <v-divider></v-divider>
      <!-- v-slot:append -->
      <template>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: "FrameMenu",
  store,
  data: () => ({
    drawer: true,//store.state.drawer,  
    items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
};
</script>
