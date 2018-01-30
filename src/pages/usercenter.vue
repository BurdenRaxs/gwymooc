<template>

  <div class="body">
    <div class="title">
      <h3> 用 户 中 心 </h3>
    </div>
    <div>
      <el-row :gutter="20" type="flex" justify="start" class="name">
        <el-col :push="5" :span="6">
          <div class="username">
            {{`用户名：${ username }`}}
          </div>
        </el-col>
        <el-col :push="9" :span="6">
          <div class="userid">
            {{`账户id：${ userid }`}}
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="space-around" class="name row">
        <el-col  :span="3" class="box">
            <div  class="img img1"></div>
            <div class="na">个人资料</div>
        </el-col>
        <el-col  :span="3" class="box">
            <div  class="img img2"></div>
            <div class="na">修改资料</div>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="space-around" class="name row">
        <el-col  :span="3" class="box">
            <div  class="img img3"></div>
            <div class="na">个人订单</div>
        </el-col>
        <el-col  :span="3" class="box">
            <div  class="img img4"></div>
            <div class="na">站内信息</div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>


<script>


  export default {
    data(){
      return{
        img:[
          {
            imgurl: required('/static/usericon1.png')
          }
        ],
      }
    },
    computed: {
      username () {
        return this.$store.state.username
      },
      userid (){
        return this.$store.state.userid
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .body{
      width: 1000px;
      margin: 0 auto;

    }
    .title{
      display: flex;
      justify-content: center;
      /*margin: 20px 0px;*/
      color: darkcyan;
    }
    .name{
      margin-top: 30px;
      height: 50px;
    }
    .username{
      font-size: 22px;
      line-height: 50px;
    }
    .userid{
      line-height: 50px;
    }
    .box{
      height: 160px;
      width: 200px;
      border:1px solid silver;
      border-radius:15px;
      cursor: pointer;
    }
    .img{
      height: 128px;
      width: 128px;
      margin: 0 auto;
    }
    .img1{
      background: url("/static/usericon1.png") no-repeat  center;
    }
    .img2{
      background: url("/static/usericon2.png") no-repeat  center;
    }
    .img3{
      background: url("/static/ordericon.png") no-repeat  center;
    }
    .img4{
      background: url("/static/messageicon.png") no-repeat  center;
    }
    .na{
      text-align: center;
    }
    .row{
      height: 200px;
    }

</style>
