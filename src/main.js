import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dialog from './UI/Dialog.vue'
import Spinner from './UI/Spinner.vue'

createApp(App).use(store).use(router).component('base-dialog',Dialog).component('Spinner',Spinner).mount('#app')
