<template>
  <div class="about">
    <!-- Header Section -->
    <div class="header-section">
      <div class="header-icon">📖</div>
      <h1 class="page-title">About This Application</h1>
      <p class="page-subtitle">Deep dive into modern Vue.js ecosystem</p>
    </div>

    <!-- Technology Cards -->
    <div class="tech-grid">
      <div class="tech-card" v-for="(tech, index) in technologies" :key="index">
        <div class="tech-header">
          <div class="tech-icon">{{ tech.icon }}</div>
          <h2 class="tech-title">{{ tech.title }}</h2>
        </div>
        <p class="tech-description">{{ tech.description }}</p>
        
        <div class="code-showcase">
          <div class="code-header">
            <span class="code-title">{{ tech.codeTitle }}</span>
            <div class="code-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
          </div>
          <pre class="code-content"><code>{{ tech.code }}</code></pre>
        </div>

        <div class="tech-features">
          <h4 class="features-title">Key Features:</h4>
          <ul class="features-list">
            <li v-for="feature in tech.features" :key="feature">
              <span class="feature-check">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Interactive Demo Section -->
    <div class="demo-section">
      <h2 class="section-title">🎮 Interactive Demo</h2>
      <p class="section-subtitle">Try these navigation examples</p>
      
      <div class="demo-cards">
        <div class="demo-card" @click="goToCounter">
          <div class="demo-icon">🔢</div>
          <h3>Counter with Parameters</h3>
          <p>Navigate to counter starting at value 10</p>
          <div class="demo-arrow">→</div>
        </div>
        
        <div class="demo-card" @click="goBack">
          <div class="demo-icon">⬅️</div>
          <h3>Go Back</h3>
          <p>Return to previous page</p>
          <div class="demo-arrow">←</div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="benefits-section">
      <h2 class="section-title">🌟 Why This Stack?</h2>
      <div class="benefits-grid">
        <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
          <div class="benefit-icon">{{ benefit.icon }}</div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Technologies data
const technologies = ref([
  {
    icon: '🚀',
    title: 'Vue Router',
    description: 'Vue Router enables Single Page Application (SPA) development with smooth navigation without page reloads.',
    codeTitle: 'Router Usage',
    code: `// Programmatic navigation
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/home')  // Navigate to home
router.go(-1)         // Go back`,
    features: ['SPA Navigation', 'Route Guards', 'Dynamic Routes', 'Query Parameters']
  },
  {
    icon: '🗂️',
    title: 'Pinia Store',
    description: 'Pinia is the modern state management solution for Vue 3, simpler and more intuitive than Vuex.',
    codeTitle: 'Store Definition',
    code: `// stores/user.js
export const useUserStore = defineStore('user', () => {
  const name = ref('John Doe')
  const email = ref('john@example.com')
  
  function updateProfile(newName, newEmail) {
    name.value = newName
    email.value = newEmail
  }
  
  return { name, email, updateProfile }
})`,
    features: ['Composition API', 'TypeScript Support', 'Devtools Integration', 'Hot Module Replacement']
  },
  {
    icon: '🔍',
    title: 'ESLint',
    description: 'ESLint helps maintain code quality by identifying and fixing problems in JavaScript/Vue code.',
    codeTitle: 'ESLint Config',
    code: `// eslint.config.js
export default defineConfig([
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'error',
      'no-unused-vars': 'warn'
    }
  }
])`,
    features: ['Code Quality', 'Error Prevention', 'Consistent Style', 'Vue-specific Rules']
  },
  {
    icon: '💅',
    title: 'Prettier',
    description: 'Prettier automatically formats code to ensure consistency across the entire codebase.',
    codeTitle: 'Prettier Config',
    code: `// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "vueIndentScriptAndStyle": true
}`,
    features: ['Auto Formatting', 'Code Consistency', 'Team Collaboration', 'Editor Integration']
  }
])

// Benefits data
const benefits = ref([
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Optimized for speed with modern build tools and reactive updates'
  },
  {
    icon: '🔧',
    title: 'Developer Experience',
    description: 'Excellent tooling with hot reload, debugging, and IDE support'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Works perfectly on all devices with modern responsive design'
  },
  {
    icon: '🌐',
    title: 'Ecosystem',
    description: 'Rich ecosystem with active community and comprehensive documentation'
  }
])

// Navigation functions
function goToCounter() {
  router.push({
    name: 'counter',
    query: { startValue: 10 }
  })
}

function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header Section */
.header-section {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  animation: float 3s ease-in-out infinite;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  letter-spacing: 0.5px;
}

/* Technology Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.tech-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.tech-card:hover::before {
  left: 100%;
}

.tech-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tech-icon {
  font-size: 2rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.tech-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
}

.tech-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

/* Code Showcase */
.code-showcase {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-title {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca3f; }

.code-content {
  padding: 1rem;
  margin: 0;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #e1e7ef;
  background: transparent;
}

/* Features */
.tech-features {
  margin-top: 1.5rem;
}

.features-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.feature-check {
  color: #10B981;
  font-weight: bold;
}

/* Demo Section */
.demo-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 300;
}

.demo-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.demo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.demo-card:hover::before {
  left: 100%;
}

.demo-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.demo-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.demo-card h3 {
  color: white;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.demo-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  font-weight: 300;
}

.demo-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.demo-card:hover .demo-arrow {
  transform: translateX(10px);
}

/* Benefits Section */
.benefits-section {
  margin-top: 4rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.benefit-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.benefit-item h3 {
  color: white;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.benefit-item p {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-cards,
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
