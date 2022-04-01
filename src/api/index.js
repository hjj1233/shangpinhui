//统一管理接口
import requests from "./requests";

//引入mock接口
import mockAjax from './mockAjax'

export  const  reqCtogryList=()=>{
  // return requests({url:'/product/getBaseCategoryList',method:'get'})
  return requests({url:'http://127.0.0.1:4523/mock/792804/product/getBaseCategoryList',method:'get'})

}

export  const  reqBannerList=()=>{
  // return requests({url:'/product/getBaseCategoryList',method:'get'})
  console.log('===========123',mockAjax.get('/banner'))
  return mockAjax.get('/banner')


}
