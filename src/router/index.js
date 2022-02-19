import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Recursos from '../views/Recursos.vue'
import Proyectos from '../views/Proyectos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   {
     path: '/recursos',
     name: 'Recursos',
     component: Recursos
   },
   {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos
   }
  
  

  
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
