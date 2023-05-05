<template>
   <form @submit.prevent="formSub = true">
              <div class="progress">
                <div class="progress-bar" :style="progressWidth"></div>
              </div>
              <div>
                <div class="form-group" v-for="(item, index) in info" :key="index">
                    <label>{{item.name}}</label>
						
                
                    <app-input
                  :type="'text'"
                  :value="item.value"
                  :error="controls[index].error"
                  :touched="controls[index].touched"
                  :error-message="item.errorMessage"
                  @input="onInput(index, $event)"
                  @focus="onFocus(index)"
                ></app-input>
                <span class="error-message" v-if="controls[index].error && controls[index].touched">{{item.errorMessage}}</span>
                </div>
              </div>
              <button class="btn btn-primary" :disabled="done !== info.length">Send Data</button>
              <span class="success" v-if="done === info.length">Вы успешно зарегистрировались!</span>
            </form>
  </template>
  
  <script>
  export default {
    methods: {
      onSubmit() {
        this.$emit("submit");
      },
    },
  };
  </script>
  