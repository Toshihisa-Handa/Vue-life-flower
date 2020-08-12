import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
 
  
  
  {
    path: '/',
    name: 'TopPage',
    // route level code-splitting
    // this generates a separate chunk (Top.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Top" */ '../views/TopPage.vue')
  },
  {
    path: '/',
    name: 'TopCarousel',
    // route level code-splitting
    // this generates a separate chunk (TopCarousel.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TopCarousel" */ '../views/TopCarousel.vue')
  },
  // {
  //   path: '/topslide',
  //   name: 'Topslide',
  //   // route level code-splitting
  //   // this generates a separate chunk (Topslide.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Topslide" */ '../views/Topslide.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
