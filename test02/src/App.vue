<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import myHeader from "./components/Header";

export default {
  name: "App",
  components: {
    myHeader
  }
};
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
