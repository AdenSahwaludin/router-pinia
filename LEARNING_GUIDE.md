# 🚀 Vue.js Learning App - Panduan Lengkap

Selamat datang di aplikasi pembelajaran Vue.js dengan fitur-fitur lanjutan! Aplikasi ini dibuat untuk membantu Anda memahami konsep-konsep penting dalam ekosistem Vue.js modern.

## 📚 Fitur yang Dipelajari

### 1. 🛣️ Vue Router (Navigasi)

Vue Router memungkinkan kita membuat Single Page Application (SPA) dengan navigasi yang mulus.

#### Konsep Penting:

- **Routing**: Menentukan komponen mana yang ditampilkan berdasarkan URL
- **Navigation Guards**: Mengontrol akses ke route tertentu
- **Query Parameters**: Mengirim data melalui URL
- **Programmatic Navigation**: Navigasi menggunakan JavaScript

#### Contoh Implementasi:

```javascript
// router/index.js
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home Page' },
  },
  {
    path: '/counter/:id?',
    name: 'counter',
    component: Counter,
    props: true,
  },
]

// Navigasi programatik
import { useRouter } from 'vue-router'
const router = useRouter()

// Pindah ke halaman lain
router.push('/about')
router.push({ name: 'counter', query: { startValue: 10 } })

// Kembali ke halaman sebelumnya
router.go(-1)
```

### 2. 🗂️ Pinia (State Management)

Pinia adalah state management modern untuk Vue 3 yang menggantikan Vuex.

#### Konsep Penting:

- **State**: Data yang dibagi antar komponen
- **Getters**: Computed properties untuk state
- **Actions**: Functions untuk mengubah state
- **Store Composition**: Menggunakan Composition API

#### Contoh Store:

```javascript
// stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getters
  const doubleCount = computed(() => count.value * 2)

  // Actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// Menggunakan dalam komponen
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore
```

### 3. 🔍 ESLint (Error Prevention)

ESLint membantu menemukan dan memperbaiki masalah dalam kode JavaScript/Vue.

#### Fitur:

- **Syntax Error Detection**: Mendeteksi kesalahan sintaks
- **Code Quality Rules**: Aturan untuk kualitas kode
- **Vue-specific Rules**: Aturan khusus untuk Vue.js
- **Auto-fix**: Perbaikan otomatis untuk beberapa masalah

#### Commands:

```bash
# Cek semua file dan perbaiki yang bisa diperbaiki
npm run lint

# Cek tanpa auto-fix
npx eslint . --ext .js,.vue
```

### 4. 💅 Prettier (Code Formatting)

Prettier secara otomatis memformat kode agar konsisten.

#### Konfigurasi (.prettierrc):

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "vueIndentScriptAndStyle": true
}
```

#### Commands:

```bash
# Format semua file di src/
npm run format

# Format file tertentu
npx prettier --write src/App.vue
```

## 🎯 Struktur Project

```
frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/          # Komponen reusable
│   │   └── BaseButton.vue
│   ├── stores/              # Pinia stores
│   │   ├── counter.js
│   │   └── user.js
│   ├── views/               # Halaman-halaman
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Counter.vue
│   ├── router/
│   │   └── index.js         # Konfigurasi routing
│   ├── App.vue              # Root component
│   └── main.js              # Entry point
├── eslint.config.js         # Konfigurasi ESLint
├── .prettierrc             # Konfigurasi Prettier
├── package.json
└── vite.config.js
```

## 🛠️ Best Practices

### 1. Vue Router

- Gunakan `name` untuk route agar mudah di-maintain
- Manfaatkan `meta` fields untuk metadata route
- Gunakan navigation guards untuk proteksi route
- Pisahkan route berdasarkan fitur

### 2. Pinia

- Buat store terpisah untuk setiap domain logic
- Gunakan `storeToRefs()` untuk reactive destructuring
- Buat actions untuk semua mutations
- Manfaatkan computed properties untuk derived state

### 3. Component Architecture

- Buat komponen reusable dengan props dan events
- Gunakan `defineProps()` dan `defineEmits()` untuk type safety
- Implementasikan proper validation untuk props
- Pisahkan logic dan presentation

### 4. Code Quality

- Jalankan `npm run lint` sebelum commit
- Jalankan `npm run format` untuk formatting
- Gunakan TypeScript untuk project yang lebih besar
- Implementasikan unit testing

## 🎨 Styling Best Practices

### 1. CSS Organization

- Gunakan scoped styles untuk komponen
- Buat utility classes untuk styling umum
- Manfaatkan CSS custom properties untuk theming
- Implementasikan responsive design

### 2. Component Styling

```vue
<style scoped>
  /* Component-specific styles */
  .component-class {
    /* styles */
  }
</style>

<style>
  /* Global styles */
  .utility-class {
    /* styles */
  }
</style>
```

## 🔧 Development Workflow

### 1. Setup Baru

```bash
npm create vue@latest my-project
cd my-project
npm install
npm run dev
```

### 2. Daily Development

```bash
# Start development
npm run dev

# Format code
npm run format

# Check for errors
npm run lint

# Build for production
npm run build
```

### 3. Git Workflow

```bash
# Format dan lint sebelum commit
npm run format
npm run lint

git add .
git commit -m "feat: add new feature"
git push
```

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/` dan siap untuk di-deploy ke server.

## 📖 Resources untuk Belajar Lebih Lanjut

1. **Vue.js Official Documentation**: https://vuejs.org/
2. **Vue Router Documentation**: https://router.vuejs.org/
3. **Pinia Documentation**: https://pinia.vuejs.org/
4. **ESLint Documentation**: https://eslint.org/
5. **Prettier Documentation**: https://prettier.io/

## ✨ Tips untuk Pemula

1. **Mulai dari yang sederhana**: Pahami dulu Vue basics sebelum ke fitur lanjutan
2. **Practice by building**: Buat project kecil untuk praktik
3. **Read the docs**: Dokumentasi Vue sangat lengkap dan mudah dipahami
4. **Join community**: Bergabung dengan Discord/Forum Vue.js
5. **Learn incrementally**: Tidak perlu belajar semua sekaligus

Selamat belajar! 🎉
