<template>

    <SingleModal :propertiesConfirmButton="confirm_modal_button" 
    v-on:showOrHideModal="showOrHideModal" v-show="cita" v-on:cofnirmAction="completeAppointment" :show_confirm="cita.state==='RESERVED'">
        <div class="w-100 h-100">
            <h4>{{cita.description}}</h4>
            <h3>{{cita.name + " "+cita.surname}}</h3>
            <h4>{{cita.start_date +"-"+cita.end_date}}</h4>
        </div>
    </SingleModal>

</template>

<script>
import SingleModal from '../shared/Wrapers/SingleModal.vue'
import Appointments from '../../logic/appointments'
export default {
    data(){
        return{
            confirm_modal_button: {
                class: "btn btn-success",
                text:"COMPLETE APPOINTMENT"
            },
        }
    },
    mounted(){
        
    },
    props : {
        cita:{
            type:Object,
            required:true
        }
        
    },
    methods:{
        showOrHideModal(){
            this.$emit('showOrHideModalInformation')
        },
        async completeAppointment(){
            if(this.cita.state="RESERVED"){
                await Appointments.completeAppointment(this.cita.id).then(response=>{
                if(response.data.success){
                    this.showOrHideModal()
                }
                })
            }else{
                this.showOrHideModal()
            }
           
        }
    },
    components:{
        SingleModal
    }
}
</script>