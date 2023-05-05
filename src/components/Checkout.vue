<template>
    <div class="wrapper">
      <div class="sample">
        <div v-if="!formSub">
          <transition name="form">
            <form @submit.prevent="formSub = true">
              <div class="progress">
                <div class="progress-bar" :style="progressWidth"></div>
              </div>
              <div>
                <div class="form-group" v-for="(item, index) in info" :key="index">
                    <label>{{item.name}}</label>
					
					<span class="fa"
      v-if="controls[index].activated" 
      :class="controls[index].error ? 'fa-times-circle text-danger' : 'fa-check-circle text-success'"
></span>
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
          </transition>
        </div>
        <form v-else @submit.prevent="submitForm">
          <transition name="table">
            <table class="table table-bordered">
              <tr v-for="(item, index) in info" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </table>
          </transition>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
    import AppInput from './Inputs';
  
    export default {
  data() {
    return {
        info: [
					{
						name: 'Name',
						value: '',
						pattern: /^[a-zA-Z ]{2,30}$/,
						errorMessage: 'Имя должно содержать только буквы и пробелы, длиной от 2 до 30 символов'
					},
					{
						name: 'Phone',
						value: '',
						pattern: /^[0-9]{7,14}$/,
						errorMessage: 'Некорректный формат телефона'
					},
					{
						name: 'Email',
						value: '',
						pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
						errorMessage: 'Некорректный формат email'
					},
					{
						name: 'Some Field 1',
						value: '',
						pattern: /.+/,
						
					},
					{
						name: 'Some Field 2',
						value: '',
						pattern: /.+/,
						
					}
				],
                controls: [],
				formSub: false
    };
    
  },
  beforeMount(){
		for(let i = 0; i < this.info.length; i++){
			this.controls.push({
				error: true,
				activated : this.info[i].value != ''
			});
		}
 },
 
 methods:{


// 	collectFormData() {
//     const formData = {};
//     for (let i = 0; i < this.info.length; i++) {
//       formData[this.info[i].name] = this.info[i].value;
//     }
//     return formData;
//   },
//   ...mapActions(['sendFormData']),
//   submitForm() {
//     const formData = this.collectFormData();
//     this.sendFormData(formData);
//     setTimeout(() => {
//       this.formSub = false;
//       this.$router.push('/success');
//     }, 2000);
//   },
				onInput(index, value){
					
					let data = this.info[index];
					let control = this.controls[index];

					data.value = value;
	control.error = !data.pattern.test(value);
	control.activated = true
				// console.log(this.controls)
				},
				onFocus(index) {
        let control = this.controls[index];
        control.touched = true;
    }
			
			},
            computed:{

done(){
        let done = 0;
        for(let i= 0; i < this.controls.length; i++){
            if(!this.controls[i].error){
                done++;
            }

        }
            return done;
    },
    progressWidth(){
return{
    width: ((this.done / this.info.length) * 100 )+ '%',
    // color:  'blue'
}
}

},

      components: {
        AppInput
      }
    }
  </script>
  
  <style scoped>
    .wrapper {
      max-width: 600px;
      margin: 20px auto;
    }
  </style>
  