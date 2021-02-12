// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuescroll from 'vue-scroll';

import axios from 'axios'


window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

import { store } from './store/store';

Vue.use(vuescroll);
Vue.use(BootstrapVue);

// Vue.use(axios);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  router,
  store,
  components: { App },
  template: '<App/>'
})
