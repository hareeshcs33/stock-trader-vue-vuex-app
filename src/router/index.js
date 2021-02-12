import Vue from 'vue'
import Router from 'vue-router'

import Contact from '../components/contact.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import SignUp from '../components/signUp.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
  ]
})
