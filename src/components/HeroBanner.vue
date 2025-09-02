<template>
  <div class="hero-banner q-pa-lg text-white flex flex-center column">
    <div class="text-h4 text-center text-bold">Kamal Finance Services</div>
    <div class="text-subtitle1 text-center q-mt-sm">
      Trusted Financial Solutions for Your Future
    </div>
    <q-btn color="primary" label="Get Started" class="q-mt-lg" @click="$emit('scrollToContact')" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-banner {
  background: linear-gradient(135deg, #007bff, #00bcd4);
  min-height: 300px;
  border-radius: 12px;
}
</style>
