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

     <input type="text" v-model="description" class="form-control"/>
 </div>

      <label class="form-label" for="#startdate">Start Date:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">Start Date</span>
        <vc-date-picker v-model="start_date" locale="en-ZA" mode="dateTime"  is24hr>
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 h-100 rounded"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </vc-date-picker>
      </div>



 <label class="form-label" for="#enddate">End Date:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">End Date</span>
        <vc-date-picker v-model="end_date" locale="en-ZA" mode="dateTime"  is24hr>
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 h-100 rounded"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </vc-date-picker>
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
      start_date: Date.now(),
      end_date: Date.now(),
      description: "",
      customer_id:0,
      customers:[]
    };
  },
  created(){
      this.getCustomers()
  },
  methods: {
    async addAppointment() {
        await Appointments.addAppointment(this.customer_id, this.start_date, this.end_date, this.description).then(response=>{
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
  components: {
    Modal,
  },
};
</script>