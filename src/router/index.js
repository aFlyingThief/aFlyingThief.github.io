import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import City from '../pages/City/City.vue';
import HomeSearch from '../pages/Search/homesearch.vue';
import CitySearch from '../pages/Search/citysearch.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/city', component: City },
    { path: '/citysearch', component: CitySearch},
    { path: '/homesearch', component: HomeSearch}
];
const router =new VueRouter({
    routes 
});
export default router;