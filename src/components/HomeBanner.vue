<template>
  <div style="text-align: center; padding: 1rem;">
    <h2 class="typing-text">
      Welcome to Kamal Finance Services
    </h2>
    <p style="font-size: 1.5rem; font-weight: 600; color: #000;">सपने आपके, सहयोग हमारा !</p>
  </div>
  <div class="banner-container">
    <q-img
      :src="bannerImage"
      alt="Finance Services Banner"
      style="width: 100%;  object-fit: cover;"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = ['./banner.png' , './banner1.png']   // list of banners
const bannerImage = ref(images[0])
let index = 0
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    index = (index + 1) % images.length
    bannerImage.value = images[index]
  }, 5000) // change every 5 sec
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.banner-container {

  margin: 0 auto;
  overflow: hidden;
}

.typing-text {
  color: #1976d2;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  margin: 0 auto;

  font-size: clamp(1.2rem, 4vw, 2.5rem);

  animation: typing 4s steps(40, end) forwards, blink 0.8s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}
</style>
