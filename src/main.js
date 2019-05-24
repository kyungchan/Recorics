import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');