<template>
<div>
<input v-model="login">
<button @click="auth"> ok </button>
</div>


</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
data: function() {
    return {
        login: ''
    }
},
   methods: {
     auth: function(){
        axios.get("http://46.101.212.195:3000/students/name/"+this.login).then((Response)=>{
        if(Response.data === null){
            return
        }
        this.$store.commit('setUser', Response.data);
        this.$router.push('/');  
       })
   }
   },
}
</script>
