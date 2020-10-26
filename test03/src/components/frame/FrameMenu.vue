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
        <v-list-item  key="Dashboard" link @click="menu1">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span>Dashboard</span>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item key="Account" link @click="menu2">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span>Account</span>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item key="Admin" link @click="menu3">
          <v-list-item-icon>
            <v-icon>mdi-gavel</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span>Admin</span>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <br><br><br><br>
      <v-divider></v-divider>
      <!-- v-slot:append -->
      <template>
        <div class="pa-2">
          <v-btn block  @click="logout"> 
            Logout
          </v-btn>
        </div>
      </template>
    </div>
</template>

<script>
import store from '@/store.js';
import Msg from '../msg.js';

export default {
  name: "FrameMenu",
  store,
  data: () => ({
    drawer: true,//store.state.drawer,  
    // items: [
    //     { title: "Dashboard", icon: "mdi-view-dashboard",method:"menu1" },
    //     { title: "Account", icon: "mdi-account-box" ,method:"menu2"},
    //     { title: "Admin", icon: "mdi-gavel" ,method:"menu3"},
    // ],
  }),
  methods:{
      menu1: function() {
        Msg.$emit("val","1");
      },
      menu2: function() {
        Msg.$emit("val","2");
      },
      menu3: function() {
        Msg.$emit("val","3");
      },
      logout: function() {
        Msg.$emit("val","99");
      }
  }
};
</script>
