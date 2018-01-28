<template>
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <div id="logo"></div>
      </el-menu-item>
      <el-menu-item index="2">课程商城</el-menu-item>
      <el-menu-item index="3">公务员问</el-menu-item>
      <el-menu-item index="4" class="login" v-if="logstate" >登录</el-menu-item>
      <el-menu-item index="5" class="login" v-if="logstate" >注册</el-menu-item>
      <el-menu-item index="6" class="login" v-if="!logstate" >{{ user }}</el-menu-item>
      <el-menu-item index="7" class="login" v-if="!logstate" >购物车</el-menu-item>
    </el-menu>
</template>

<script>


  export default {
      data(){
        return{

        }
      },
      methods:{
        handleSelect(key) {
          if(key == 1) this.$router.push('/');
          if(key == 2) this.$router.push('/shop');
          if(key == 4) this.$router.push('/login');
          if(key == 5) this.$router.push('/register');
        }
      },
      computed: {
        user () {
          return this.$store.state.name
        },
        logstate (){
          return this.$store.state.logstate
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
