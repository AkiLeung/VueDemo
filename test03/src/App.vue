<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import DataTable from './components/DataTable';

export default {
  name: 'App',
  components: {
    DataTable,
  },
  data: () => ({
    //
  }),
};
</script>