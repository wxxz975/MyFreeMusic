<template>
  <div id="app" class="loginPage">
    <el-row :gutter="20">
      <!-- gutter 栅格间距 -->
      <el-col :span="8" :offset="8"> 
        <!-- span 栅格占的列数，offset是偏移列数 -->
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20" >
      <!-- gutter 栅格间距 -->

          <el-col :span="8" :offset="8"> 
            <!-- span 栅格占的列数，offset是偏移列数 -->
              <el-card shadow="always" >
                <h1>欢迎登录</h1>
                <el-divider></el-divider>

                <el-form :model="nameValidateForm" ref="nameValidateForm" label-width="100px" class="demo-ruleForm">
                <!-- 用户名 -->
                <el-form-item
                    label="用户名"
                    prop="name"
                    :rules="[
                    { required: true, message: '用户名不能为空'},
                    ]"
                >
                    <el-input placeholder="请输入用户名" type="text" v-model="nameValidateForm.name" autocomplete="off"></el-input>
                </el-form-item>

                <!-- 密码 -->
                <el-form-item
                    label="密码"
                    prop="password"
                    :rules="[
                    { required: true, message: '密码不能为空'},
                    ]"
                >
                    <el-input placeholder="请输入密码" v-model="nameValidateForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('nameValidateForm')">登录</el-button>                    
                    <router-link to="/register" id='register'>
                      <el-button type="primary">注册</el-button>
                    </router-link>
                </el-form-item>
                </el-form>

              </el-card>
          </el-col>

    </el-row>

  </div>
</template>

<script>
import Vue from 'vue';
    export default {
        data() 
        {
            return {
                nameValidateForm: 
                {
                name: '',
                password: ''
                }
            };
        },
        methods: {
            submitForm(formName) 
            {
                this.$refs[formName].validate((valid) => 
                    {
                        if (valid) 
                        {
                            alert('Name:'+this.nameValidateForm.name+';Password:'+this.nameValidateForm.password);
                        } else 
                        {
                            console.log('error submit!!');
                            return false;
                        }
                    }
                );
            }
        }
    }
</script>

<style>
.content{
  margin: 0 auto;
}
  .el-card{
    border-radius:30px;
    /* box-shadow: 0 2px 12px 0 rgb(243, 102, 102); */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  }
  .grid-content {
    /* background: rgb(14, 214, 131); */
    border-radius: 4px;
    min-height: 80px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  #register:link { text-decoration: none}
  #register:active { text-decoration:blink}
  #register:hover { text-decoration:underline} 
  #register:visited { text-decoration: none;color: white}

</style>