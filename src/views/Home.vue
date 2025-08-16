<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-icon">
          <div class="floating-icon">🚀</div>
        </div>
        <h1 class="hero-title">Welcome to Vue Learning</h1>
        <p class="hero-subtitle">Aplikasi modern dengan fitur lanjutan Vue.js</p>
        <div class="hero-badges">
          <span class="badge">Modern</span>
          <span class="badge">Responsive</span>
          <span class="badge">Liquid Glass</span>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-grid">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
        <div class="feature-status">
          <span class="status-indicator"></span>
          <span class="status-text">Active</span>
        </div>
      </div>
    </div>

    <!-- Navigation Demo Section -->
    <div class="navigation-section">
      <h2 class="section-title">🧭 Explore Features</h2>
      <div class="nav-cards">
        <router-link to="/about" class="nav-card">
          <div class="nav-card-icon">📖</div>
          <h3>About</h3>
          <p>Learn about the technologies</p>
          <div class="nav-card-arrow">→</div>
        </router-link>
        
        <router-link to="/counter" class="nav-card">
          <div class="nav-card-icon">🔢</div>
          <h3>Counter Demo</h3>
          <p>See Pinia state management</p>
          <div class="nav-card-arrow">→</div>
        </router-link>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">4</div>
        <div class="stat-label">Core Features</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">Modern Design</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">∞</div>
        <div class="stat-label">Possibilities</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Features data
const features = ref([
  {
    icon: '🛣️',
    title: 'Vue Router',
    description: 'Single Page Application routing with smooth navigation'
  },
  {
    icon: '🗂️',
    title: 'Pinia Store',
    description: 'Modern state management for Vue 3 applications'
  },
  {
    icon: '🔍',
    title: 'ESLint',
    description: 'Code quality and error prevention tools'
  },
  {
    icon: '💅',
    title: 'Prettier',
    description: 'Automatic code formatting for consistency'
  }
])
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
  position: relative;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-icon {
  margin-bottom: 2rem;
}

.floating-icon {
  font-size: 4rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.feature-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.feature-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.status-text {
  color: #10B981;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Navigation Section */
.navigation-section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.nav-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: block;
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.7s ease;
}

.nav-card:hover::before {
  left: 100%;
}

.nav-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.nav-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.nav-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.nav-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  font-weight: 300;
}

.nav-card-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.nav-card:hover .nav-card-arrow {
  transform: translateX(10px);
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .features-grid,
  .nav-cards,
  .stats-section {
    grid-template-columns: 1fr;
  }
}
</style>
