<template>
    <div class="w-100 h-100">
        <h1>Appointments Finished</h1>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
           <th scope="col">Start Date</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Description</th>
          <th scope="col">Reason</th>
          <th scope="col">Amount</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="(appointment, index) in Appointments_finished" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{appointment.start_date}}</td>
          <td>{{appointment.name}}</td>
          <td>{{appointment.surname}}</td>
          <td>{{appointment.description}}</td>
          <td>{{appointment.reason}}</td>
          <td>{{appointment.amount}}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
import Appointments from '@/logic/appointments';
export default {
    data(){
        return{
            Appointments_finished:[]
        }
    },
    created(){
        this.getAppointmentsFinished()
    },
    methods:{
        async getAppointmentsFinished(){
            await Appointments.getAppointmentsFinished().then(response=>{
                this.Appointments_finished=response.data.data
            })
        }
    }
}
</script>