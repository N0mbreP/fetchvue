<!-- src/views/Home.vue -->
<script setup>
import { onMounted } from 'vue'
import { useFetch } from '../composables/useFetch'
import MealCard from '../components/MealCard.vue'
import SearchBar from '../components/SearchBar.vue'

// Utilitzem el composable
const { data, loading, error, fetchData } = useFetch()

// Funció per cercar a l'API
const searchMeals = (term) => {
  const query = term || 'chicken' // Si ve buit, cerquem pollastre (o el que vulguis per defecte)
  fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
}

// Càrrega inicial (Requisit del PDF: "utilitzar onMounted")
onMounted(() => {
  searchMeals('chicken')
})
</script>

<template>
  <div>
    <SearchBar @search-meal="searchMeals" />

    <div v-if="loading">Carregant receptes...</div>
    <div v-if="error">Hi ha hagut un error: {{ error }}</div>

    <!-- Llista de resultats -->
    <div v-if="data && data.meals" class="meals-grid">
      <MealCard 
        v-for="meal in data.meals" 
        :key="meal.idMeal" 
        :meal="meal" 
      />
    </div>
    <div v-else-if="data && !data.meals">
      No s'han trobat resultats.
    </div>
  </div>
</template>

<style scoped>
.meals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>