<template>
  <div class="w-100">
      <div class="row w-100 mt-5 mb-3">
          <div class="col-12 col-lg-8">
                <h1>My Appointments!</h1>
          </div>
          <div class="col-12 col-lg-4 position-relative">
              <button class="btn btn-primary w-50 position-absolute end-0" @click="showOrHideModal">Add Appointments</button>
          </div>
      </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cusomer</th>
           <th scope="col">Description</th>
          <th scope="col">Star Date</th>
          <th scope="col">End Dte</th>
          <th scope="col">Actions</th>

        </tr>
      </thead>
      <tbody v-show="appointments_list.length > 0">
        <tr v-for="(appointment, index) in appointments_list" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{appointment.customer}}</td>
          <td>{{appointment.description}}</td>
          <td>{{appointment.start_date}}</td>
          <td>{{appointment.end_date}}</td>
        </tr>
      </tbody>
    </table>
    <AddAppointment v-show="showModal" v-on:showOrHideModal="showOrHideModal" v-on:refresh_onadd="getAppointments"/>
  </div>
</template>
<script>

import Appointments from '../../logic/appointments'
import AddAppointment from '../../components/Appointment/AddAppointment.vue'
export default {
  data() {
    return {
      appointments_list: [],
      
      showModal:false
    };
  },
  mounted() {
    this.getAppointments();
  },
  methods: {
    async getAppointments() {
      await Appointments
        .getAppointments()
        .then((response) => {
          if (response.data) {
            const { data } = response.data;
            this.appointments_list = data;
          }
        })
        .catch(() => {});
    },
    
    
    showOrHideModal(){
        this.showModal=!this.showModal;
    }
  },
  components: {
    AddAppointment
    }
};
</script>