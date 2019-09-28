<template>
  <div class="vue-form__form">
  <transition name="fade" mode="in">
<div :key="question.question" v-if="!formsubmit" :class="{ block: question.type === 'block' }">
    <form-question
      :number="currentQuestionIndex + 1"
      :question="question"
      :show-number="question.type !== 'submit'"
      class='question slideup'
    ></form-question>


    <form-answer @answer="registerAnswer" :question="question" :key="question.question" @submit="submit" class='answer'></form-answer>
  </div>
  </transition>

<div class="success" v-if="formsubmit">
      <div class="checkmark svg">
        <svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 37 37" style="enable-background:new 0 0 37 37;" xml:space="preserve">
        <path class="circ path" style="fill:#10c170;stroke:RGBA(14, 176, 103, 1.00);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" d="
        M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
        <polyline class="tick path" style="fill:none;stroke:#fff;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" points="
        11.6,20 15.9,24.2 26.4,13.8 "/>
        </svg>
      </div>
      <h3 class="text-2xl mx-40 font-display">Your form has been succesfully submitted. Check your inbox for a response very soon!</h3>

</div>


<div class="loading-bar" v-if="!formsubmit">
      <div class="percentage" :style="{'width' : progress + '%'}">
      </div>

              <p class="font-body" :class="{ light: half }">Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}</p>

    </div>

  <div style="display: none">
    <div @click="previousQuestion()">Previous</div>
    <div @click="nextQuestion()">Next</div>

    {{ currentQuestionIndex }}
  </div>
  </div>
</template>

<script>
import FormQuestion from "./FormQuestion";
import FormAnswer from "./FormAnswer";

export default {
  props: {
    questions: Array,
    answers: []
  },
  data() {
    return {
      userAnswers: [],
      currentQuestionIndex: 0,
      formsubmit: false
    };
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex];
    },
    progress() {
      return (this.currentQuestionIndex+1) / (this.questions.length) * 100;
    },
    half() {
      if (this.progress > 50) {
        return true
      }
    }
  },
  components: {
    FormQuestion,
    FormAnswer,
  },
  methods: {
    submit() {
      this.$emit("complete", this.userAnswers);
      this.formsubmit = true;
    },

    changeQuestion(newQuestionIndex) {
      if (!this.questions[newQuestionIndex]) {
        this.submit();
        return;
      }

      this.currentQuestionIndex = newQuestionIndex;
    },

    previousQuestion() {
      if (this.currentQuestionIndex === 0) {
       this.$emit("splash");
      } else {
        this.currentQuestionIndex = this.currentQuestionIndex - 1;
      }
    },

    nextQuestion() {
       this.currentQuestionIndex = this.currentQuestionIndex + 1;
    },

    registerAnswer(answerData) {
      const question = answerData.question;
      const answer = answerData.answer;

      const action = answer.action || question.action;

      this.userAnswers.push({
        question: question.question,
        answer: answer.answer || answer
      });

      if (!action || action === "continue") {
        this.changeQuestion(this.currentQuestionIndex + 1);
        return;
      }

      if (action === "skip") {
        const questionIndex = this.questions.findIndex(
          q => q.id === answer.skipTo
        );
        this.changeQuestion(questionIndex);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  margin-top: -3rem;
  flex-direction: row;
display: flex;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  .question {
  width: 50%;
  float: left;
  margin-bottom: 0 !important;

}
  .answer {
   width: 50%;
  height: 100%;
}
}
.loading-bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0px auto;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  }

.loading-bar p {
color: white;
position: relative;
z-index: 999999;
font-weight: bold;
margin-top: 1.2px;
color: RGBA(0, 172, 194, 1.00);
&.light {
  color: #fff;
  text-shadow: 0 1px 0 rgba(0,0,0,.3);

}
}
  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: RGBA(27, 172, 192, 1.00);
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
      transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
      rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
    transition: width 1s ease-out;
  } 

  @keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}


@keyframes slideup {
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.success {
  position: absolute;
  top: 10%;
  left: 0;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
  animation: slideup 1s ease forwards .7s;
  transform: translateY(40px);
  opacity: 0;
  line-height: 2.1rem;
}
.checkmark {
  width: 100px;
  height: 100px;
  margin: 50px auto 20px;
    transform: translateY(140px);
 opacity: 0;
    animation: slideup .75s ease-out forwards .3s;

}
}

.circ{
    opacity: 0;
    stroke-dasharray: 130;
    stroke-dashoffset: 130;
    animation: checkmark .9s 0.3s ease-out forwards;
}
.tick{
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: tick 1s 0.8s ease-out forwards;
}

@keyframes checkmark {
    100% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}

@keyframes tick {
    100% {
        stroke-dashoffset: 0;
    }
}


.fade-leave-active {
  opacity: 0;
  transform: translateY(-129px);
  transition: all .2s;
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(229px);
  transition: all 1s;
}


@keyframes slideup {

  100% {
  opacity: 1;
  transform: translateY(0px);
}
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.vue-form__form {
  height: 80%;
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  @media (min-width: 768px) {
    width: calc((100% / 5) * 4);
  }
}
</style>
