<template>
  <Modal
    v-on:showOrHideModal="showOrHideModal"
    :actionConfirmButton="addCustomer"
    :propertiesConfirmButton="confirm_modal_button"
    :canPressButton="canAdd"
  >
    <form action class="px-1" @submit.prevent="addCustomer">
      <label class="form-label" for="#name">Name:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">Name</span>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
        />
      </div>

      <label class="form-label" for="#surname">Surname:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">Surname</span>
        <input
          type="text"
          class="form-control"
          placeholder="Surname"
          id="surname"
          v-model="surname"
        />
      </div>
      <label class="form-label">Birthday:</label>
      <div class="input-group mb-3">
        <span class="input-group-text">Birthday</span>
        <vc-date-picker v-model="birthday">
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
import customers from '@/logic/customers';
import Modal from "../shared/Wrapers/Modal.vue";
export default {
  name: "AddCustomer",
  data() {
    return {
      confirm_modal_button: {
        class: "btn btn-success",
        text: "Add Customer",
      },
      canAdd: true,
      name: "",
      surname: "",
      birthday: Date.now(),
    };
  },
  methods: {
    async addCustomer() {
        await customers.addCustomer(this.name, this.surname, this.birthday).then(response=>{
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
  components: {
    Modal,
  },
};
</script>