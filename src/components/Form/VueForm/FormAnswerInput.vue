<template>
  <div class="input">
  <input
  v-if="type !== 'block'"
      :type="type"
      :value="value"
      class="vue-form__input font-display text-xl md:text-4xl"
      placeholder="Enter your answer here..."
      @input="e => $emit('input', e.target.value)"
      ref="field"
  >
  <textarea v-else :value="value" class="font-display" rows="10" cols="50" placeholder="Type your answer here..." @input="e => $emit('input', e.target.value)" ref="field">
    
</textarea>
</div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "text"
      },
      value: String
    },
    watch: {
      value() {
        this.focusInput();
      }
    },
    methods: {
      focusInput() {
        this.$refs.field.focus();
      }
    },
    mounted() {
      this.focusInput();
    }
  };
</script>

<style lang="scss" scoped>
.input {
  height: 100%;
  width: 90%;
  margin-left: .7rem;
  float: left;
}
textarea {
  align-self: flex-start;
  background: #fafafafa;
  padding: 15px;
  width: 100%;
  height: 100px;
     border-radius: 10px;
  border: 2px solid #ddd;
margin-top: 1rem;
  &:focus {
   outline: none;
  border: 2px solid RGBA(27, 172, 192, 1.00);
}
}
  .vue-form__input {

    color: RGBA(27, 172, 192, 1.00);

    padding: 0 0 8px;
    background: none;
    border: none;
    width: 100%;

    -webkit-appearance: none;
    border-bottom: 1px solid RGBA(27, 172, 192, 1.00);

    &::placeholder {
      color: RGBA(27, 172, 192, 1.00);
    }

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 640px) {
  .input {
margin-left: 1rem;
}
textarea {
margin-left: 5%;
height: auto;
margin-top: 2%;
}
}
</style>
