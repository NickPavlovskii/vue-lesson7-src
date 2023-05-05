<template>
    <div>
        
      <input
        :type="type"
        :class="{'form-control': true, 'is-invalid': error && touched}"
        :value="value"
        @input="onInput"
        @focus="onFocus"
      />
      <span class="invalid-feedback" v-if="error && touched">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['value', 'type', 'pattern', 'errorMessage'],
    data() {
      return {
        error: false,
        touched: false,
      };
    },
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value);
        this.error = !this.pattern.test(event.target.value);
      },
      onFocus() {
        this.touched = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .invalid-feedback {
    color: red;
  }
  </style>