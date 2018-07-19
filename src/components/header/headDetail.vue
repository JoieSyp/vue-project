<template>
    <head-top>
        <span slot='logo' class="head_logo"  @click="reload">{{msg}}</span>
        <div slot='info' class="select-book">
            <input type="text" id="inp-query" name="search_text" size="22" maxlength="60" placeholder="书名、作者、ISBN"  v-model="seachVal" autocomplete="off">
        </div>
        <div slot='search' class='search'>
            <button @click="searchBooks">搜索</button>
        </div>
    </head-top>
</template>
<script>
    import headTop from '../../components/header/head'
    export default {
        data(){
            return{
                seachVal:''
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
            //点击图标刷新页面
            reload(){
                window.location.reload();
            },
            searchBooks: function() {
                // 将方法创给父组件
                this.$emit("searchBooks", this.seachVal);
            }

        },
        watch:{

        }
    }

</script>