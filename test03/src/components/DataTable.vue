<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-3"></v-data-table>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/static/mock.json").then(
        response => {
          console.log(response.data);
          this.desserts = response.data;
        },
        error => {  
          console.log(error);
        }
      );
    }
  }
};
</script>