<template>
  <div class="row h-100 w-100">
   <div class="col-12 col-lg-2 h-100 bg-dark " v-if="show_toggle" @click="showToggle">
     <div class="text-center mt-5 w-100">
       <div class="w-100">
         <router-link to="/" class="bg-light fw-bold text-decoration-none w-100 py-2 px-5">Go to Home</router-link>
       </div>
       <div class="w-100 border border-light mt-5 mb-3"></div>
        <div class="w-100">
         <router-link to="/customers" class="bg-light fw-bold text-decoration-none w-100 py-2 px-5">Customers</router-link>
       </div>
      </div> 
    </div>
    <div v-else class="col-12 col-lg-1 bg-dark h-100">
      <div class="d-flex justify-content-center w-100">
        <button class="btn btn-success w-75 mt-2" @click="showToggle">Show Options</button>
      </div>
    </div>
    <div :class="'col-12 '+class_container">
       <router-view></router-view>
       
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show_toggle:false,
      class_container:"col-lg-11"
    }
  },
  methods: {
    showToggle (){
      this.show_toggle=!this.show_toggle;
      if(this.show_toggle){
        this.class_container="col-lg-10";
      }else{
        this.class_container="col-lg-11"
      }
    }
  }
}
</script>