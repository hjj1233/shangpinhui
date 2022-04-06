<template>
  <div>
   <!-- 引入全局组件 -->
   <TypeNav/>
   <ListContainer/>
   <Recommend/>
   <Rank/>
   <Floor v-for='floor in floorList' :key='floor.id'  :list='floor'/>
    <!-- <Floor /> -->
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'


import {mapState} from 'vuex'
export default {
  // name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Floor,
    Brand
},
mounted(){
  this.$store.dispatch('getFloorList')
},
computed:{
  ...mapState({floorList:state=>state.home.floorList})
}
}
</script>

<style>

</style>