<template>
  <q-page class="q-pa-md">
    <ServiceSection />
    <!-- Address & Phone -->
<div class=" text-gray-800 rounded-2xl shadow-md p-6 animate-fadeInUp">
  <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

    <!-- Office Address -->
    <div class="md:w-1/2 text-center md:text-right">
      <h6 class="text-lg font-bold text-primary mb-1" style="margin-bottom: 16px; text-align: left;">📍 Our Office</h6>
      <p class="text-base leading-snug">
        42-B, New Master Colony(Near RTO Office), Khandiya, Jhalawar Rajasthan 326001
      </p>
    </div>

    <!-- Contact -->
    <div class="md:w-1/2 text-center md:text-left">
      <h6 class="text-lg font-bold text-primary mb-1" style="margin-bottom: 16px;">📞 Contact Us</h6>
      <p>
        <a
          href="tel:+919216850350"
          class="text-blue-600 font-semibold hover:underline"
        >
          +91 92168 50350
        </a>
      </p>
    </div>

  </div>
</div>

<!-- Happy Customers Component -->
    <happy-customers />
    <!-- Footer Section -->
    <footer-section />
    <WhatsAppButton />
  </q-page>
</template>
<script setup>
import ServiceSection from 'src/components/ServicesSection.vue'
//import HappyCustomers from 'src/components/HappyCustomers.vue'
import FooterSection from 'src/components/FooterSection.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'

</script>
