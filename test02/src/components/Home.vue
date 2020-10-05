<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <home-header></home-header>
        </el-header>
        <el-main>
          <home-main></home-main>
        </el-main>
        <el-footer>
          <home-footer></home-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from './frame/Header'
import HomeMain from './frame/Main'
import HomeFooter from './frame/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /*margin: 0;*/
  min-height: calc(100vh - 120px);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  vertical-align: center;
  line-height: 60px;
}
</style>
