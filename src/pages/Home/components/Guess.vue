<template>
    <div>
        <div class="guess-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            猜你喜欢
        </div>
        <div class="guess-content" v-for='item in list' :key='item.id'>
            <img :src="item.imgUrl" />
            <ul>
                <li>{{item.title}}</li>
                <li>￥<span>{{item.price}}</span>起<span>{{item.city}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name:'HomeGuessList',
    props:{
        list:Array
    }
}
</script>

<style>
    .guess-title{
        line-height: 0.56rem;
    }
    .guess-title img{
        width:0.3rem;
        height:0.3rem;margin-top:-0.1rem;
    }
    .guess-content{
        width:94%;
        overflow: hidden;
        margin:0.2rem auto;
    }
    .guess-content img{
        width:27%;
        float:left;
    }
    .guess-content ul{
        float:left;
        width:73%;
    }
/*     .guess-content li{
        
    } */
    .guess-content li{
        margin: 0.28rem 0;
    }
    .guess-content span{
        font-size:0.28rem;
    }
    .guess-content li:nth-of-type(1){
        font-size: 1.2em;    
    }
    .guess-content li:nth-of-type(2) span:first-of-type{
        font-size: 1.3em;
        color:rgb(255, 181, 43)
    }
    .guess-content li:nth-of-type(2) span:last-of-type{
        float:right;
    }
</style>