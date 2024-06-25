import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

import 'quasar/dist/quasar.css'

createApp(App).mount('#app')

export default {
    server: {
      host: '127.0.0.1',
    },
  };
  const app = createApp(App)

  app.use(createPinia())
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  app.use(router)
  
  app.mount('#app')