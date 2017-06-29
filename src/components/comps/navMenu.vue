<template>
  <el-menu theme="dark" :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="upload_teacher">添加老师</el-menu-item>
    <el-menu-item index="sign_in">登录</el-menu-item>
  </el-menu>
</template>


<script>
  export default {
    data () {
      return {
        activeIndex: null
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    created: function () {
      this.activeIndex = this.$route.name
    }
  }
</script>
