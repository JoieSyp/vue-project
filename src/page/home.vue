<template>
    <div id="main">
        <header-detail signin-up='home' msg="刷新" v-on:searchBooks="searchBooks"></header-detail>
        <ul>
            <li v-for="bookItem in bookLists" class="book-list">
                <div class="book-img">
                    <router-link :to="{ name:'detail', query: {bookId: bookItem.id} }">
                        <a href="#">
                            <img v-bind:src="bookItem.images.small" v-bind:alt="bookItem.title"/>
                        </a>
                    </router-link>
                </div>
                <div class="book-info">
                    <a :href="'/detail/?bookId='+bookItem.id" class="title">{{bookItem.title}}</a>
                    <p class="author">作者：<span v-for="authorItem in bookItem.author">{{authorItem}}</span></p>
                    <p class="publisher">出版社：{{bookItem.publisher}}</p>
                    <p>出版时间：{{bookItem.pubdate}}</p>
                    <p>价格：{{bookItem.price}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import headerDetail from '../components/header/headDetail'
    import {booksList}  from '../api/main';

    export default {
        name: 'home',
        data(){
            return{
                domainText:'css3',
                bookLists:[]
            }
        },
        create(){

        },
        mounted(){
            this.getBooksList()
        },
        components:{
            headerDetail
        },
        methods:{
           commonFunc(bookName,fields,callback){
               booksList(bookName,fields)
                   .then(res=>{
                       if(res.status===200){
                           if(res.data.count>0){
                               callback && callback(res.data.books);
//                               this.bookLists=res.data.books;
                           }
                       }
                       console.log(res,'请求成功');
                   })
                   .catch(err=>{
                       console.log(err,'请求失败');
                   })
           },
            getBooksList(){
                var vm=this;

                 this.commonFunc(this.domainText,'',function (result) {
                     vm.bookLists=result;
                 })

            },
            searchBooks:function(data){
                var vm=this;
                this.commonFunc(data || this.domainText,'',function (result) {
                    vm.bookLists=result;
                })
            }

        }
    }
</script>

<style lang="sass" >
    @import '../style/list.scss';
</style>