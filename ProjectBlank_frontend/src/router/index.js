import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Videos from '../views/Videos.vue'
import Hype from '../views/Hype.vue'
// import Dashboard from '../views/Dashboard.vue'
// import More from '../views/More.vue'
// import Moderation from '../views/Moderation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/hype',
    name: 'hype',
    component: Hype
  } // Add the rest of the routes if you'd like, just remove the comments here.
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: Dashboard
  // },
  // {
  //   path: '/more',
  //   name: 'more',
  //   component: More
  // },
  // {
  //   path: '/moderation',
  //   name: 'moderation',
  //   component: Moderation
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
