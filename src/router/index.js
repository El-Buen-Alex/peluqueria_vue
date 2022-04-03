import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import auth from "../logic/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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

  //  router.beforeResolve(async (to, from, next) =>{
     
  //      if(!auth.isLoggedIn() && to.name!=='Login' && to.name!=='Register'){
        
  //         return false;
  //      }
  //  })
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Register' && !auth.isLoggedIn()) next({ name: 'Login' })
    // if the user is not authenticated, `next` is called twice
    next()
  })
export default router;