(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)r=o[f],n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"01a9":function(t,e,i){},"034f":function(t,e,i){"use strict";var s=i("04f5"),n=i.n(s);n.a},"04f5":function(t,e,i){},"08b4":function(t,e,i){"use strict";var s=i("97f7"),n=i.n(s);n.a},1165:function(t,e,i){},"15c4":function(t,e,i){"use strict";var s=i("1929"),n=i.n(s);n.a},"17e0":function(t,e,i){},1929:function(t,e,i){},"19c7":function(t,e,i){},"3db4":function(t,e,i){},"4d59":function(t,e,i){"use strict";var s=i("c70a"),n=i.n(s);n.a},5414:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-view")],1)},a=[],r={name:"App"},o=r,c=(i("034f"),i("2877")),l=Object(c["a"])(o,n,a,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,f=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),i("home-swiper",{attrs:{list:t.swiperList}}),i("home-icon",{attrs:{ilist:t.iconList}}),i("home-center"),i("home-hot-list",{attrs:{list:t.hotList}}),i("home-guess-list",{attrs:{list:t.guessList}})],1)},h=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),i("router-link",{staticClass:"homesearch",attrs:{to:"/homesearch"}},[i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("输入城市/景点/游玩主题")])]),i("router-link",{staticClass:"citybutton",attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n            "+t._s(t.city)+"\n            "),i("span",{staticClass:"iconfont"},[t._v("")])])])],1)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("span",{staticClass:"iconfont"},[t._v("")])])}],d={name:"HomeHeader",computed:{city:function(){return this.$store.state.city}}},_=d,y=(i("4d59"),Object(c["a"])(_,m,v,!1,null,null,null));y.options.__file="Header.vue";var C=y.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sw"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(e){return i("swiper-slide",{key:e.id},[i("img",{staticClass:"swiper-img",style:{width:t.size},attrs:{src:e.imgUrl}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},b=[],w={name:"HomeSwiper",props:{list:Array},data:function(){return{size:"100%",swiperOption:{pagination:{el:".swiper-pagination"},autoplay:!0,loop:!0}}}},k=w,O=(i("9b8c"),Object(c["a"])(k,g,b,!1,null,null,null));O.options.__file="Swiper.vue";var E=O.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"icons"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("img",{attrs:{src:e.imgUrl}}),i("p",[t._v(t._s(e.desc))])])}))])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},L=[],$=(i("ac6a"),{name:"HomeIcon",props:{ilist:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"}}}},computed:{pages:function(){var t=[];return this.ilist.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}}),x=$,S=(i("9f2d"),Object(c["a"])(x,H,L,!1,null,null,null));S.options.__file="Icon.vue";var j=S.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{float:"left"}},[i("div",{staticClass:"location"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("附近")]),i("div",{staticClass:"location-right"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("玩水季")]),i("div",{staticClass:"left"},[i("a",{attrs:{href:"http://sale.piao.qunar.com/touch/mk/special?in_track=t_mp_tgw_temai&from=as_rmhd_1_%E5%A8%81%E6%B5%B7&cat=from_area%3Dts_yunying%26from_index%3D0%26dist_city%3D%25E5%25A8%2581%25E6%25B5%25B7"}},[i("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png"}})])]),i("div",{staticClass:"right"},[i("a",{attrs:{href:"https://sale.piao.qunar.com/touch/topic/mk/t_3063.htm?in_track=t_mp_tgw_sqdc&from=as_rmhd_2_%E5%A8%81%E6%B5%B7&cat=from_area%3Dts_yunying%26from_index%3D1%26dist_city%3D%25E5%25A8%2581%25E6%25B5%25B7"}},[i("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png"}})])])])}],B={name:"HomeCenter"},z=B,P=(i("a1a0"),Object(c["a"])(z,I,A,!1,null,null,null));P.options.__file="Center.vue";var M=P.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("ul",{staticClass:"hot-list-content"},[i("swiper",{staticClass:"hot-swiper",attrs:{options:t.swiperOption}},[t._l(t.list,function(e){return i("swiper-slide",{key:e.id},[i("li",[i("img",{attrs:{src:e.imgUrl}}),i("p",[t._v(t._s(e.desc))]),i("p",[t._v("￥"),i("span",[t._v(t._s(e.price))]),t._v("起")])])])}),i("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2)],1)])},D=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hot-list-title"},[i("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"}}),i("span",[t._v("热门榜单")]),i("span",[t._v("全部榜单 >")])])}],T={name:"HomeHotList",props:{list:Array},data:function(){return{swiperOption:{slidesPerView:3.5,spaceBetween:10,slidesOffsetBefore:10,scrollbar:{el:".swiper-scrollbar",clickable:!0}}}}},U=T,G=(i("938c"),Object(c["a"])(U,q,D,!1,null,null,null));G.options.__file="HotList.vue";var J=G.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._l(t.list,function(e){return i("div",{key:e.id,staticClass:"guess-content"},[i("img",{attrs:{src:e.imgUrl}}),i("ul",[i("li",[t._v(t._s(e.title))]),i("li",[t._v("￥"),i("span",[t._v(t._s(e.price))]),t._v("起"),i("span",[t._v(t._s(e.city))])])])])})],2)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guess-title"},[i("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"}}),t._v("\n        猜你喜欢\n    ")])}],Y={name:"HomeGuessList",props:{list:Array}},F=Y,K=(i("b48e"),Object(c["a"])(F,R,N,!1,null,null,null));K.options.__file="Guess.vue";var Q=K.exports,V=i("bc3a"),W=i.n(V),X={name:"Home",components:{HomeHeader:C,HomeSwiper:E,HomeIcon:j,HomeCenter:M,HomeHotList:J,HomeGuessList:Q},data:function(){return{swiperList:[],iconList:[],hotList:[],guessList:[]}},computed:{uri:function(){return this.$store.state.URI}},methods:{getHomeInfo:function(){W.a.get(this.uri).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.hotList=e.hotList,this.guessList=e.guessYouLove}}},mounted:function(){this.getHomeInfo()}},Z=X,tt=(i("a4d5"),Object(c["a"])(Z,p,h,!1,null,null,null));tt.options.__file="Home.vue";var et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-list",{attrs:{chotCities:t.hotCities,calphabet:t.alphabet,ccities:t.cities}})],1)},st=[],nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("div",{staticClass:"city-header"},[i("h1",[t._v("城市选择")]),i("router-link",{staticClass:"city-return",attrs:{to:"/"}},[i("div",{staticClass:"iconfont"},[t._v("")])])],1),i("div",{staticClass:"search-city"},[i("span",{staticClass:"iconfont"},[t._v("")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"城市搜索"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("ul",{staticClass:"search-city-list"},t._l(t.searchList,function(e){return i("li",{key:e.id,on:{click:function(i){t.handlerCityClick(e.name)}}},[t._v(t._s(e.name)+"\n            ")])}))]),i("div",{staticClass:"hot-city"},[i("p",{staticClass:"list-title"},[t._v("热门城市")]),i("ul",t._l(t.chotCities,function(e){return i("li",{key:e.id,on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))]),i("div",{staticClass:"alphabet-sort"},[i("p",{staticClass:"list-title"},[t._v("字母排序")]),i("ul",t._l(t.calphabet,function(e,s){return i("li",{key:e.id},[i("a",{attrs:{href:"#"+t.list[s]}},[t._v(t._s(e.number))])])}))]),t._l(t.ccities,function(e,s,n){return i("div",{key:s,staticClass:"detail"},[i("p",{staticClass:"list-title"},[i("a",{attrs:{id:t.list[n]}},[t._v(t._s(s))])]),i("ul",t._l(e,function(e){return i("li",{key:e.id,on:{click:function(i){t.allCityClick(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))])})],2)},at=[],rt=(i("7f7f"),{name:"CityList",props:{chotCities:Array,calphabet:Array,ccities:Object},data:function(){return{keyword:"",timer:null,searchList:[],list:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"]}},methods:{handleCityClick:function(t){this.$store.commit("mountCity",t),this.$router.push("/")},allCityClick:function(t){this.$store.commit("mountCity",t),this.$router.push("/")},handlerCityClick:function(t){this.$store.commit("mountCity",t),this.$router.push("/")}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),""!=this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.ccities)t.ccities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.searchList=e},100):this.searchList=[]}}}),ot=rt,ct=(i("15c4"),Object(c["a"])(ot,nt,at,!1,null,null,null));ct.options.__file="CityList.vue";var lt=ct.exports,ut={name:"City",components:{CityList:lt},data:function(){return{hotCities:[],alphabet:[],cities:{}}},methods:{getCityInfo:function(){W.a.get("/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.alphabet=e.alphabet,this.cities=e.cities}}},mounted:function(){this.getCityInfo()}},ft=ut,pt=(i("08b4"),Object(c["a"])(ft,it,st,!1,null,null,null));pt.options.__file="City.vue";var ht=pt.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-header"},[i("router-link",{staticClass:"search-header-left",attrs:{to:"/"}},[i("span",{staticClass:"iconfont"},[t._v("")])]),i("input",{attrs:{type:"text",placeholder:"输入城市或景点"}}),t._m(0)],1),i("div",{staticClass:"search-footer"},[t._m(1),i("div",{staticClass:"hot-recommend"},[t._m(2),i("div",{staticClass:"recommend-content"},[i("ul",t._l(t.list,function(e){return i("li",{key:e.id,style:{background:t.color[Math.floor(4*Math.random())]}},[t._v(t._s(e.city))])}))])])])])},vt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-header-right"},[i("span",[t._v("搜索")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history-title"},[i("span",{staticStyle:{"margin-left":".2rem"}},[t._v("搜索历史")]),i("span",{staticClass:"sht"},[t._v("清除")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-title"},[i("span",{staticStyle:{"margin-left":".2rem"}},[t._v("热门搜索")]),i("span",{staticClass:"srt"},[t._v("换一批")])])}],dt={name:"homehot",data:function(){return{list:[],color:["lightblue","pink","lightcyan","lightsalmon"]}},methods:{getHomeSearchInfo:function(){W.a.get("/homesearch.json").then(this.getHomeSearchInfoSucc)},getHomeSearchInfoSucc:function(t){t=t.data,t.ret&&t.hotcity&&(this.list=t.hotcity)}},mounted:function(){this.getHomeSearchInfo()}},_t=dt,yt=(i("9aea"),Object(c["a"])(_t,mt,vt,!1,null,null,null));yt.options.__file="homesearch.vue";var Ct=yt.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("城市")])},bt=[],wt={name:"homesearch"},kt=wt,Ot=(i("66b4"),Object(c["a"])(kt,gt,bt,!1,null,null,null));Ot.options.__file="citysearch.vue";var Et=Ot.exports;s["a"].use(f["a"]);var Ht=[{path:"/",component:et},{path:"/city",component:ht},{path:"/citysearch",component:Et},{path:"/homesearch",component:Ct}],Lt=new f["a"]({routes:Ht}),$t=Lt,xt=i("7212"),St=i.n(xt),jt=i("2f62");s["a"].use(jt["a"]);var It=new jt["a"].Store({state:{city:localStorage.city||"威海",URI:"/index.json"},mutations:{mountCity:function(t,e){t.city=e,localStorage.city=e}}});i("3db4"),i("c8f4"),i("5414"),i("dfa4");s["a"].config.productionTip=!1,s["a"].use(St.a),new s["a"]({router:$t,store:It,render:function(t){return t(u)}}).$mount("#app")},"5e44":function(t,e,i){},"649a":function(t,e,i){},"66b4":function(t,e,i){"use strict";var s=i("cc01"),n=i.n(s);n.a},"938c":function(t,e,i){"use strict";var s=i("01a9"),n=i.n(s);n.a},"97f7":function(t,e,i){},"9aea":function(t,e,i){"use strict";var s=i("d921"),n=i.n(s);n.a},"9b8c":function(t,e,i){"use strict";var s=i("5e44"),n=i.n(s);n.a},"9f2d":function(t,e,i){"use strict";var s=i("17e0"),n=i.n(s);n.a},a1a0:function(t,e,i){"use strict";var s=i("649a"),n=i.n(s);n.a},a4d5:function(t,e,i){"use strict";var s=i("1165"),n=i.n(s);n.a},b48e:function(t,e,i){"use strict";var s=i("19c7"),n=i.n(s);n.a},c70a:function(t,e,i){},c8f4:function(t,e,i){},cc01:function(t,e,i){},d921:function(t,e,i){}});
//# sourceMappingURL=app.5bea7227.js.map