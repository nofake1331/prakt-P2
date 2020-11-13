<template>
<div>


  <input v-model="cit">
  <button @click="puh">Добавить</button>
  <select id="po" @click="pogodka">
  <option v-for="c in city" >{{c}} </option>
  </select>
  <br>
  {{pogoda.name}}<br>
  Вологість: {{pogoda.main.humidity}}<br>
  Температура в : {{pogoda.main.temp - 273.15 | fil}} ℃<br>
  Опис: {{pogoda.weather[0].description}} <br>
  Тиск : {{pogoda.main.pressure}} hpa<br>
  Швидкість вітру:{{pogoda.wind.speed}} m/s<br>

     
 </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
         data: function(){
         return{
             cit: "",
             pogoda:[],
             city:[], 
            geo:[]
         };
       },
       mounted: function() {
         navigator.geolocation.getCurrentPosition(this.cor);
      
       },

          methods: {
            cor: function(pos){
            
            axios.get("http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&appid=41bdab5681540ed10d3cddc728f61d47")
            .then((response) => {
            this.pogoda = response.data;
            console.log(this.pogoda);
            this.city.push(this.pogoda.name)
  
            })
       
                
            },

            puh: function(){
                this.city.push(this.cit)
                return this.city;
                
            },
            pogodka:function(){
            axios.get("http://api.openweathermap.org/data/2.5/weather?q="+  document.getElementById("po").value+"&appid=41bdab5681540ed10d3cddc728f61d47")
            .then((response) => {
            console.log(response.data);
            this.pogoda = response.data;
            return this.pogoda
      });
            }
          },

          filters: {
   fil: function (value) {
      return value.toFixed(2);
    },}
       }


    
</script>

