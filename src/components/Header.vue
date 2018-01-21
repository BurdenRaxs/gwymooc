<template>
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <div id="logo"></div>
      </el-menu-item>
      <el-menu-item index="2">课程商城</el-menu-item>
      <el-menu-item index="3">公务员问</el-menu-item>
      <el-menu-item index="4" class="login">登录</el-menu-item>
    </el-menu>
</template>

<script>


  export default {
      methods:{
        handleSelect(key) {
          if(key == 1) this.$router.push('/');
          if(key == 2) this.$router.push('/shop');
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login{
    float: right;
  }
  .nav-menu{
    padding: 0 200px;
  }
  #logo{
    background: url("./../assets/mooclogo.png") no-repeat center;
    height: 60px;
    width: 150px;
  }

</style>
