import Vue from 'vue'
// //引用路由插件
import Router from 'vue-router'
import Home from '../page/home'
import Detail from '../page/detail'
import '../style/common.css'

//使用路由插件
Vue.use(Router);

console.log(Router);

export default new Router({
  mode: "history",
  routes: [
       {
         path: '/home',
         name: 'home',
         component: Home
       }, {
          path: '/',
          component: Home
      }, {
          path:'/detail',
          name:'detail',
          component:Detail
      }
  ]
})
