<template>
  <Modal
    v-on:showOrHideModal="showOrHideModal"
    :actionConfirmButton="registerAppointment"
    :propertiesConfirmButton="confirm_modal_button"
    :canPressButton="canAdd"
  >
    <form action class="px-1" @submit.prevent="registerAppointment">
    
        <label class="form-label">Resaon:</label>
        <div class="input-group mb-3">
            <input type="text" v-model="reason" class="form-control"/>
        </div>
        <label class="form-label">Amount:</label>
        <div class="input-group mb-3">
            <input type="number" v-model="amount" class="form-control"/>
        </div>
    </form>
  </Modal>
</template>
<script>
import Appointments from '@/logic/appointments';
import Modal from "../shared/Wrapers/Modal.vue";
export default {
  name: "AddAppointment",
  data() {
    return {
      confirm_modal_button: {
        class: "btn btn-success",
        text: "Register",
      },
      canAdd: true,
      reason: "",
      amount:0
    };
  },
  
  
  methods: {
     
    async registerAppointment() {
        await Appointments.registerAppointment(this.appointment_id, this.reason, this.amount).then(response=>{
            if(response.data.success){
                this.$emit('refresh_onadd')
                this.showOrHideModal();
            }
        }).catch(e=>{
            
        })
    },
    showOrHideModal() {
      this.$emit("showOrHideModal");
    },
  },
  props:{
      appointment_id:{
          required:true
      }
  },
  components: {
    Modal,
  },
  computed:{
      
  }
};
</script>