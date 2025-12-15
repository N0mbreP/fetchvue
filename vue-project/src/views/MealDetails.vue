<!-- src/views/MealDetail.vue -->
<script setup>
import { onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '../composables/useFetch'

const route = useRoute()
// Usamos el composable
const { data, loading, fetchData } = useFetch()

// Función para obtener el detalle
const getMealDetail = (id) => {
  fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
}

// Carga inicial
onMounted(() => {
  getMealDetail(route.params.idMeal)
})

// Watch para detectar cambios en la URL (si cambiamos de plato)
watch(
  () => route.params.idMeal,
  (newId) => {
    if (newId) {
      getMealDetail(newId)
    }
  }
)

// Helper para acceder fácilmente al objeto meal
const meal = computed(() => {
  return data.value && data.value.meals ? data.value.meals[0] : null
})

// Helper para combinar Ingredients y Medidas
const ingredients = computed(() => {
  if (!meal.value) return []
  const list = []
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`]
    const measure = meal.value[`strMeasure${i}`]
    
    if (ingredient && ingredient.trim() !== '') {
      list.push({
        name: ingredient,
        measure: measure
      })
    }
  }
  return list
})
</script>

<template>
  <div v-if="loading">Carregant detall...</div>
  
  <div v-if="meal" class="detail-container">
    <h2>{{ meal.strMeal }}</h2>
    
    <div class="content">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="detail-img"/>
      
      <div class="info">
        <h3>Instruccions</h3>
        <p class="instructions">{{ meal.strInstructions }}</p>
        
        <h3>Ingredients</h3>
        <ul>
          <li v-for="(item, index) in ingredients" :key="index">
            {{ item.name }} - {{ item.measure }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container { margin-top: 20px; }
.content { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 768px) { .content { grid-template-columns: 1fr 2fr; } }
.detail-img { width: 100%; border-radius: 8px; }
.instructions { white-space: pre-line; line-height: 1.6; }
</style>