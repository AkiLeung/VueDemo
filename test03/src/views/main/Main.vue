<template>
  <v-container fill-height>
    <!-- <v-row>
      <template v-for="n in 4">
        <v-col :key="n" class="mt-2" cols="12">
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
          <v-sheet height="150"></v-sheet>
        </v-col>
      </template>
    </v-row> -->
    ========{{kk}}=========
  </v-container>

</template>

<script>
import Msg from '../../components/msg'

export default {
  name: "Main",
  data(){
    return {
      kk:0
    }
  },
  mounted:function(){
    var _this = this;
    Msg.$on('val',function(m){
      _this.kk = m;
    });
  }
};
</script>

<style scoped>
  /* *{
    padding: 0;
    margin: 0;
  } */
</style>

