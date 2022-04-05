<template>
    <div class="mt-2">
        <h1>Appointments list</h1>

        <select class="form-select" aria-label="Default select example" v-model="customer_id" size="5" @change="getAppointments">
            <option value="0" selected>All</option>
            <option v-for="customer in customers" :value="customer.id" :key="customer.id">{{customer.surname +" "+ customer.name}}</option>
            
        </select>  
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(appointment, index) in appointments" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{appointment.name}}</td>
          <td>{{appointment.surname}}</td>
          <td>{{appointment.start_date}}</td>
          <td>{{appointment.end_date}}</td>
          <td>{{appointment.description}}</td>
          <td>{{appointment.end_date}}</td>
          <td><button class="btn btn-success" :id="appointment.appointment_id" @click="showRegisterAppointment">Register</button></td>
        </tr>
      </tbody>
    </table>
    <RegisterAppointment v-on:showOrHideModal="showOrdhideModal" v-show="showRegisterModal" v-on:refresh_onadd="getAllAppointments()" :appointment_id="current_id_appointment"  />
    </div>
</template>

<script>
import Appointments from '../../logic/appointments'
import customers from '@/logic/customers';
import RegisterAppointment from './RegisterAppointment.vue'
export default {
    data() {
        return{
            appointments:[],
            customer_id:0,
            customers:[],
            current_id_appointment:0,
            showRegisterModal:false
        }
    },
    mounted(){
        this.getCustomers()
        this.getAppointments()
    },
    methods:{
        getAllAppointments(){
            this.customer_id=0
            this.getAppointments();
        },
        async getAppointments(){
            await Appointments.getAppointments(this.customer_id).then(response=>{
                this.appointments=response.data.data
            }).catch(e=>{
                console.log(e)
            })
        },
        async getCustomers() {
      await customers
        .getCustomers()
        .then((response) => {
          if (response.data) {
            const { data } = response.data;
            this.customers = data;
          }
        })
        .catch(() => {});
    },
    showOrdhideModal(){
        this.showRegisterModal=!this.showRegisterModal
    },
    showRegisterAppointment(element){
        this.current_id_appointment=element.target.id
        this.showOrdhideModal()
    }
    },
    components:{
        RegisterAppointment
    }
    
}
</script>