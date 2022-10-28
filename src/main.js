import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/normalize.css";
import "./assets/mixins.scss";
import "./assets/base.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//терминал


const app = createApp(App);
app.use(store).use(router).mount('#app')
//потому что provide /inject
app.config.unwrapInjectedRef = true;
