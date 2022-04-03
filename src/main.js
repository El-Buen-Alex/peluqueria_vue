import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import tiendaApi from './apis/PeluqueriaApi'
//import VCalendar from 'v-calendar';
//import Va from 'vue-atlas'

//import 'vue-atlas/dist/vue-atlas.css'


//const app=createApp(App);
//app.use(router);
//app.use(Va)
  //.use(VCalendar, {componentPrefix: 'vc'})

//Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(tiendaApi)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


