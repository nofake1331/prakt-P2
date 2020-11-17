import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

 
import App from '/components/App.vue'
import Students from './components/Students.vue'
import StudentInfo from './components/StudentInfo.vue'
import Poshta from './components/Poshta.vue'
import Pogoda from './components/Pogoda.vue'
import Login from './components/Login.vue'
import store from './store.js'

const routes = [
   { path: '/', component: Students, meta:{requiresAuth: true} },
   { path: '/student-info/:id', component: StudentInfo, props: true , meta:{requiresAuth: true}},
   { path: '/Poshta/', component: Poshta, props: true , meta:{requiresAuth: true}},
   { path: '/Poshta/', component: Poshta, props: true , meta:{requiresAuth: true}},
   { path: '/Pogoda/', component: Pogoda, props: true , meta:{requiresAuth: true}},
   { path: '/Login/', component: Login, props: true}
]
 
const router = new VueRouter({
   routes
})
 
Vue.use(VueAxios, axios)

router.beforeEach((to,from,next)=>{
   if (to.matched.some(record => record.meta.requiresAuth)){
      if (store.getters.getUser === null){
         next({
            path:'/Login/',
            query:{redirect: to.fullPath}
         })
      }else{
         next()
      }
   }else{
      next()
   }
})


Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   el: '#app',
   router,
   store
})

    