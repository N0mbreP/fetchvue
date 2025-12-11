<script setup>
import {ref} from "vue";
import {useFetch} from "@/composables/useFetch";
const cerca=ref('Breakfast');
const url= ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`);
const {data, error, loading, fetchData}= useFetch(url);
console.log(data.value);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <!--<div v-if="data && data.meals">{{data.meals}}</div>-->
    <div v-if="data && data.meals">
      <div v-for="meal in data.meals" :key="meal.idMeal">
        <h2>{{ meal.strMeal }}</h2>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" width="200" />
        <p>{{ meal.strCategory }} - {{ meal.strArea }}</p>
        <p>{{ meal.strInstructions }}</p> 
        </div>
        </div>
  </div>
</template>
