// import Vue from 'vue'
// import App from './App.vue'
// import uView from "uview-ui";
// import store from './store';
// Vue.use(uView);

// Vue.config.productionTip = false
// const app = new Vue({
//     ...App,
//     mpType:"app",
//     store
// })
// app.$mount()

import Vue from 'vue'
import App from './App.vue'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

new App().$mount()
