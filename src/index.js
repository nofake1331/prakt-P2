import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


 new Vue({
  el: '#app',
  data: {
    valuta:[],
    studs:[],
    serch: "",
    ser: " ",
    amount: 0,
    buy: 0,
    From: "",
  stud:{"name":"","group":"","mark":"","isDonePr":false}
  },
  computed: {


  },
  mounted: function(){
    axios.get("http://46.101.212.195:3000/students").then((Response)=>{
      this.studs = Response.data;


    })
    axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((Response)=>{
      this.valuta = Response.data;
      this.valuta.splice(3);
    })
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
    },
    dele: function (id) {
      this.studs.splice(id, 1);
      console.log(id);
    },
    val: function(){
       this.buy = document.getElementById("kek").value;
      
    }
  },
})


