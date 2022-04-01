//引入接口
import {reqCtogryList,reqBannerList} from '../../api'

//state:仓库储存数据的地方
const state={
  //一级、二级、三级分类
  categoryList:[],
  //轮播图
  bannerList:[]
}
//mutations:修改state的唯一手段
const mutations={
  // //一级、二级、三级分类
  CATEGORYLIST(state,categoryList){
    state.categoryList =categoryList
  },
  //轮播图
  GETBANNERLIST(state,bannerList){
    state.bannerList =bannerList
  }
}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
  //一级、二级、三级分类
  async categoryList({commit}){
    const reslut= await reqCtogryList()
    if(reslut.code == 200) {
      console.log('=======',reslut.data)
      commit('CATEGORYLIST',reslut.data)
    }else {
      console.log('请求数据失败')
    }   
  },
  //轮播图
async getBannerList({commit}){
  const result = await reqBannerList()
  console.log('1231230',result)
  if(result.code == 200) {
    commit('GETBANNERLIST',result.data)
  }else {
    console.log('请求数据失败！')
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