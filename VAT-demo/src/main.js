import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'

document.documentElement.setAttribute('data-theme', 'dark');

createApp(App).use(router).mount('#app')
