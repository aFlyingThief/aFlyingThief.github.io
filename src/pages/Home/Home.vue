<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icon :ilist='iconList'></home-icon>
    <home-center></home-center>
    <home-hot-list :list='hotList'></home-hot-list>
    <home-guess-list :list='guessList'></home-guess-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeCenter from './components/Center'
import HomeHotList from './components/HotList'
import HomeGuessList from './components/Guess'
import axios from 'axios'

export default {
  name:'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeCenter,
    HomeHotList,
    HomeGuessList
  },
  data(){
    return {
      swiperList:[],
      iconList:[],
      hotList:[],
      guessList:[]
    }
  },
  computed:{
    uri(){
      return this.$store.state.URI
    }
  },
  methods:{
    getHomeInfo(){
      axios.get(this.uri)
          .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data;
      if(res.ret && res.data){
      const data=res.data;
      this.swiperList=data.swiperList;
      this.iconList=data.iconList;
      this.hotList=data.hotList;
      this.guessList=data.guessYouLove
      }
    }
  },
    mounted(){
    this.getHomeInfo();
    }
}
</script>

<style>

</style>