<template>
  <div class="vue-form__answer m-auto">
    <!-- Single selection buttons -->
    <answer-button
        v-for="answer in question.answers"
        :key="answer.answer"
        :keyboard="answer.key || null"
        :selected="currentAnswer && answer.answer === currentAnswer.answer"
        @click="selectAnswer(answer)"
    >{{ answer.answer }}
    </answer-button>

    <!-- Open single line text -->
    <answer-input
        v-if="question.type === 'text'"
        type="text"
        @input="selectAnswer"
        :value="currentAnswer"
    ></answer-input>
    <answer-input
        v-if="question.type === 'email'"
        type="email"
        @input="selectAnswer"
        :value="currentAnswer"
    ></answer-input>
    <answer-input
        v-if="question.type === 'block'"
        type="block"
        @input="selectAnswer"
        :value="currentAnswer"
    ></answer-input>

<div  v-if="!showSubmitButton" class="flex justify-center items-center h-12 mt-4 ml-2 md:mt-10 bg-gray w-auto" :class="{ block: question.type === 'block' }">
     <button class="text-white bg-primary border border-primary text-xm font-semibold rounded-lg px-4 py-3 md:ml-2 float-left leading-normal inline-block"  @click="answer">Next</button>

     <p class="float-left inline-block ml-4 hidden md:block enter">or press enter</p>
   </div>

    <button class="text-white bg-primary border border-primary text-xl font-semibold rounded-lg mt-0 md:mt-0 px-4 py-3 mx-auto leading-normal" @click="submit" v-if="showSubmitButton">Submit</button>

 

  </div>
</template>

<script>
  import AnswerButton from "./FormAnswerButton";
  import AnswerInput from "./FormAnswerInput";
  import FormButton from "./FormButton";

  export default {
    data() {
      return {
        currentAnswer: null // Answer obj
      };
    },
    props: {
      question: Object
    },
    components: {
      AnswerButton,
      AnswerInput,
      FormButton
    },
    computed: {
      showOKButton() {
        if (!this.currentAnswer) return false;

        if (this.question.type === "single") {
          return this.question.answers && this.question.answers.length > 0;
        }

        if (this.question.type === "text" && this.question.minLength) {
          return this.currentAnswer.length >= this.question.minLength;
        }

        if (this.question.type === "email") {
          // eslint-disable-next-line
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              this.currentAnswer
          );
        }

        return true;
      },

      showSubmitButton() {
        return this.question.type === "submit";
      }
    },
    methods: {
      answer() {
        this.$emit("answer", {
          question: this.question,
          answer: this.currentAnswer
        });

        this.currentAnswer = null;
      },

      submit() {
        this.$emit('submit');
      },

      selectAnswer(answer) {
        this.currentAnswer = answer;
      },

      enterListener(e) {
        // Enter key === 13
        if (e.which !== 13) return;

        if (this.showOKButton) {
          this.answer();
        }

        if (this.showSubmitButton) {
          this.submit();
        }
      }
    },
    created() {
      window.addEventListener('keyup', this.enterListener);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.enterListener);
    }
  };
</script>

<style lang="scss" scoped>

.vue-form__answer {
  width: 100% !important; 
  padding: 0 13px 0;
}
.block {
  margin: 1rem 0 0 0rem;
  position: relative;
  width: 100% !important;
}

.enter {
  padding-right: 2rem;
  font-style: italic;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='RGBA(0, 0, 0, 0.3)' d='M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM64.6 7.8H22.9a7.5 7.5 0 100 15h41.7a17.8 17.8 0 010 35.6H52.1L56.2 46a4.7 4.7 0 00-6.5-5.7L5.2 61.8a4.8 4.8 0 000 8.5l44.5 21.5a4.7 4.7 0 006.5-5.7l-4.1-12.4h12.6a33 33 0 00-.1-65.9z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat 90% 95%;
  background-size: .8rem;
}

  .vue-form__answer {
    display: flex;
    flex-direction: column;
    align-items: start;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    input {
    width: 100% !important
  }



    .action-button {
      margin-top: 2rem;

    }
  }
</style>
