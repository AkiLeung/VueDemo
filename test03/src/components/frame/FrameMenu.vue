<template>
    <v-card class="mx-auto"  height="100%" width="100%">
    <v-navigation-drawer
      class="primary"
      fixed
      permanent
      height="100%"
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

      <div class="my-2">
            <v-btn
              elevation="8"
              block
              small
              color="primary"
            >
              Logout
            </v-btn>
      </div>
    </v-navigation-drawer>   
    </v-card>
</template>

<script>
import store from '@/store.js';

export default {
  name: "FrameMenu",
  store,
  data: () => ({
    drawer: store.state.drawer,
    items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
};
</script>
