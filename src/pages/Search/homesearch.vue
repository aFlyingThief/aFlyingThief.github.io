<template>
<div>
    <div class="search-header">
        <router-link to="/" class="search-header-left"><span class="iconfont">&#xe624;</span></router-link>
        <input type="text" placeholder="输入城市或景点" />
        <div class="search-header-right"><span>搜索</span></div>
    </div>
    <div class="search-footer">
            <div class="history-title">
            <span style="margin-left:.2rem">搜索历史</span>
            <span class="sht">清除</span>
            </div>  
        <div class="hot-recommend">
            <div class="recommend-title">
                <span style="margin-left:.2rem">热门搜索</span>
                <span class="srt">换一批</span>
            </div>
            <div class="recommend-content">
                <ul>
                    <li :style="{background:color[Math.floor(Math.random()*4)]}" v-for="item in list" :key="item.id">{{item.city}}</li>
                </ul>
            </div>  
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default{
    name:'homehot',
    data(){
        return {
            list:[],
            color:['lightblue','pink','lightcyan','lightsalmon'],
        }
    },
    methods:{
        getHomeSearchInfo(){
        axios.get('/homesearch.json')
             .then(this.getHomeSearchInfoSucc)
        },
        getHomeSearchInfoSucc(res){
            res=res.data;
            if(res.ret && res.hotcity){
            this.list=res.hotcity;
            }
        }
    },
    mounted(){
    this.getHomeSearchInfo();
    },
    
}
</script>

<style>
  .search-header{
      height:.8rem;
      line-height: .8rem;
      background: white;
  }
  .search-header-left{
      width:8%;
      text-align: center;
      display:inline-block;
      color:rgb(0, 0, 0);
      font-size:.2rem;
      
  }
  .search-header-right{
      width:12%;
      text-align: center;
      display:inline-block;
  }
  .search-header input{
      text-align: center;
      display:inline-block;
      width:80%;
      height:.6rem;
      background: rgb(240, 240, 240);
      border-radius:0.3rem;
  }
  .history-title,.recommend-title{
   line-height: .8rem;
   background: rgb(255, 255, 255);
   font-size:90%;
   color:rgb(0, 0, 0);
  }
  .sht,.srt{
      float:right;
      margin-right: .2rem
  }
  .recommend-content li{
      float:left;
      padding:.2rem;
      background: ling;
      border-radius:.32rem;
      margin:.2rem;
  }
  .recommend-content ul{
      margin-left:0.3rem;
  }
</style>