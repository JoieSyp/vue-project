import Vue from 'vue'
// //引用路由插件
import Router from 'vue-router'
import App from '../App'
// //引入组件  
import Home from '@/components/home'
import HelloWorld from '@/components/hello'
import learn from '@/components/learn'
import '../style/common.css'

//使用路由插件
Vue.use(Router)


export default new Router({
  mode: "history",
  routes: [
       {
         path: '/',
         name: 'Home',
         component: Home
       },
       {
         path: '/hello',
         name: 'HelloWorld',
         component:HelloWorld   
        },
        {
         path: '/learn/:userId',
         name: 'learn',
         component:learn   
        }
  ]
})
