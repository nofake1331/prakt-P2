import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import App from '/components/App.vue'
import Students from './components/Students.vue'
import StudentInfo from './components/StudentInfo.vue'
import Poshta from './components/Poshta.vue'
import Pogoda from './components/Pogoda.vue'
 

const routes = [
   { path: '/', component: Students },
   { path: '/student-info/:id', component: StudentInfo, props: true },
   { path: '/Poshta/', component: Poshta, props: true },
   { path: '/Poshta/', component: Poshta, props: true },
   { path: '/Pogoda/', component: Pogoda, props: true },
]
 
const router = new VueRouter({
   routes
})
 
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
 
new Vue({
   render: h => h(App),
   el: '#app',
   router,
   
})

    