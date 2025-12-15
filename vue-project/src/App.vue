<!-- src/App.vue -->
<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style>
/* Estils globals bàsics */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  color: #2c3e50;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>