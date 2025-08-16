import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // State
  const name = ref('John Doe')
  const email = ref('john@example.com')
  const loginCount = ref(0)
  const isLoggedIn = ref(false)
  const preferences = ref({
    theme: 'light',
    language: 'id',
    notifications: true,
  })

  // Getters (computed)
  const displayName = computed(() => {
    return name.value.split(' ')[0] // Ambil nama pertama saja
  })

  const userSummary = computed(() => {
    return `${displayName.value} (${email.value}) - Login ${loginCount.value}x`
  })

  // Actions
  function updateProfile(newName, newEmail) {
    name.value = newName
    email.value = newEmail
  }

  function login() {
    isLoggedIn.value = true
    loginCount.value++
  }

  function logout() {
    isLoggedIn.value = false
  }

  function updatePreferences(newPrefs) {
    preferences.value = { ...preferences.value, ...newPrefs }
  }

  function resetUser() {
    name.value = 'John Doe'
    email.value = 'john@example.com'
    loginCount.value = 0
    isLoggedIn.value = false
    preferences.value = {
      theme: 'light',
      language: 'id',
      notifications: true,
    }
  }

  return {
    // State
    name,
    email,
    loginCount,
    isLoggedIn,
    preferences,
    // Getters
    displayName,
    userSummary,
    // Actions
    updateProfile,
    login,
    logout,
    updatePreferences,
    resetUser,
  }
})
