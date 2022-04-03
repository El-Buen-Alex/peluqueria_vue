import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import VCalendar from 'v-calendar';
import Va from 'vue-atlas'

import 'vue-atlas/dist/vue-atlas.css'


const app=createApp(App);
app.use(router);
app.use(Va)
  //.use(VCalendar, {componentPrefix: 'vc'})
  app .mount('#app')
