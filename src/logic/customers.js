import PeluqueriaApi from '../apis/PeluqueriaApi'

export default {
    getCustomers() {
      return PeluqueriaApi.get('getCustomers');
    }
    
};