<template>
  <q-page class="bg-grey-1">
    <!-- Page Header -->
    <!-- <div class="q-pa-xl text-center bg-primary text-white">
      <h1 class="text-h3">Career Opportunities</h1>
      <p class="text-subtitle2 q-mt-sm">
        Join our growing network and become a valued channel partner
      </p>
    </div> -->

    <!-- Career Form Section -->
    <div class="q-pa-lg q-mt-lg">
      <CareerForm />
    </div>
    <footer-section />
    <WhatsAppButton />

  </q-page>
</template>

<script setup>
import CareerForm from "components/career.vue"; // Adjust path if necessary
import FooterSection from "components/FooterSection.vue"; // Adjust path if necessary
import WhatsAppButton from "components/WhatsAppButton.vue"; // Adjust path if necessary
</script>

<style scoped>
.bg-primary {
  background-color: #027be3; /* Adjust your primary color */
}
</style>
