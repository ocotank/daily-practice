import "./style.css";
import 'modern-normalize/modern-normalize.css';
import { createApp } from 'vue'
import App from './App.vue';
import router from './router/index';

const app = createApp(App);
app.use(router);
app.mount('#app');