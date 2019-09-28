<template>
  <div class="vue-form__question" :class="{ block: question.type === 'block' }">
    <span class="number" v-if="shouldShowNumber">{{ number }}</span>

   <span class="question font-display text-3xl " :class="{ big: !shouldShowNumber }">
   {{ question.question }}
    </span>

  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    question: Object,
    showNumber: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    shouldShowNumber() {
      return this.showNumber && this.number;
    }
  }
};
</script>

<style lang="scss" >

.fade-enter-active, .fade-leave-active {
  transition: all .5s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
    transform: translateY(29px);
}

.vue-form__question {
  margin-bottom: 3rem;
  margin-top: -2rem !important;
  text-align: left;
  position: relative;

  &.block {
  border-right: 1px solid rgba(0,0,0,0.1);
    margin-top: 0rem !important;
.number {

position: absolute;
left: -60px;
    margin-top: 0rem; 

}
  .question {
  font-size: 1.1rem !important;
  padding-right: 30px;
  line-height: 1.8rem !important;
  }
}

  .number {
    background: RGBA(27, 172, 192, 1.00);
    color: white;
    height: 40px;
    width: 40px !important;
    float: left;

    flex-basis: 100px;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 1rem;
    margin-left: .3rem;
    margin-top: 0.1rem;
  }

  .arrow {
    margin-right: 0.25rem;
  }

  .question {
    text-align: left !important;
    line-height: 2.4rem;

    &.big {
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      text-align: center !important;

    }
  }
}
</style>