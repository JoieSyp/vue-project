<template>
   <header id="header-top">
       <a class="title" @click="goFirst">掌上阅读</a>
       <span>{{message}}</span>
        <slot name='logo'></slot>
        <slot name='info'></slot>
        <slot name='search'></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">></section>
   </header>
</template>
<script>
   export default {
         data(){
	        return{
	          
	        }
          },
          props:['message','goBack'],
          computed:{

          },
          methods:{
              goFirst:function () {
                  this.$router.push({path:'/home'});
              }
          }
  }

</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  #header-top{
     position:fixed;
     left:0;
     top:0;
     width:100%;
      @include wh(100%,60px);
      @include bkg(#ccc);
      line-height:60px;
      .title{
         display:inline-block;
       font-size:22px;
          color: #614e3c;
    }
    .select-book{
        display:inline-block;
        width:45%;
        margin-left: 5%;
        input{
           width:100%;
           height:30px;
           font-size:16px;
            text-indent: 4px;
        }
     }
     .search{
          position: relative;
          display:inline-block;
          width:37px;
          height:30px;
         /*vertical-align: middle;*/
         margin-left: -10px;
         button{
              position: absolute;
             display:inline-block;
              color: transparent;
              cursor: pointer;
              width:100%;
              height:30px;
              top: 10px;
              background:url('../../assets/nav_search.png') no-repeat 0 0/100% 100%;
          }

      }
  }
</style>