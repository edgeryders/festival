<template>
  <div class="input">
  <input
  v-if="type !== 'block'"
      :type="type"
      :value="value"
      class="vue-form__input font-display"
      placeholder="Type your answer here..."
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
  width: 500px;
  float: left;
}
textarea {
  align-self: flex-start;
  background: #fafafafa;
  padding: 15px;
  width: 95%;
  margin-left: 5%;
}
  .vue-form__input {

    color: RGBA(27, 172, 192, 1.00);

    font-size: 2rem;
    padding: 0 0 8px;
    background: none;
    border: none;

    -webkit-appearance: none;
    border-bottom: 1px solid RGBA(27, 172, 192, 1.00);

    &::placeholder {
      color: RGBA(27, 172, 192, 1.00);
    }

    &:focus {
      outline: none;
    }
  }
</style>
