<template>
  <div>
    <h1 class="msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Test01',
  data () {
    return {
      msg: 'Test01 Message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
  background-color: aliceblue;
}
</style>
