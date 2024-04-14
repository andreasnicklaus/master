import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import "@fontsource-variable/inter";

import "@/assets/main.css"

createApp(App)
  .use(router)
  .mount('#app')
