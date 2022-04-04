<template>
     <Modal  v-on:showOrHideModal="showOrHideModal"  :actionConfirmButton="addCustomer"  :propertiesConfirmButton="confirm_modal_button" :canPressButton="canAdd">
        <form action class="px-1" @submit.prevent="addCustomer">
            <label class="form-label" for="#name">Name:</label>
            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" placeholder="Name"  v-model="name">
            </div>
            
            <label class="form-label" for="#surname">Surname:</label>
            <div class="input-group mb-3">
                <span class="input-group-text">Surname</span>
                <input type="text" class="form-control" placeholder="Surname" id="surname" v-model="surname">
            </div>
    </form>
    </Modal>
</template>
<script>
import Modal from '../shared/Wrapers/Modal.vue'
export default {
    name:'AddCustomer',
    data(){
        return{
            confirm_modal_button:{
                'class':'btn btn-success',
                'text':'Add Customer'
            },
            canAdd:true,
            name:"",
            surname:"",
            birthday:""
        }
    },
    methods:{
        async addCustomer(){
            console.log("ey")
        },
        showOrHideModal(){
            this.$emit('showOrHideModal')
        }
    },
    components:{
        Modal
    }
}
</script>