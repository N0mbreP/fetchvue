// src/composables/useFetch.js
import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async (url) => {
    loading.value = true
    data.value = null
    error.value = null

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Error en la xarxa')
      }
      const json = await response.json()
      data.value = json
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  }
}