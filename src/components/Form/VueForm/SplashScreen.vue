<template>
  <div class="vue-form__splash md:flex flex-col md:justify-center">
    <div
      class="call_to_action text-left h-auto px-8 pt-4 md:pt-8 md:px-0 md:m-auto md:pt-20 md:w-3/4"
      v-html="callToAction"
    ></div>
    <div class="mt-4 flex justify-center m-auto md:mt-8">
      <button
        class="continue text-white bg-primary border border-primary text-xm font-semibold rounded-full px-4 py-3 mr-4 leading-normal"
        @click="emitContinue"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
import FormButton from "./FormButton";
export default {
  props: {
    callToAction: String,
    button: String
  },
  components: {
    FormButton
  },
  methods: {
    emitContinue() {
      this.$emit("continue");
    }
  },
  created() {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
.continue {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%23fff' d='M50 2.5a47.5 47.5 0 1 0 0 95 47.5 47.5 0 0 0 0-95zm0 86.1a38.6 38.6 0 1 1 0-77.2 38.6 38.6 0 0 1 0 77.2z'/%3E%3Cpath fill='%23fff' d='M48 28.5a4.5 4.5 0 0 0-6.3 0 4.5 4.5 0 0 0 0 6.3L56.9 50 41.7 65.2a4.5 4.5 0 0 0 0 6.3c.9.9 2 1.3 3.2 1.3 1.1 0 2.3-.4 3.2-1.3l18.4-18.4c.8-.8 1.3-2 1.3-3.2 0-1.2-.5-2.3-1.3-3.2L48 28.5z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E")
    no-repeat 86% 15px RGBA(27, 172, 192, 1);
  background-size: 19px;
  padding-right: 40px;
}
.vue-form__splash {
  height: 88%;
  position: relative;
  display: inline;
  text-align: left !important;
  p {
    text-align: left !important;
  }
}
.call_to_action /deep/ {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.7rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: center;
    &.highlight {
      background: RGBA(27, 172, 192, 1);
      color: white;
      display: inline;
      display: inline-flex;
      align-self: center;
      width: auto;
      padding: 14px 20px;
      margin: 20px auto 0 !important;
      text-align: center;
    }
  }
}

@media (min-width: 640px) {
  .call_to_action /deep/ {
    h1 {
      font-size: 2rem;
      text-align: left;
    }
    p {
      font-size: 1.4rem;
      margin-top: 2rem;
      &.highlight {
        margin: 30px auto 0 !important;
      }
    }
  }
}
</style>