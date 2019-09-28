<template>
  <div class="vue-form__answer">
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

     <button v-if="!showSubmitButton" class="text-white bg-primary border border-primary text-xm font-semibold rounded-lg px-4 py-3 mt-10 mr-4 leading-normal"  :class="{ block: question.type === 'block' }" @click="answer">Next</button>

    <button class="text-white bg-primary border border-primary text-xm font-semibold rounded-lg px-4 py-3 mx-auto leading-normal" @click="submit" v-if="showSubmitButton">Submit</button>

 

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
button.block {
  margin: 0 0 0 2rem;
  position: relative;
  top: 20px;
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
