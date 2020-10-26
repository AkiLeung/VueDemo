<template>
  <v-container fill-height>
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

