// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// --- CORRECCIÓN AQUÍ ---
// Usamos '../' para salir de la carpeta router e ir a src
import Home from '../views/Home.vue'
import MealDetail from '../views/MealDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meal/:idMeal',
      name: 'Meal',
      component: MealDetail,
      props: true
    }
  ]
})

export default router