<template>
  <div class="background">


  <div class="vue-form m-auto shadow-2xl">

    <div class="shadow-xl close bg-primary w-12 h-12 flex justify-center items-center absolute right-0 text-white rounded-full" @click="closemodal()">
      x
    </div>

    <div class="header shadow-inner">
      
      <h1 class="font-display text-2xl"><span style="color: RGBA(27, 172, 192, 1.00); font-weight: bold; border-right: 1px solid #ddd; padding: 15px 15px 15px 0; margin-right: 15px">Forms</span>{{data.title}}</h1>
    </div>

    <splash-screen
      v-if="state === 'splash'"
      @continue="state = 'form'"
      :call-to-action="data.callToAction"
      :button="data.launchButton"
    ></splash-screen>

    <v-form v-if="state === 'form'" :questions="data.questions" @complete="formComplete" @splash="showSplash"></v-form>

  </div>

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
      state: "splash"
    };
  },
  components: {
    SplashScreen,
    vForm
  },

  methods: {
    formComplete(data) {
      this.$emit("complete", data);
      var self = this;
      setTimeout(function () { self.$emit("close") } , 3000);
    },
    showSplash() {
      this.state = "splash"
    },
    closemodal() {
      this.$emit("close");
      this.state = "splash";
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  top: 15px;
  right: 15px;
  font-size: 1.5em;
  position: absolute;
  z-index: 999999999;
  &:hover {
  cursor: pointer
}
}
.header {
  height: 80px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: start;
  align-items: center;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' version='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='RGBA(27, 172, 192, 1.00)' d='M0 250a250 250 0 1 1 500 0 250 250 0 0 1-500 0zm250 183V250H67a183 183 0 1 1 183 183z' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat 20px center #efefef;
  background-size: 37px;
  padding-left: 67px;

}


.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9;
}
.vue-form {
  position: relative;
  top: 90px;
  width: 90%;
  height: 85vh;
  background: white;
  display: flex;
  flex-direction: column;
  top: 10%;
  border-radius: 10px;
  transform: translateY(20px) scale(.7);
  opacity: 0;
  animation: scale 1s ease forwards;
}

@keyframes scale {
50% {
  opacity: 1;
}
  100% {
  transform: translateY(0) scale(1);
  opacity: 1;
}
}
</style>