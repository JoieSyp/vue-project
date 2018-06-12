<template>
    <head-top>
        <span slot='logo' class="head_logo"  @click="reload">{{msg}}</span>
        <div slot='info' class="select-book">
            <input type="text" id="inp-query" name="search_text" size="22" maxlength="60" placeholder="书名、作者、ISBN" value="" autocomplete="off">
        </div>
        <div slot='search' class='search'>
            <input type="submit" value="搜索"/>
        </div>
    </head-top>
</template>
<script>
    import headTop from '../../components/header/head'
    export default {
        data(){
            return{

            }
        },
        props:{
            msg:''
        },
        components:{
            headTop
        },
        computed:{

        },
        methods:{
            goFirst:function () {
                this.$router.push({path:'/home'});
            },
            //点击图标刷新页面
            reload(){
                window.location.reload();
            }

        },
        watch:{

        }
    }

</script>