import PeluqueriaApi from '../apis/PeluqueriaApi'

export default {
    getCustomers() {
      return PeluqueriaApi.get('getCustomers');
    },
    addCustomer(name, surname, birthday_){
      const parse_birthday= new Date(birthday_)
      const birthday=parse_birthday.getFullYear()+ "-"+parse_birthday.getMonth()+"-"+parse_birthday.getDate()
       const user={name, surname, birthday}
       return PeluqueriaApi.post('addCustomer', user)
    }
};