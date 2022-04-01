import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

// webpack默认暴露  图片和json格式文件

Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})