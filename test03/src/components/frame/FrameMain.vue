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
    ========={{paraId}}===========
    <Show :goodId="paraId"></Show>
  </v-container>

</template>

<script>
import Msg from '../../components/msg'
import Show from '../../components/Show.vue'

export default {
  name: "FrameMain",
  data(){
    return {
      paraId:0
    }
  },
  mounted:function(){
    var obj = this;
    Msg.$on('val',function(m){
      obj.paraId = m;
    });
  },
  components:{
    Show,
  }
};
</script>

