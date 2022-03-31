//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用组件
Vue.use(VueRouter)
//引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace;


// 重写push/replace
VueRouter.prototype.push = function (location,resolve,reject){
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }else {
    originPush.call(this,location,()=>{},()=>{})
  }
}
  
VueRouter.prototype.replace = function (location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else {
    originReplace.call(this,location,()=>{},()=>{})
  }
}

export default new VueRouter(
  {
    //配置路由
    routes:[
      {
        path:'/home',
        component:Home,
        meta:{show:true}
      },
      {
        path:'/login',
        component:Login,
        meta:{show:false}
      },
      {
        path:'/register',
        component:Register,
        meta:{show:false}
      },
      {
        path:'/search/:keyWord',
        name:'search',
        component:Search,
        meta:{show:true}
      },
      {
        path:'*',
        redirect:'/home',
        // component:Home
      },
    ]
  }
)