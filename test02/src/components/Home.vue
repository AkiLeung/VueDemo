<template>
  <el-container>
    <!-- 顶栏 -->
    <el-header height="62px">
      <home-header></home-header>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside width="230px"></el-aside>
      <!-- 内容 -->
      <el-main>
        <!-- 第一列栅格布局 -->
        <el-row>
          <el-col :span="12" class="col1"></el-col>
          <el-col :span="12" class="col2"></el-col>
        </el-row>
        <!-- 第二列布局 -->
        <el-row>
          <el-col :span="24" class="col3"></el-col>
        </el-row>
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <el-footer height="60px">
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HomeHeader from './frame/Header'
import HomeLeft from './frame/LeftMenu'
import HomeMain from './frame/Main'
import HomeFooter from './frame/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeLeft,
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  min-height: calc(85vh + 9px);
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
