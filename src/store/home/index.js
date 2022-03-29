//引入接口
import {reqCtogryList} from '../../api'
//state:仓库储存数据的地方
const state={
  categoryList:[]
}
//mutations:修改state的唯一手段
const mutations={
  CATEGORYLIST(state,categoryList){
    state.categoryList =categoryList
  }
}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
  async categoryList({commit}){
const reslut= await reqCtogryList()
if(reslut.code == 200) {
  commit('CATEGORYLIST',reslut.data)
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