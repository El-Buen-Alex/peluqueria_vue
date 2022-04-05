<template>
  <div class="w-100 h-100 ">
    <vue-meeting-selector
      v-model="meeting"
      :date="date"
      :loading="loading"
      :meetings-days="meetingsDays"
      @next-date="nextDate"
      @previous-date="previousDate"
      @meeting-slot-selected="create_appointment"
    >
      <template
          #meeting="{ meeting }">
          <div
            v-if="meeting.date"
            class="meeting"
            :class="meetingSelectedClass(meeting)"
            @click="selectMeeting(meeting)">
            {{ formatingTime(meeting.date) }}
          </div>
          <div v-else class="meeting--empty">
            &mdash;
          </div>
        </template>
    </vue-meeting-selector>

    <AddAppointment_ :date_time="meeting? meeting:{}"  v-show="show_add_modal" v-on:showOrHideModal="showOrHideModal" v-on:refresh_onadd="changeStateMeeting"/>
    <AddAppointmentInfo v-show="show_info_cia" :cita="cita_information" v-on:showOrHideModalInformation="showOrHideModalInformation" />
    <ShowAppointments />
  </div>
</template>

<script>
import VueMeetingSelector from "vue-meeting-selector";
import AddAppointment_ from '../../components/Appointment/AddAppointment_.vue'
import AddAppointmentInfo from '../../components/Appointment/Appointment_information.vue'
import ShowAppointments from '../../components/Appointment/ShowAppointments.vue'

import Appointments from '../../logic/appointments'
export default {
  data() {
    return {
      date: new Date(Date.now()),
      meeting: null,
      loading: false,
      meetingsDays: [],
      range: 6,
      min_hour: 8,
      max_hour: 18,
      steps_mins: 30,
      show_add_modal:false,
      cita_information:{},
      show_info_cia:false,
    };
  },
  methods: {
    showOrHideModalInformation(){
      this.show_info_cia=!this.show_info_cia
    },
    async selectMeeting(meeting) {
      await Appointments.getAppointmentById(meeting.date).then(response=>{
          if(response.data.data.length===0){
             if (this.meeting) {
                const selectedDate = new Date(meeting.date);
                const date = new Date(this.meeting.date);
                if (selectedDate.getTime() !== date.getTime()) {
                    this.meeting = meeting;
                } else {
                    this.meeting = undefined;
                }
                } else {
                    this.meeting = meeting;
                }
                  this.showOrHideModal()      
          }else{
                 this.showOrHideModalInformation()
                 this.cita_information=response.data.data[0]
          }
      })
     
    },
    changeStateMeeting(state){
       this.meeting.state=state
    },
    async getMeetings(date) {
      const meetingsDays = [];

      const start_date = new Date(date);
      start_date.setHours(8);
      start_date.setMinutes(0);
      start_date.setSeconds(0);
      const aux_date = new Date(start_date);

      for (let i = 1; i < this.range; i++) {
        const object_aux = { date: new Date(aux_date) };
        const slots = [];
        let key = 0;
        const limit_time = new Date(aux_date);
        limit_time.setHours(this.max_hour);
        for (
          let time = aux_date.getTime();
          time <= limit_time.getTime();
          time += this.steps_mins * 60000
        ) {
          const current_date = new Date(time);
          if (
            current_date.getHours() >= this.min_hour &&
            current_date.getHours() <= this.max_hour
          ) {
            const aux_solt = { date: current_date };
            aux_solt.key = key;
            aux_solt.state='A'
            slots.push(aux_solt);
            key++;
          }
        }
        object_aux.slots = slots;
        object_aux.key = i;
        meetingsDays.push(object_aux);
        aux_date.setDate(aux_date.getDate() + 1);
      }

      return meetingsDays;
    },
    async nextDate() {
      this.loading = true;
      const date = new Date(this.date);
      date.setDate(date.getDate() + 7);
      this.meetingsDays = await this.getMeetings(date);
      this.date = date;
      this.loading = false;
    },
    async previousDate() {
      this.loading = true;
      const date = new Date(this.date);
      date.setDate(date.getDate() - 7);
      this.meetingsDays = await this.getMeetings(date);
      this.date = date;
      this.loading = false;
    },
    create_appointment(e){
        console.log(e)
    },
    meetingSelectedClass(meeting) {
      if (!this.meeting) {
        return '';
      }
      const selectedDate = new Date(meeting.date);
      const date = new Date(this.meeting.date);
      if (selectedDate.getTime() === date.getTime()) {
        return 'meeting--selected';
      }
      return '';
    },
    formatingDate(dateToFormat) {
      const d = new Date(dateToFormat);
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    },
    formatingTime(date) {
      const d = new Date(date);
      const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
      return `${hours}:${minutes}`;
    },
    showOrHideModal(){
      this.show_add_modal=!this.show_add_modal
    }
  },
  async created() {
    this.loading = true;
    this.meetingsDays = await this.getMeetings(this.date);
    this.loading = false;
  },
  components:{
    AddAppointment_,
    VueMeetingSelector,
    AddAppointmentInfo,
    ShowAppointments
  }
  
};
</script>

<style scoped lang="scss">
.slots-example {
  &__meeting-selector {
    max-width: 542px;
  }
}
.title {
  margin: 0 5px;
}
.meeting {
  display: inline-block;
  padding: 5px;
  margin: 5px 0;
  background-color: #845EC2;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &--selected {
    background-color: #B39CD0;
  }
  &--empty {
    display: inline-block;
    padding: 5px;
    margin: 5px 0;
    cursor: not-allowed;
  }
}
.button-pagination {
  border: none;
  padding: 0;
  width: 30px;
}
// since our scss is scoped we need to use ::v-deep
::v-deep .loading-div {
  top: 32px!important;
}
</style>