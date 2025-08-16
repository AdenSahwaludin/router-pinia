# 🔧 Demo ESLint dan Prettier

## Sebelum Prettier:

```javascript
// Formatting yang buruk
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const items = ref([])
  const count = ref(0)

  const totalItems = computed(() => {
    return items.value.length
  })

  function addItem(item) {
    if (!item) {
      return false
    }
    items.value.push(item)
    count.value++
    return true
  }

  return { items, count, totalItems, addItem }
})
```

## Sesudah Prettier:

```javascript
// Formatting yang rapi
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const items = ref([])
  const count = ref(0)

  const totalItems = computed(() => {
    return items.value.length
  })

  function addItem(item) {
    if (!item) {
      return false
    }
    items.value.push(item)
    count.value++
    return true
  }

  return { items, count, totalItems, addItem }
})
```

## ESLint Error yang Ditemukan:

1. **vue/multi-word-component-names**:
   - Component names should be multi-word to avoid conflicts with HTML elements
   - Contoh: `Home.vue` → `HomeView.vue` atau `HomePage.vue`

2. **Consistent spacing**: ESLint memastikan spacing yang konsisten
3. **Semicolon usage**: Mengikuti aturan yang didefinisikan
4. **Import formatting**: Memastikan import statement formatted dengan benar

## Commands yang Berguna:

```bash
# Check for lint errors
npm run lint

# Format code with Prettier
npm run format

# Fix both linting and formatting
npm run lint && npm run format
```

## Tips:

- Setup VS Code extensions untuk ESLint dan Prettier
- Configure format on save
- Jalankan lint checks sebagai bagian dari CI/CD pipeline
