import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.provide('BASE_URL', 'http://localhost:3000/api')

app.mount('#app')

