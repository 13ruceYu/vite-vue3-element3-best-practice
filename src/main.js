import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import element3 from './plugins/element3';

import './styles/index.scss'


const app = createApp(App);
app.use(router)
app.use(store)
app.use(element3)
app.mount('#app')
