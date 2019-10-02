<template>
  <div class="formContainer z-20">

  <div class="vue-form m-auto shadow-2xl z-20" :class="{ exitModal: exit }">

    <div class="header shadow-inner">
      
      <h1 class="font-display text-2xl flex"><span class="title hidden md:inline-block">Forms</span><span class="text-primary font-bold md:text-black md:font-normal md:pt-4">{{data.title}}</span></h1>


    <div class="close" @click="closemodal()">
      
    </div>

    </div>

    <splash-screen
      v-if="state === 'splash'"
      @continue="state = 'form'"
      :call-to-action="data.callToAction"
      :button="data.launchButton"
    ></splash-screen>

    <v-form v-if="state === 'form'" :questions="data.questions" @complete="formComplete" @splash="showSplash"></v-form>

  </div>
    <div class="background" @click="closemodal()"></div>

   </div>
</template>

<script>
import SplashScreen from "./VueForm/SplashScreen";
import vForm from "./VueForm/Form";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      state: "splash",
      exit: false
    };
  },
  components: {
    SplashScreen,
    vForm
  },

  methods: {
    formComplete(formData) {

      let entry = {
        title: this.data.formId,
        data: formData
      }
      this.$emit("complete", entry);


       var self = this;
       setTimeout(function () { self.exit = true; } , 2000);
        setTimeout(function () { self.exit = false; self.state = "splash"; self.$emit("close"); } , 2500);

    },
    showSplash() {
      this.state = "splash"
    },
    closemodal() {
      this.exit = true; 
      var self = this;
      setTimeout(function () { self.exit = false;  self.$emit("close"); } , 200);
      
     
      this.state = "splash";
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  width: 4rem;
  height: 100%;
  border-radius: 0px 10px 0px 0;
  z-index: 9;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='RGBA(27, 172, 192, 1.00) ' d='M22.9 77.1c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3L50 61.3l15.8 15.8a7.8 7.8 0 005.6 2.3 8 8 0 005.6-2.3 8 8 0 000-11.3L61.3 50l15.8-15.8a8 8 0 000-11.3 8 8 0 00-11.3 0L50 38.7 34.2 22.9a8 8 0 00-11.3 0 8 8 0 000 11.3L38.7 50 22.9 65.8a8 8 0 000 11.3z'/%3E%3C/svg%3E") no-repeat center 70%;
  background-size: 2.3rem;
  &:hover {
  cursor: pointer
}
}
.header {
  height: 65px !important;
  overflow: hidden;
  position: relative;
  top: 0;
  z-index: 999;
  width: 100%;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='RGBA(27, 172, 192, 1.00)' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat 20px center #efefef;
  background-size: 37px;
  padding: 0 0 0 67px;
.title {
  color: RGBA(27, 172, 192, 1.00); 
  font-weight: bold; 
  border-right: 1px solid #ddd; 
  padding: 15px 15px 15px 0; 
  margin-right: 15px;
}
}

.formContainer {
    position: fixed;
  top: 0;
  left: 0;
    width: 100%;
  height: 100vh;
}

.background {
  width: 100%;
  height: 100vh;
position: absolute;
top: 0;
left: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9999;
}
.vue-form {
  position: absolute;
  top: 60px;
  width: 100%;
  left: 0%;
  overflow: hidden;
  height: 90vh;
  background: white;
  z-index: 99999;
  border-radius: 10px;
  opacity: 0;
  animation: fadeIn .8s forwards ease-out;
}

.exitModal {
      animation: fadeOut .4s forwards ease-out;
  opacity: 1;
}

@keyframes fadeIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1) translateY(0px);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: scale3d(0, 0, 0) translateY(20px);
  }
}

@media (min-width: 640px) { 
.vue-form {
  width: 90%;
  left: 5%;
  height: 85vh;
  top: 10%;
}
.close {
  font-size: 1.5em;
  width: 4rem;
  height: 100%;
  border-radius: 0px 10px 0px 0;
  z-index: 9;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath fill='white' d='M22.9 77.1c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3L50 61.3l15.8 15.8a7.8 7.8 0 005.6 2.3 8 8 0 005.6-2.3 8 8 0 000-11.3L61.3 50l15.8-15.8a8 8 0 000-11.3 8 8 0 00-11.3 0L50 38.7 34.2 22.9a8 8 0 00-11.3 0 8 8 0 000 11.3L38.7 50 22.9 65.8a8 8 0 000 11.3z'/%3E%3C/svg%3E") no-repeat RGBA(27, 172, 192, 1.00) center 70%;
  background-size: 2.3rem;
  &:hover {
  cursor: pointer
}
}
}

</style>