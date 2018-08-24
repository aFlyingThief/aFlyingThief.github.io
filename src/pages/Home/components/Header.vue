<template>
    <div class="header">
        <div class="header-left"><span class="iconfont">&#xe624;</span></div>
        <router-link to="/homesearch" class="homesearch"><div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div></router-link>
        <router-link to="/city" class="citybutton">
            <div class="header-right">
                {{city}}
                <span class="iconfont">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
/* import {mapState} from 'vuex'; */

    export default{
        name:'HomeHeader',
        computed:{
            city(){
                return this.$store.state.city;
            }
        }

}
</script>

<style>
    .header{
        background:#00bcd4;
        display:flex;
        height:.86rem;
        line-height:.86rem;
        color:#fff
    }
    .header-left{
        width:.64rem;
        float:left;
        text-align:center
    }
    .homesearch{
        width:70%;
        flex:1;
        background:#fff;
        height:.62rem;
        margin-top:.12rem;
        padding-left:.2rem;
        line-height:.62rem;
        color:#ccc;
        border-radius:0.31rem;
        width:60%;
    }
    .header-right span{
        font-size:0.25rem;
    }
    .citybutton{
        width:1.24rem;
        float:right;
        text-align:center;
        color:white;
    }
</style>


