<template>
  <div id="app" class="registerPage">
    <el-row :gutter="15">
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
                <h1>欢迎注册</h1>
                <el-divider></el-divider>

                <el-form :model="nameValidateForm" ref="nameValidateForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                    <!-- 用户名 -->
                    <el-form-item label="用户名" prop="name">
                        <el-input placeholder="请输入用户名" type="text" v-model="nameValidateForm.name" autocomplete="off"></el-input>
                    </el-form-item>

                    <!-- 手机号 -->
                    <el-form-item label="手机号" prop="telephone">
                        <el-input placeholder="请输入手机号" type="tel" maxlength="11" v-model.number="nameValidateForm.telephone" auto-complete="off"></el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item label="密码" prop="password">
                        <el-input placeholder="请输入密码" v-model="nameValidateForm.password" show-password></el-input>
                    </el-form-item>

                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="passwordAgain">
                        <el-input placeholder="请再次输入密码" v-model="nameValidateForm.passwordAgain" show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('nameValidateForm')">注册</el-button>                    
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
    data() {
        var checkPhone = (rule, value, callback) => {
            console.log("test check")
            if(!value){
                return callback(new Error("手机不能为空"))
            }

            setTimeout(() => {
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                if(reg.test(value) || !Number.isInteger(value) || value.length != 11){
                    return callback(new Error("请输入有效的手机号"))
                }else{
                    return callback()
                }
            }, 1000);
        };

        var checkPwd = (rule, value, callback) => {
            if(value === ''){
                return callback(new Error('密码不能为空'))
            }else{

            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.nameValidateForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            nameValidateForm: 
            {
            name: '',
            telephone: '',
            password: '',
            passwordAgain:''
            },
            rules: {
                telephone: [
                    { validator: checkPhone, trigger: 'blur'},
                ],
                name: [
                    { required: true, message: '用户名不能为空'},
                ],
                password: [
                    { required: true, message: '密码不能为空'},
                ],
                passwordAgain: [
                    { required: true, message: '密码不能为空'},
                ]

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
        },
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