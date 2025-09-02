<template>
  <div>
    <!-- WhatsApp Button -->
    <q-btn
      round
      color="green"
      icon="fa-brands fa-whatsapp"
      class="floating-btn whatsapp-btn"
      @click="openWhatsApp"
    />

    <!-- Phone Button -->
    <q-btn
      round
      color="primary"
      icon="phone"
      class="floating-btn phone-btn"
      @click="callNow"
    />
  </div>
</template>

<script setup>
function openWhatsApp() {
  const phone = "919216155355" // Replace with your number
  const message = encodeURIComponent("Hello, I am interested in your services.")
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
}

function callNow() {
  const phone = "tel:+919216155355" // Replace with your number
  window.open(phone, "_self") // Opens dialer on mobile
}
</script>

<style scoped>
/* Default (desktop/tab) */
.floating-btn {
  position: fixed;
  right: 20px;
  z-index: 9999;
  padding: 10px;
  font-size: 22px; /* icon size */
  width: 50px;
  height: 50px;
}

.whatsapp-btn {
  bottom: 85px;
}

.phone-btn {
  bottom: 20px;
}

/* Mobile: smaller size */
@media (max-width: 768px) {
  .floating-btn {
    width: 45px;
    height: 45px;
    font-size: 18px; /* shrink icon */
    right: 15px;
  }

  .whatsapp-btn {
    bottom: 70px;
  }

  .phone-btn {
    bottom: 15px;
  }
}
</style>
