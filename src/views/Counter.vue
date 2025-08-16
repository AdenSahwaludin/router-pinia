<template>
  <div class="counter-page">
    <!-- Header Section -->
    <div class="header-section">
      <div class="header-icon">🔢</div>
      <h1 class="page-title">Interactive Counter</h1>
      <p class="page-subtitle">Experience Pinia state management in action</p>
    </div>

    <!-- Main Counter Display -->
    <div class="counter-section">
      <div class="counter-display">
        <div class="counter-visual">
          <div class="count-container">
            <span class="count">{{ count }}</span>
            <div class="count-animations">
              <div class="count-ring"></div>
              <div class="count-pulse"></div>
            </div>
          </div>
          <div class="counter-details">
            <div class="detail-item">
              <span class="detail-label">Double</span>
              <span class="detail-value">{{ doubleCount }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Triple</span>
              <span class="detail-value">{{ tripleCount }}</span>
            </div>
          </div>
        </div>

        <div class="counter-controls">
          <BaseButton 
            @click="decrementBy(10)" 
            :disabled="!canDecrement"
            variant="danger"
            size="small"
          >
            -10
          </BaseButton>
          
          <BaseButton 
            @click="decrementBy(5)" 
            :disabled="!canDecrement"
            variant="warning"
            size="small"
          >
            -5
          </BaseButton>
          
          <BaseButton 
            @click="decrement" 
            :disabled="!canDecrement"
            variant="secondary"
          >
            -1
          </BaseButton>
          
          <BaseButton 
            @click="increment" 
            :disabled="!canIncrement"
            variant="primary"
          >
            +1
          </BaseButton>
          
          <BaseButton 
            @click="incrementBy(5)" 
            :disabled="!canIncrement"
            variant="success"
            size="small"
          >
            +5
          </BaseButton>
          
          <BaseButton 
            @click="incrementBy(10)" 
            :disabled="!canIncrement"
            variant="success"
            size="small"
          >
            +10
          </BaseButton>
        </div>

        <div class="counter-info">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Range</span>
              <span class="info-value">{{ minValue }} to {{ maxValue }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Status</span>
              <span class="info-value" :class="statusClass">{{ statusText }}</span>
            </div>
          </div>
        </div>

        <div class="reset-section">
          <BaseButton 
            @click="reset" 
            variant="danger"
            outline
          >
            🔄 Reset Counter
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- User Profile Section -->
    <div class="user-section">
      <h2 class="section-title">👤 User Profile Store</h2>
      
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-avatar">
            {{ userStore.displayName.charAt(0) }}
          </div>
          <div class="profile-info">
            <h3 class="profile-name">{{ userStore.name }}</h3>
            <p class="profile-email">{{ userStore.email }}</p>
          </div>
          <div class="profile-status">
            <span class="status-dot" :class="{ 'online': userStore.isLoggedIn }"></span>
            <span class="status-text">{{ userStore.isLoggedIn ? 'Online' : 'Offline' }}</span>
          </div>
        </div>

        <div class="profile-stats">
          <div class="stat-card">
            <div class="stat-icon">🔑</div>
            <div class="stat-content">
              <span class="stat-number">{{ userStore.loginCount }}</span>
              <span class="stat-label">Login Count</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">👋</div>
            <div class="stat-content">
              <span class="stat-number">{{ userStore.displayName }}</span>
              <span class="stat-label">Display Name</span>
            </div>
          </div>
        </div>

        <div class="profile-summary">
          <h4>Profile Summary</h4>
          <p>{{ userStore.userSummary }}</p>
        </div>

        <div class="profile-controls">
          <BaseButton @click="updateProfile" variant="primary">
            🔄 Update Profile
          </BaseButton>
          
          <BaseButton 
            @click="userStore.login()" 
            variant="success"
            :disabled="userStore.isLoggedIn"
          >
            🚪 Login
          </BaseButton>
          
          <BaseButton 
            @click="userStore.logout()" 
            variant="secondary"
            :disabled="!userStore.isLoggedIn"
          >
            🚪 Logout
          </BaseButton>
          
          <BaseButton 
            @click="userStore.resetUser()" 
            variant="danger"
            outline
          >
            ♻️ Reset User
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <div class="history-section" v-if="history.length > 0">
      <h2 class="section-title">📝 Action History</h2>
      
      <div class="history-container">
        <div class="history-list">
          <div 
            v-for="(action, index) in history" 
            :key="index" 
            class="history-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="history-icon">⚡</div>
            <span class="history-text">{{ action }}</span>
          </div>
        </div>
        
        <div class="history-controls">
          <BaseButton @click="counterStore.clearHistory()" variant="danger" size="small" outline>
            🗑️ Clear History
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Query Parameter Demo -->
    <div class="query-demo" v-if="startValue">
      <div class="query-icon">📍</div>
      <h3>Query Parameter Demo</h3>
      <p>Counter started from value: <strong>{{ startValue }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import BaseButton from '@/components/BaseButton.vue'

// Menggunakan stores
const counterStore = useCounterStore()
const userStore = useUserStore()
const route = useRoute()

// Destructuring store values dengan storeToRefs untuk reactivity
const { 
  count, 
  doubleCount, 
  tripleCount, 
  history, 
  minValue, 
  maxValue, 
  isAtMax, 
  isAtMin, 
  canIncrement, 
  canDecrement 
} = storeToRefs(counterStore)

// Destructuring store actions (tidak perlu storeToRefs untuk functions)
const { increment, decrement, incrementBy, decrementBy, setCount, reset } = counterStore

// Mendapatkan query parameter
const startValue = route.query.startValue

// Computed properties
const statusText = computed(() => {
  if (isAtMax.value) return 'At Maximum'
  if (isAtMin.value) return 'At Minimum'
  return 'Normal'
})

const statusClass = computed(() => {
  if (isAtMax.value) return 'status-max'
  if (isAtMin.value) return 'status-min'
  return 'status-normal'
})

// Functions
function updateProfile() {
  const names = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Wilson', 'Frank Castle']
  const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'diana@example.com', 'eve@example.com', 'frank@example.com']
  
  const randomIndex = Math.floor(Math.random() * names.length)
  userStore.updateProfile(names[randomIndex], emails[randomIndex])
}

// Set initial value dari query parameter
onMounted(() => {
  if (startValue) {
    setCount(parseInt(startValue))
  }
})
</script>

<style scoped>
.counter-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header Section */
.header-section {
  text-align: center;
  padding: 2rem 0 3rem;
  margin-bottom: 2rem;
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

/* Counter Section */
.counter-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.counter-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transition: left 0.7s ease;
}

.counter-section:hover::before {
  left: 100%;
}

.counter-section:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.counter-display {
  text-align: center;
}

.counter-visual {
  margin-bottom: 3rem;
}

.count-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.count {
  font-size: 5rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  letter-spacing: -2px;
}

.count-animations {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.count-ring {
  width: 200px;
  height: 200px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

.count-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.counter-details {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;
}

.detail-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  min-width: 120px;
}

.detail-label {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-value {
  display: block;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.counter-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.counter-info {
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
}

.info-label {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  display: block;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

.status-max { color: #ff6b6b; }
.status-min { color: #ffd93d; }
.status-normal { color: #6bcf7f; }

.reset-section {
  text-align: center;
}

/* User Section */
.user-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.profile-card {
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

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transition: left 0.7s ease;
}

.profile-card:hover::before {
  left: 100%;
}

.profile-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.profile-avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.profile-info {
  flex: 1;
}

.profile-name {
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: -0.5px;
}

.profile-email {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin: 0;
}

.profile-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #6c757d;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.status-dot.online {
  background: #10B981;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.status-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 2rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.stat-content {
  flex: 1;
}

.stat-number {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-summary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.profile-summary h4 {
  color: white;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.profile-summary p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
}

.profile-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* History Section */
.history-section {
  margin-bottom: 3rem;
}

.history-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.history-container:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.history-list {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  padding-right: 0.5rem;
}

.history-list::-webkit-scrollbar {
  width: 6px;
}

.history-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.history-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.history-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  opacity: 0;
  animation: slideInUp 0.4s ease forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.history-icon {
  color: #10B981;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.history-text {
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
}

.history-controls {
  text-align: center;
}

/* Query Demo */
.query-demo {
  background: rgba(66, 184, 131, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.query-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.query-demo h3 {
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.query-demo p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.query-demo strong {
  color: #10B981;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
  .counter-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .count {
    font-size: 4rem;
  }
  
  .counter-details {
    flex-direction: column;
    gap: 1rem;
  }
  
  .counter-controls {
    gap: 0.5rem;
  }
  
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .profile-controls {
    flex-direction: column;
    align-items: center;
  }
}
</style>
