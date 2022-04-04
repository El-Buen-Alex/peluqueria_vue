import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import VCalendar from 'v-calendar';


Vue.use(VCalendar, {componentPrefix: 'vc'})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


