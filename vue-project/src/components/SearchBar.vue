<!-- src/components/SearchBar.vue -->
<script setup>
import { ref } from 'vue'

const searchTerm = ref('')
const emit = defineEmits(['search-meal'])

const search = () => {
  // Emetem el valor de l'input al component pare
  emit('search-meal', searchTerm.value)
}
</script>

<template>
  <div class="search-container">
    <input 
      v-model="searchTerm" 
      type="text" 
      placeholder="Cerca una recepta..." 
      @keyup.enter="search"
    />
    <button @click="search">Buscar</button>
  </div>
</template>

<style scoped>
.search-container {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 8px 16px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>