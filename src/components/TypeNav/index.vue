<template>
     <div class="type-nav">
            <div class="container">
               <div @mouseleave="getLeave" @mouseenter="getShow">
                  <h2 class="all">全部商品分类</h2>
                 <transition name="V-action">
                    <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="getSearch">
                        <div class="item"  v-for="(item1,index) in categoryList" :key='item1.id' :class="{bgc:currentIndex==index}">
                            <h3  @mouseenter="getFocus(index)">
                                <a :data-categoryName='item1.goodsName' :data-category1Id='item1.id'>{{item1.goodsName}}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt v-for="(item2) in item1.goodsChildren" :key='item2.id'>
                                            <a :data-categoryName='item2.goodsName' :data-category2Id='item2.id' >{{item2.goodsName}}</a>
                                        </dt>
                                        <dd v-for="(item3) in item1.goodsChildren.goodsChildren" :key='item3.id'>
                                            <em>
                                                <a :data-categoryName='item3.goodsName' :data-category3Id='item3.id' >{{item3.goodsName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </transition>
               </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
              
            </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
//引入节流插件
import throttle from 'lodash/throttle'
export default {
  name:'TypeNav',
  data(){
    return {
        // bgcClassName:'bgcColor',
        currentIndex:-1,
        show:true,
        //过渡动画
    }
  },
  methods:{
    //鼠标进入修改currentIndex属性
    getFocus:throttle(function(index){
    // index一级分类的索引值
    this.currentIndex=index
     console.log(index)
    },50),
    //鼠标移出回调
    getLeave(){
      this.currentIndex=-1
      // this.show=false
      if(this.$route.path!=='/home') {
          this.show=false
          // setTimeout(()=>{},1000)
        
      }

    },
    //路由跳转
    getSearch(event){
//获取自定义属性，区分一级、二级、三级分类
    const {categoryname,category1id,category2id,category3id}=event.target.dataset
    if(categoryname) {
      let location = {name:'search'}
      let query = {categoryName:categoryname}
      if(category1id) {
        query.category1Id=category1id
      }else if(category2id) {
        query.category2Id=category2id
      }else {
        query.category3Id=category3id
      }
      location.query=query
      console.log('jjjjjjjj',location)
      this.$router.push(location)
    }
        },
        getShow(){
          this.show =true
        }
  },
  mounted(){
  
    console.log('======',this.$route.path)
    //在路由search下隐藏
    if(this.$route.path !=='/home'){
      this.show=false
    }
  },
computed:{
 ...mapState({
    categoryList:state=>state.home.categoryList
 })
}
  
}
</script>

<style scoped lang='less'>

    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                               
                            }
                            //  &:hover {
                            //         background-color: skyblue;
                            //     }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
            .bgc {
              // &:hover {
                background-color: skyblue;
              // }
            }
            .V-action-enter {
              height: 0;
            }
            .V-action-to {
              height: 431px;
            }
            .V-action-enter-active {
              transition: all 1s linear;
            }

           
        }
    }
</style>