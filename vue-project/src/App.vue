<script setup>
import {ref} from "vue";
import {useFetch} from "@/composables/useFetch";
const cerca=ref('chicken');
const url= ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`);
const {data, error, loading, fetchData}= useFetch(url);
console.log(data.value);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <div v-if="data && data.meals">{{data.meals}}</div>
  </div>
</template>
