<template>
   <div id="detail">
       <header-detail signin-up='home'></header-detail>
       <div id='detail-book' class="detail-book">
           图书详情页
       </div>
   </div>
</template>
<script>
    import headerDetail from '../components/header/headDetail'
    export default {
        name: 'detail',
        data () {
            return {

            }
        },
        components:{
            headerDetail
        },
        methods:{
            //点击图标刷新页面
            reload(){
                window.location.reload();
            }
        }
    }
</script>
<style lang="sass" >
    @import '../style/detail.scss';
</style>