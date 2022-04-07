//引入接口
import { reqCategoryList } from "../../api"

//state:仓库储存数据的地方
const state={
  searchList:{}
}
//mutations:修改state的唯一手段
const mutations={
  GETCATEGORYLIST(state,searchList){
    state.searchList=searchList
  }
}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
  async getCategoryList({commit},params={}){
    const result = await reqCategoryList(params)
    if(result.code == 200) {
      commit("GETCATEGORYLIST",result.data)
      console.log('jjjjjjjjjjj',result.data)
    }else {
    console.log('请求数据失败')
    }
  }
}
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters={}

export default{
  state,
  mutations,
  actions,
  getters
}