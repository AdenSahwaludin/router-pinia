<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <span v-if="loading" class="spinner"></span>
    <slot></slot>
  </button>
</template>

<script setup>
  import { computed } from 'vue'

  // Props
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  })

  // Emits
  const emit = defineEmits(['click'])

  // Computed
  const buttonClasses = computed(() => {
    return [
      'custom-button',
      `custom-button--${props.variant}`,
      `custom-button--${props.size}`,
      {
        'custom-button--outline': props.outline,
        'custom-button--loading': props.loading,
        'custom-button--disabled': props.disabled,
      },
    ]
  })

  // Methods
  function handleClick(event) {
    if (!props.disabled && !props.loading) {
      emit('click', event)
    }
  }
</script>

<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: white;
  letter-spacing: 0.3px;
}

.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.custom-button:hover::before {
  left: 100%;
}

.custom-button:focus {
  outline: none;
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.3),
    0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Sizes */
.custom-button--small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.custom-button--medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.custom-button--large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Variants */
.custom-button--primary {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.3) 0%, rgba(54, 152, 112, 0.3) 100%);
  border-color: rgba(66, 184, 131, 0.4);
  box-shadow: 0 8px 32px rgba(66, 184, 131, 0.2);
}

.custom-button--primary:hover:not(.custom-button--disabled) {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.4) 0%, rgba(54, 152, 112, 0.4) 100%);
  border-color: rgba(66, 184, 131, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(66, 184, 131, 0.3);
}

.custom-button--secondary {
  background: linear-gradient(135deg, rgba(108, 117, 125, 0.3) 0%, rgba(90, 98, 104, 0.3) 100%);
  border-color: rgba(108, 117, 125, 0.4);
  box-shadow: 0 8px 32px rgba(108, 117, 125, 0.2);
}

.custom-button--secondary:hover:not(.custom-button--disabled) {
  background: linear-gradient(135deg, rgba(108, 117, 125, 0.4) 0%, rgba(90, 98, 104, 0.4) 100%);
  border-color: rgba(108, 117, 125, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(108, 117, 125, 0.3);
}

.custom-button--success {
  background: linear-gradient(135deg, rgba(40, 167, 69, 0.3) 0%, rgba(33, 136, 56, 0.3) 100%);
  border-color: rgba(40, 167, 69, 0.4);
  box-shadow: 0 8px 32px rgba(40, 167, 69, 0.2);
}

.custom-button--success:hover:not(.custom-button--disabled) {
  background: linear-gradient(135deg, rgba(40, 167, 69, 0.4) 0%, rgba(33, 136, 56, 0.4) 100%);
  border-color: rgba(40, 167, 69, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(40, 167, 69, 0.3);
}

.custom-button--danger {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.3) 0%, rgba(200, 35, 51, 0.3) 100%);
  border-color: rgba(220, 53, 69, 0.4);
  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.2);
}

.custom-button--danger:hover:not(.custom-button--disabled) {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.4) 0%, rgba(200, 35, 51, 0.4) 100%);
  border-color: rgba(220, 53, 69, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(220, 53, 69, 0.3);
}

.custom-button--warning {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.3) 0%, rgba(224, 168, 0, 0.3) 100%);
  border-color: rgba(255, 193, 7, 0.4);
  box-shadow: 0 8px 32px rgba(255, 193, 7, 0.2);
  color: #1a1a1a;
}

.custom-button--warning:hover:not(.custom-button--disabled) {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.4) 0%, rgba(224, 168, 0, 0.4) 100%);
  border-color: rgba(255, 193, 7, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 193, 7, 0.3);
}

/* Outline variants */
.custom-button--outline {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.custom-button--primary.custom-button--outline {
  border-color: rgba(66, 184, 131, 0.5);
  color: rgba(66, 184, 131, 0.9);
}

.custom-button--primary.custom-button--outline:hover:not(.custom-button--disabled) {
  background: rgba(66, 184, 131, 0.1);
  border-color: rgba(66, 184, 131, 0.7);
  color: white;
}

.custom-button--secondary.custom-button--outline {
  border-color: rgba(108, 117, 125, 0.5);
  color: rgba(108, 117, 125, 0.9);
}

.custom-button--secondary.custom-button--outline:hover:not(.custom-button--disabled) {
  background: rgba(108, 117, 125, 0.1);
  border-color: rgba(108, 117, 125, 0.7);
  color: white;
}

.custom-button--success.custom-button--outline {
  border-color: rgba(40, 167, 69, 0.5);
  color: rgba(40, 167, 69, 0.9);
}

.custom-button--success.custom-button--outline:hover:not(.custom-button--disabled) {
  background: rgba(40, 167, 69, 0.1);
  border-color: rgba(40, 167, 69, 0.7);
  color: white;
}

.custom-button--danger.custom-button--outline {
  border-color: rgba(220, 53, 69, 0.5);
  color: rgba(220, 53, 69, 0.9);
}

.custom-button--danger.custom-button--outline:hover:not(.custom-button--disabled) {
  background: rgba(220, 53, 69, 0.1);
  border-color: rgba(220, 53, 69, 0.7);
  color: white;
}

.custom-button--warning.custom-button--outline {
  border-color: rgba(255, 193, 7, 0.5);
  color: rgba(255, 193, 7, 0.9);
}

.custom-button--warning.custom-button--outline:hover:not(.custom-button--disabled) {
  background: rgba(255, 193, 7, 0.1);
  border-color: rgba(255, 193, 7, 0.7);
  color: #1a1a1a;
}

/* States */
.custom-button--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
}

.custom-button--disabled::before {
  display: none;
}

.custom-button--loading {
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Active/Pressed state */
.custom-button:active:not(.custom-button--disabled) {
  transform: translateY(-1px) scale(0.98);
}

/* Glass reflection effect */
.custom-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
  border-radius: 12px 12px 0 0;
}
</style>
