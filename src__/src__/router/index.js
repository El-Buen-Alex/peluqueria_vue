import { createWebHistory, createRouter } from "vue-router";
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeResolve(async to=>{
    if(!auth.isLoggedIn() && to.name!=='Login' && to.name!=='Register'){
        return { name: 'Login' };
    }
})
export default router;