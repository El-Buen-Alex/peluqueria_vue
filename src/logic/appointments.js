import PeluqueriaApi from '../apis/PeluqueriaApi'

export default {
    getAppointments(customer_id=0) {
      const data={customer_id}
      return PeluqueriaApi.post('getAppointments', data);
    },
    addAppointment(customer_id,description, start_date_){
        const start_date=this.buildDateTime(start_date_)
        const end_date=this.buildDateTime(new Date(start_date_.getTime()+(30*60000)))
        const appointment={customer_id, start_date, end_date, description}
        return PeluqueriaApi.post('addAppointment',appointment)
    },
    buildDateTime(dateTime){
        const parse_birthday= new Date(dateTime)
      const birthday=parse_birthday.getFullYear()+ "-"+parse_birthday.getMonth()+"-"+parse_birthday.getDate()+
      " "+parse_birthday.getHours()+":"+parse_birthday.getMinutes()+":"+parse_birthday.getSeconds()
      return birthday;
    },
     getAppointmentById(date){
      const start_date=this.buildDateTime(date)
      const appointment={start_date}
      return PeluqueriaApi.post('getAppointmentByDate', appointment)
    },
    completeAppointment(appointment_id){
        const data={appointment_id}
        return PeluqueriaApi.post('completeAppointment', data);
    },
    registerAppointment(appointment_id, reason, amount){
       const data={appointment_id, reason, amount}
       return PeluqueriaApi.post('/registerAppointment', data)
    },
    getAppointmentsFinished(){
      return PeluqueriaApi.get('/getAppointmentsFinished')
   }
};