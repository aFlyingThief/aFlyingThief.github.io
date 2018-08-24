<template>
    <div>
        <city-list 
        :chotCities="hotCities" 
        :calphabet="alphabet"
        :ccities="cities">
        </city-list>
    </div>
</template>

<script>
import CityList from './components/CityList';
import axios from 'axios';
export default{
    name:'City',
    components :{
        CityList
    },
    data(){
        return {
            hotCities:[],
            alphabet:[],
            cities:{}
        }
    },
    methods:{
    getCityInfo(){
      axios.get('/city.json')
           .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      res=res.data;
      if(res.ret && res.data){
      const data=res.data;
      this.hotCities=data.hotCities;
      this.alphabet=data.alphabet;
      this.cities=data.cities
      }
    }
  },
    mounted(){
    this.getCityInfo();
    }
}
</script>

<style>

</style>