import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from './../components/UserList'
import Tabs from './../components/Tabs'
import Dashboard from './../components/Dashboard' 
import Typography from './../components/Playground/Typography'
import Home1 from './../components/Home1'
import Cart from './../components/Cart'
import Store from './../components/Store'
import Timeline from './../components/Timeline'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/home1',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/typography',
    name:'Typography',
    component:Typography
  },
  {
    path:'/timeline',
    name:'Timeline',
    component:Timeline
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
