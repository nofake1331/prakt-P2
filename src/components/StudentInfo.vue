<template>

 <div >

 <table border="1">
      <tr style >
        <th>Фото</th>
        <th>ПІ</th>
        <th>Група</th>
        <th>Рік народження</th>
        <th>Здав</th>
      </tr>
      <tr>
        <td><img :src="studs.photo" width="35%" height="35%"  id="show-modal"  v-bind:id="studs._id"    @click="showModal" ></td>
        <td>{{studs.name}}</td>
        <td>{{studs.group}}</td>
        <td>{{studs.mark}}</td>
        <td><input type="checkbox" v-model="studs.isDonePr"></td>
      </tr>     
    </table>

    <modal v-show="isModalVisible" @close="closeModal"></modal>

</div>




</template>
<script>

import Vue from 'vue'
import modal from '/components/modal.vue'
export default {

   components: {
      modal,
    },
       props: {
           id: '',
       },
       data: function(){
         return{
             isModalVisible: false,
             studs:{},
         };
       },
       
         mounted: function(){
         Vue.axios.get("http://46.101.212.195:3000/students/" + this.id ).then((Response)=>{
          this.studs = Response.data;
          })
          },

    methods: {
      showModal() {
        this.isModalVisible = true;
        this.$emit('stud',this.studs);
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
          
}


    
</script>


