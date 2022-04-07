<template>
    <div class="swiper-container" ref="mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="slideshow in list" :key='slideshow.id'>
                                <img :src="slideshow.imgUrl" />
                            </div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:'Carouse',
    props:['list'],
    watch:{
    list:{
        immediate:true,
        handler(newValue,oldValue) {
        console.log(newValue,'=========',oldValue)
        this.$nextTick(()=>{
        new Swiper (this.$refs.mySwiper, {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })  
        })
      }
    }
    }
}
</script>

<style>

</style>