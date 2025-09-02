<template>
  <div>
    <!-- Sticky EMI Calculator Button -->
    <div
      v-if="!drawer"
      class="emi-calculator-btn"
      @click="drawer = true"
    >
      <q-icon name="calculate" size="24px" class="q-mr-sm" />
      <span>EMI Calculator</span>
    </div>

    <!-- Custom Drawer (content-height only) -->
    <transition name="slide-fade">
      <div
        v-if="drawer"
        class="emi-drawer"
      >
        <!-- Header with Close Icon -->
        <div class="row items-center justify-between q-mb-md emi-header">
          <div class="text-h6">EMI Calculator</div>
          <q-btn flat round dense icon="close" color="white" @click="drawer = false" />
        </div>

        <!-- Inputs -->
        <q-input
          v-model.number="amount"
          label="Loan Amount"
          type="number"
          outlined
          dense
          class="q-mb-md"
        />
        <q-input
          v-model.number="tenure"
          label="Tenure (Months)"
          type="number"
          outlined
          dense
          class="q-mb-md"
        />
        <q-input
          v-model.number="interestRate"
          label="Interest Rate (%)"
          type="number"
          outlined
          dense
          class="q-mb-md"
        />

        <!-- Results -->
        <div class="q-mt-lg">
          <div><strong>Monthly EMI:</strong> ₹{{ monthlyEMI }}</div>
          <div><strong>Principal Amount:</strong> ₹{{ amount }}</div>
          <div><strong>Interest Payable:</strong> ₹{{ totalInterest }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const drawer = ref(false)
const amount = ref(0)
const tenure = ref(0)
const interestRate = ref(0)

const monthlyEMI = computed(() => {
  if (!amount.value || !tenure.value || !interestRate.value) return 0
  const principal = amount.value
  const rate = interestRate.value / 12 / 100
  const n = tenure.value
  return Math.round((principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1))
})

const totalPayment = computed(() => monthlyEMI.value * tenure.value)
const totalInterest = computed(() => Math.round(totalPayment.value - amount.value))
</script>

<style scoped>
/* Sticky Button */
.emi-calculator-btn {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1976d2;
  color: white;
  padding: 12px 16px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Custom Drawer */
.emi-drawer {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 12px 0 0 12px;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
  width: 320px;
  padding: 16px;
  height: auto; /* only content height */
  max-height: 90%;
  overflow-y: auto;
  z-index: 10000;
}

/* Header */
.emi-header {
  background: #1976d2;
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
}

/* Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50%) translateX(100%);
  opacity: 0;
}
</style>
