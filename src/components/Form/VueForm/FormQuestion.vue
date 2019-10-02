<template>
  <div class="vue-form__question px-6" :class="{ block: question.type === 'block' }">
    <span class="number hidden flex" v-if="shouldShowNumber">{{ number }}</span>

   <span class="question font-display text-3xl" :class="{ big: !shouldShowNumber }">
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

<style lang="scss" scoped>


.vue-form__question {
  &.block {
    padding: 0 2rem 0 0 !important;

  .question {
  font-size: 1.1rem !important;
  line-height: 1.2rem !important;
  }
}
}

.vue-form__question {
  margin-bottom: 3rem;
  margin-top: -2rem !important;
  text-align: left;
  position: relative;



  .number {
    border: 1px solid RGBA(0,0,0,0.1);
    color: RGBA(0,0,0,0.8);
    background: RGBA(0,0,0,0.04);
    height: 40px;
    width: 40px !important;
    float: left;

    flex-basis: 100px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 1rem;
    margin-left: .5rem;
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

@media (min-width: 640px) {
.vue-form__question {
  &.block {
  border-right: 1px solid rgba(0,0,0,0.1);
    margin-top: 0rem !important;
       margin-left: 1rem !important;
.number {
display: none;
}
  .question {
  font-size: 1.1rem !important;
  padding-right: 30px;
  padding-top: 0;
  line-height: 1.8rem !important;
  }
}
}
}
</style>