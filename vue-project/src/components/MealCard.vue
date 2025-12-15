<!-- src/components/MealCard.vue -->
<script setup>
import { RouterLink } from 'vue-router'

// Rebem l'objecte meal complet via props com demana l'enunciat
defineProps({
  meal: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="card-body">
      <h3>{{ meal.strMeal }}</h3>
      <p>{{ meal.strArea }} - {{ meal.strCategory }}</p>
      
      <!-- Enllaç utilitzant l'estructura demanada al PDF -->
      <RouterLink 
        :to="{ name: 'Meal', params: { idMeal: meal.idMeal } }"
        class="btn-link"
      >
        Recepta
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  padding: 15px;
}
.btn-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #6a1b9a;
  font-weight: bold;
}
</style>