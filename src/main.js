import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VeeValidatePlugin from './plugins/validation';
import './plugins/firebase';

import './assets/base.css';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin, { hello: 'world' });

app.mount('#app');
