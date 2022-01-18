import { createRouter, createWebHistory } from 'vue-router'

//Import components
import Home from '@/views/Home.vue'

//Create routes path
const routes = [
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
  
//Create vue-router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Export
export default router