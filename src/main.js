// main.js
import './assets/main.css'        // Tailwind u otros estilos
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importa Firebase para poder usarlo en tus componentes
import './firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
