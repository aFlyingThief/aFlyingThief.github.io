import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        city:localStorage.city||'威海',
        URI:'/index.json'
    },
    mutations: {
        mountCity(state,city) {
          state.city=city;
          localStorage.city=city;
        }
    }
});