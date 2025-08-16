// File ini sengaja dibuat dengan formatting yang buruk
// untuk mendemonstrasikan ESLint dan Prettier

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const items = ref([])
  const count = ref(0)

  // Getter dengan formatting buruk
  const totalItems = computed(() => {
    return items.value.length
  })

  const isEmpty = computed(() => {
    return totalItems.value === 0
  })

  // Action dengan berbagai masalah formatting
  function addItem(item) {
    if (!item) {
      return false
    }
    items.value.push(item)
    count.value++
    return true
  }

  function removeItem(index) {
    if (index >= 0 && index < items.value.length) {
      items.value.splice(index, 1)
      count.value--
    }
  }

  function clearItems() {
    items.value = []
    count.value = 0
  }

  // Return dengan formatting buruk
  return { items, count, totalItems, isEmpty, addItem, removeItem, clearItems }
})

// Komentar tanpa spasi
//TODO: Fix formatting issues
/* Block comment without proper spacing*/
