<template>
  <div>
   <!-- 引入全局组件 -->
   <TypeNav/>
   <ListContainer/>
   <Recommend/>
   <Rank/>
   <Floor />
    <Floor />
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'
export default {
  // name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Floor,
    Brand
}
}
</script>

<style>

</style>