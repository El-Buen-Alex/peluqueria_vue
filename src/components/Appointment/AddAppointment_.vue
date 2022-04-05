<template>
  <Modal
    v-on:showOrHideModal="showOrHideModal"
    :actionConfirmButton="addAppointment"
    :propertiesConfirmButton="confirm_modal_button"
    :canPressButton="canAdd"
  >
    <form action class="px-1" @submit.prevent="addAppointment">
      <label class="form-label" for="#name">Customer:</label>
      <div class="input-group mb-3">
       <select class="form-select" aria-label="Default select example" v-model="customer_id">
            <option value="0" selected>Select a customer please</option>
            <option v-for="customer in customers" :value="customer.id" :key="customer.id">{{customer.surname +" "+ customer.name}}</option>
            
        </select>    
      </div>
      <label class="form-label" for="#name">Description:</label>
        <div class="input-group mb-3">
            <vc-date-picker mode="time" v-model="date_time.date"  />
        </div>
        <label class="form-label" for="#name">Description:</label>
        <div class="input-group mb-3">
            <input type="text" v-model="description" class="form-control"/>
        </div>
    </form>
  </Modal>
</template>
<script>
import Appointments from '@/logic/appointments';
import Modal from "../shared/Wrapers/Modal.vue";
import customers from '@/logic/customers';
export default {
  name: "AddAppointment",
  data() {
    return {
      confirm_modal_button: {
        class: "btn btn-success",
        text: "Add Customer",
      },
      canAdd: true,
      description: "",
      customer_id:0,
      customers:[],
      hour:null
    };
  },
  created(){
      this.getCustomers()
  },
  
  methods: {
     
    async addAppointment() {
        await Appointments.addAppointment(this.customer_id, this.description, this.date_time.date).then(response=>{
            if(response.data.success){
                this.$emit('refresh_onadd')
                this.showOrHideModal();
            }
        }).catch(e=>{
            
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
    showOrHideModal() {
      this.$emit("showOrHideModal");
    },
  },
  props:{
      date_time:{
          type:Object,
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