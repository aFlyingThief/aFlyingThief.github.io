<template>
    <div class="city">
        <div class="city-header">
            <h1>城市选择</h1>
            <router-link class="city-return" to="/"><div class="iconfont">&#xe624;</div></router-link>
        </div>
        <div class="search-city">
            <span class="iconfont">&#xe632;</span>
            <input type="text" placeholder="城市搜索" v-model="keyword" />
            <ul class="search-city-list">
                <li @click="handlerCityClick(item.name)"
                    v-for="item in searchList" 
                    :key="item.id">{{item.name}}
                </li>
            </ul>
        </div>
        <div class="hot-city">
            <p class="list-title">热门城市</p>
            <ul>
                <li @click="handleCityClick(item.name)" 
                    v-for="item in chotCities" 
                    :key="item.id">
                    {{item.name}}
                </li>  
            </ul>
        </div>
        <div class="alphabet-sort">
            <p class="list-title">字母排序</p>
            <ul>
                <li  v-for="(item,index) in calphabet" :key="item.id"><a :href="'#'+list[index]">{{item.number}}</a></li>
            </ul>
        </div>
        <div class="detail" v-for="(item,key,index) in ccities" :key="key">
            <p class="list-title"><a :id="list[index]">{{key}}</a></p>
            <ul>
                <li @click="allCityClick(aitem.name)"
                    v-for="aitem of item" 
                    :key="aitem.id">
                    {{aitem.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:'CityList',
        props:{
            chotCities:Array,
            calphabet:Array,
            ccities:Object
        },
        data(){
            return {
            keyword:'',
            timer:null,
            searchList:[],
            list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z']
            }
        },
        methods:{
            handleCityClick(city){
                this.$store.commit('mountCity',city);
                this.$router.push('/');
            },
            allCityClick(city){
                this.$store.commit('mountCity',city);
                this.$router.push('/');
            },
            handlerCityClick(city){
                this.$store.commit('mountCity',city);
                this.$router.push('/');
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                if(this.keyword==''){
                this.searchList=[];
                return
                }
                this.timer=setTimeout(()=>{
                        const result = [];
                        for (let i in this.ccities) {
                            this.ccities[i].forEach((value) => {
                                
                                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                               
                                result.push(value);
                                }

                            });
                        }
                        this.searchList = result;
                },100);
                
            }
        }
    }
</script>

<style>
.city-header{
    text-align: center;
    line-height: 0.9rem;
    background:#00bcd4;
    color:white;
}
.city-return{
    position: absolute;
    top:0;
    left:0;
    width:46px;
    line-height: 46px;
    text-align: center;
    color:white;
}
.hot-city,.alphabet-sort,detail{
     overflow: hidden;
 }
 .search-city{
     width:90%;
     height:0.5rem;
     border-radius:15px;
     margin:auto;
     border:solid 1px rgb(228, 228, 228);
     line-height:0.5rem;
     margin-top: 10px;
     background: rgb(228, 228, 228)
 }
 .search-city input{
     background:rgb(228, 228, 228) ;
 }
 .search-city span{
     margin-left: 5px;
 }
 .search-city-list{
     position:absolute;
     left:0;
     right:0;
     list-style-type: none;
     border-radius:1rem;
     color:rgb(49, 49, 49);
 }
 .search-city-list li{
     width:90%;
     margin:auto;
     background: rgb(230, 230, 230);
 }
.list-title{
    line-height: 0.7rem;
    margin-left: .3rem
}
.hot-city li{
    width:33.33%;
    height:0.9rem;
    float:left;
    line-height: 0.9rem;
    text-align: center;
    background: white;
}
.alphabet-sort li{
   width:16.67%;
   height:0.9rem;
   float:left;
   line-height: 0.9rem;
   text-align: center;
   background: white;
}
.detail ul{
    overflow: hidden;
}
.detail li{
   width:25%; 
   height:0.9rem;
   float:left;
   line-height: 0.9rem;
   text-align: center; 
   background: white;
}
.city-header router-link{
    color:white;
}
</style>