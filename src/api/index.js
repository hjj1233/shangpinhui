//统一管理接口
import requests from "./requests";

export  const  reqCtogryList=()=>{
  return requests({url:'/product/getBaseCategoryList',method:'get'})
  // return requests({url:'http://127.0.0.1:4523/mock/792804/product/getBaseCategoryList',method:'get'})

}