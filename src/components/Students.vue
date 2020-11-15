<template>

    <div>
      <link rel="stylesheet" type="text/css" :href="getStyle" />
            <input type="text" v-model="serch" v-on:keyup="serching">
 
 <button @click="chengstyle">изменить стиль</button>
    <table border="1">
      <tr>
        <th>Фото</th>
        <th>ПІ</th>
        <th>Група</th>
        <th>Рік народження</th>
        <th>Здав</th>
        <th>Видалити</th>
      </tr>
      <tr v-for="s,index in studs" v-bind:id="s._id" :class="s.name.indexOf(ser) ? '': 'red'">
        <td><img :src="s.photo" width="35%" height="35%" alt=""></td>
        <td><router-link v-bind:to="'/student-info/'+s._id">{{s.name}}</router-link></td>
        <td>{{s.group}}</td>
        <td>{{s.mark}}</td>
        
        
        <td><input type="checkbox" v-model="s.isDonePr"></td>
        <td><a href="#"  v-on:click="studentId = s._id,dele()">Видалити</a> </td>
       <td><img src="карандаш.png" v-on:click="studentId = s._id, id=index,stud=s , v = 1"></td>
      </tr>     
    </table>
Количество студентов = {{getCount}}
<br> <br>

    <span style="font-size:25px;">EnterName:</span>
    <input v-model="stud.name">
    <span style="font-size:25px;">EnterGroup : </span>
    <select  v-model="stud.group">
      <option>17 19</option>
      <option>17 29</option>
    </select>
    <span style="font-size:25px;">EnterAge:</span>
    <input  v-model.number="stud.mark" type="number">
    <input  type="checkbox" v-model="stud.isDonePr">
    <button  v-on:click="add">ok</button>
    <button v-on:click="updat"  :class="v == 0 ? 'hide':'' ">update</button>
<br><br>


<div>

  Enter Amount: <input type="number" v-model="amount" ><br><br>
  Convert From: 
  <select  id="kek" v-on:click  ="val" >
    <option :value="v.buy" v-for="v in valuta"  > {{v.ccy}}  </option>
  </select> 
  Convert to:
  <select>
    <option >UAH </option>
  </select>
  = {{amount* buy | fil}}

  </div>

<br><br><br>

<router-link v-bind:to="'/Poshta/'">go to poshta</router-link>
<router-link v-bind:to="'/Pogoda/'">go to pogoda</router-link>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    

  data: function() {
    return{
    valuta:[],
    studs:[],
    city:[],
       showModal: false,
    gorod: "",
    otdelen: [],
    serch: "",
    ser: " ",
    amount: 0,
    buy: 0,
    v: 0,
    id:0,
    studentId:"",
    stud:{"photo":"https://robohash.org/fdgdf5345345","name":"","group":"","mark":"","isDonePr":false}

  }},
 
  mounted: async function(){
    let Response = await axios.get("http://46.101.212.195:3000/students");
      this.studs = Response.data;
      this.$store.commit('setCount',this.studs.length);


   

    axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((Response)=>{
  
      this.valuta = Response.data;
      this.valuta.splice(3);
  
    })

    
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
    serching: function () {
      if (this.serch.length > 0) {
        this.ser = this.serch
      }
      else this.ser = " "

    },
    
    add: function(){
       this.stud._id = this.studs.length+1;
       this.studs.push(JSON.parse(JSON.stringify(this.stud)))
        Vue.axios.post("http://46.101.212.195:3000/students",{
          name: this.stud.name,
          mark: this.stud.mark,
          group: this.stud.group,
          isDonePr: this.stud.isDonePr
       })

    .then((Response)=>{
      console.log(Response.data)
    })
    },
    dele: function () {
       Vue.axios.delete('http://46.101.212.195:3000/students/' + this.studentId)   ;
        this.studs = this.studs.filter((element) => element._id !== this.studentId);
        return this.studs;
       },

    val: function(){
       this.buy = document.getElementById("kek").value;
      
    },
     chengstyle: function(){
          if(this.getStyle == "dark.css"){
            this.$store.commit('setStyle',"white.css")
          }
         else {
             this.$store.commit('setStyle',"dark.css")
         }
     },
     updat: function(){
             this.v = 0;
            
             Vue.axios.put('http://46.101.212.195:3000/students/' + this.studentId,{
             name: this.stud.name,
             mark: this.stud.mark,
             group: this.stud.group,
             isDonePr: this.stud.isDonePr
          });
           this.studs[this.id] = this.stud;
           this.stud = {"photo":"https://robohash.org/fdgdf5345345","name":"","group":"","mark":"","isDonePr":false}
           return this.studs;
    
          
     },
  },
computed: {
  getCount(){
    return this.$store.getters.getCount
  },
   getStyle(){
    return this.$store.getters.getStyle
  }
},
  filters: {
   fil: function (value) {
      return value.toFixed(2);
    },

   
  }
  
}

</script>
<style scoped>
    
</style>