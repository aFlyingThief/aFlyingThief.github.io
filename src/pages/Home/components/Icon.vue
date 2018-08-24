<template>
    <div>
    <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icons">
            <div  class="icon" v-for="item of page" :key="item.id">
                <img :src="item.imgUrl" />
                <p>{{item.desc}}</p>
            </div>
            </div>  
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name:'HomeIcon',
  props:{
      ilist:Array
  },
  data(){
      return {
        swiperOption:{
                pagination:{
                    el:'.swiper-pagination',
                }
        },
      }
   },
   computed: {
    pages () {
      const pages = [];
      this.ilist.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item);
      })
      return pages
    }
  }
}
</script>

<style>
.icons{
    overflow: hidden;
    height:0;
    padding-bottom:60%;
    background: white;
}
.icon{
    float:left;
    width:25%;
    height:0;
    padding-bottom: 25%;
    text-align: center;
}
.icon img{
    display: block;
    width:50%;
    margin:0 auto;
    padding:0.3rem 0 0.2rem 0;
}
</style>
