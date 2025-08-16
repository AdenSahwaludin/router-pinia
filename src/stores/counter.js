import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const history = ref([])
  const maxValue = ref(100)
  const minValue = ref(-100)

  // Getters (computed)
  const doubleCount = computed(() => count.value * 2)
  const tripleCount = computed(() => count.value * 3)
  const isAtMax = computed(() => count.value >= maxValue.value)
  const isAtMin = computed(() => count.value <= minValue.value)
  const canIncrement = computed(() => !isAtMax.value)
  const canDecrement = computed(() => !isAtMin.value)

  // Actions
  function increment() {
    if (canIncrement.value) {
      addToHistory(`Increment from ${count.value} to ${count.value + 1}`)
      count.value++
    }
  }

  function decrement() {
    if (canDecrement.value) {
      addToHistory(`Decrement from ${count.value} to ${count.value - 1}`)
      count.value--
    }
  }

  function incrementBy(amount) {
    const newValue = Math.min(count.value + amount, maxValue.value)
    if (newValue !== count.value) {
      addToHistory(`Increment by ${amount} from ${count.value} to ${newValue}`)
      count.value = newValue
    }
  }

  function decrementBy(amount) {
    const newValue = Math.max(count.value - amount, minValue.value)
    if (newValue !== count.value) {
      addToHistory(`Decrement by ${amount} from ${count.value} to ${newValue}`)
      count.value = newValue
    }
  }

  function setCount(newValue) {
    const clampedValue = Math.max(minValue.value, Math.min(maxValue.value, newValue))
    if (clampedValue !== count.value) {
      addToHistory(`Set count from ${count.value} to ${clampedValue}`)
      count.value = clampedValue
    }
  }

  function reset() {
    addToHistory(`Reset count from ${count.value} to 0`)
    count.value = 0
  }

  function clearHistory() {
    history.value = []
  }

  function addToHistory(action) {
    const timestamp = new Date().toLocaleTimeString()
    history.value.unshift(`[${timestamp}] ${action}`)

    // Keep only last 10 entries
    if (history.value.length > 10) {
      history.value = history.value.slice(0, 10)
    }
  }

  return {
    // State
    count,
    history,
    maxValue,
    minValue,
    // Getters
    doubleCount,
    tripleCount,
    isAtMax,
    isAtMin,
    canIncrement,
    canDecrement,
    // Actions
    increment,
    decrement,
    incrementBy,
    decrementBy,
    setCount,
    reset,
    clearHistory,
  }
})
