import i18n from './i18n'
import 'bootstrap/dist/css/bootstrap.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"
