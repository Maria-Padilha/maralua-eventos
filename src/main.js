import { createApp } from 'vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/input.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


loadFonts()

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
AOS.init();

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
