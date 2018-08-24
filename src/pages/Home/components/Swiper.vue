<template>
<div class="sw">
   <swiper :options="swiperOption" >
      <swiper-slide v-for="item in list" :key="item.id">
        <img :style="{width:size}" class="swiper-img" :src="item.imgUrl"/> 
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>   
  </swiper>
</div> 
</template>

<script>
export default {
  name:'HomeSwiper',
  props:{
    list:Array
  },
  data(){
    return {
      size:'100%',
      swiperOption:{
        pagination:{
          el:'.swiper-pagination',
        },
        autoplay:true,
        loop:true,
      }
    }
  },
}

</script>

<style>
 .swiper-img{
   display:block;
   margin:auto
 }
 .swiper-pagination-bullet{
   background: #fff;
 }
 .sw{
   display:flex;
   width:100%;
 }
 .swiper-pagination-bullets{
   color:white;
 }

</style>
