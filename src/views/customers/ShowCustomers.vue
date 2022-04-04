<template>
  <div v-show="customers.length > 0" class="w-100">
      <div class="row w-100 mt-5 mb-3">
          <div class="col-12 col-lg-8">
                <h1>My coustomers!</h1>
          </div>
          <div class="col-12 col-lg-4 position-relative">
              <button class="btn btn-primary w-50 position-absolute end-0" @click="showOrHideModal">Add Customer</button>
          </div>
      </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{customer.name}}</td>
          <td>{{customer.surname}}</td>
          <td>{{customer.birthday}}</td>
        </tr>
      </tbody>
    </table>
   <AddCustomer v-show="showModal" v-on:showOrHideModal="showOrHideModal" />
  </div>
</template>
<script>
import customers from "@/logic/customers";
import AddCustomer from '../../components/Customer/AddCustomer.vue'
export default {
  data() {
    return {
      customers: [],
      
      showModal:false
    };
  },
  mounted() {
    this.getCustomers();
  },
  methods: {
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
    
    showOrHideModal(){
        this.showModal=!this.showModal;
    }
  },
  components: {
    AddCustomer
    }
};
</script>