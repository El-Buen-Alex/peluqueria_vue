import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import auth from "../logic/auth";
import ShowCustomers from '../views/customers/ShowCustomers.vue'

import Appointments_ from '../views/Appointments/Apoointments_.vue'
import Appointments_calendar from '../views/Appointments/Appointments_calendar.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/customers",
        name: "Customers",
        component: ShowCustomers,
      },
      {
        path: "/appointments",
        name: "Appointments",
        component: Appointments_,
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
     path: "/login",
    name: "Login",
    component: Login,
   },
   {
     path: "/register",
     name: "Register",
     component: Register,  
   }
];

const router = new VueRouter({
  mode:'history',
  routes:routes
});

    router.beforeResolve(async (to, from, next) =>{
   
        if(!auth.isLoggedIn() && to.name!=='Login' && to.name!=='Register'){
      
          next({ name: 'Login' })
        }
        next()
    })
  // router.beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && to.name !== 'Register' && !auth.isLoggedIn()) next({ name: 'Login' })
  //   // if the user is not authenticated, `next` is called twice
  //   next()
  // })
export default router;