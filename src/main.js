import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/normalize.css";
import "./assets/mixins.scss";
import "./assets/base.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//терминал

createApp(App).use(store).use(router).mount('#app')
