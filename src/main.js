import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from '@/router'

//Import Tailwind
import './index.css'

createApp(App)
.use(VueRouter)
.mount('#app')
