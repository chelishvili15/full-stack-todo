import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

app.provide('BASE_URL', 'http://localhost:3000/api')
app.use(autoAnimatePlugin)

app.mount('#app')

