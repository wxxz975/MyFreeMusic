<template>
    <el-row class="tac">
    <el-col :span="24">
        <h4>MyFreeMusic</h4>
        <el-menu default-active="1" class="el-menu-vertical-demo"
            text-color="#303133"
            active-text-color="#409EFF"
            background-color="#ffffff">
        <el-menu-item index="homePage">
            <i class="el-icon-house"></i>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="searchPage">
            <i class="el-icon-search"></i>
            <span>搜索</span>
        </el-menu-item>
        <el-menu-item index="playPage" >
            <i class="el-icon-headset"></i>
            <span>播放列表</span>
        </el-menu-item>
        <el-menu-item index="favoritePage" disabled>
            <i class="el-icon-star-on"></i>
            <span>我的喜爱</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
</template>


<script>
  export default {
    methods: {
      
    }
  }
</script>

<style scoped>

</style>
