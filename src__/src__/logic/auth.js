import PeluqueriaApi from '../apis/PeluqueriaApi'
import Cookies from "js-cookie";

export default {
    register(name, email, password,password_confirmation) {
      const user = {name, email, password,password_confirmation };
      return PeluqueriaApi.post('register', user);
    },
    login(email, password){
        const user={email, password}
        return PeluqueriaApi.post('login', user)
    },
    setCokie(cookie){
       Cookies.set('token', cookie)
    },
    logout(){
        Cookies.remove('token');
    },
    isLoggedIn(){
        if(Cookies.get('token')){
            return true;
        }
        return false;
    }
};