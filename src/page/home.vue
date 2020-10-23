<template>
   <div class='container-home'>
       <navBar class="navBar"></navBar>
       
       <el-container>
         <el-header>
            <myHeader class="header">headerPage</myHeader>
         </el-header>
         
         <el-main>mainPage</el-main>

         <el-footer>
            <myFooter class="footer"></myFooter>
         </el-footer>

       </el-container>

   </div>
</template>

<script>
import navBar from '@/components/navBar'
import myFooter from '@/components/footer'
import myHeader from '@/components/header'

export default {
   components: {
      navBar,
      myHeader,
      myFooter
   },
   data() {
       return {
       }
   },
   computed: {},
   watch: {},
//方法集合
   methods: {
   }
}
</script>
<style scoped>
container-home{
   background-color: #fff!important;
}

.navBar{
   width: 16%;
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
}
el-main{
   background-color: honeydew;
}

el-header{
   position: fixed;
   top: 0;
   right: 0;
}

el-footer{
   position: fixed;
   bottom:0;
   overflow-x: visible;
   overflow-y: visible;
   width: 100%;
   margin: 0;
   height: 56px;
   background: #f4f9fc;
   box-shadow: 0 -lpx 4px rgba(0, 0, 0, 1);
}
</style>