import Vue from 'vue'
import Router from 'vue-router'

import Contact from '../components/contact.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
  ]
})
