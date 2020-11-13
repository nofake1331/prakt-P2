<template>

  <div>
    <!-- <select   id="eke" v-on:click  ="otdel" >
      <option v-for="c in city"   :value="c.Description">  {{c.Description}}  </option>
  </select>  -->
  <br><br>
  <select  >
      <!-- <option v-for="o in otdelen"> {{o.Description}}  </option> -->
  </select> 
  </div>

</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
       props: {
           id: '',
       },
         data: function(){
         return{
             city:[],
             otdelen:[],
         };
       },
       
         mounted: function(){
            axios.post("https://api.novaposhta.ua/v2.0/json/",{
        modelName: "Address",
        calledMethod: "getCities",
        apiKey: "9a557481f95094531372a9d1b55222c8",
      })
      .then((response) => {
        console.log(response.data);
        this.city = response.data.data;
      });
          },

          methods: {
                  otdel: function(){
  this.gorod = document.getElementById("eke").value;

           axios.post("https://api.novaposhta.ua/v2.0/json/",{
    "modelName": "AddressGeneral",
    "calledMethod": "getWarehouses",
    "methodProperties": {
         "CityName":  this.gorod,
    },
    "apiKey": "9a557481f95094531372a9d1b55222c8"
}).then((Response)=>{
             this.otdelen = Response.data.data

          })
          return this.otdelen;
    },
          },
       }


    
</script>

