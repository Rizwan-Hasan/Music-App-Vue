import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate';
import {
  required,
  min,
  max,
  email,
  confirmed,
  min_value as minVal,
  max_value as maxVal,
  not_one_of as excluded,
  alpha_spaces as alphaSpaces,
} from '@vee-validate/rules/';

export default {
  install(app, options) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('VeeErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
    defineRule('alpha_spaces', alphaSpaces);

    console.log('Validation plugin', options);
  },
};
