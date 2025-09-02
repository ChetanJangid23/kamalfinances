<template>
  <q-page padding>

    <!-- Banner Section -->
    <home-banner />

    <!-- Services Section -->
    <services-section />

    <!-- Google Rating Section -->
    <div class="q-mt-xl text-center animate__animated animate__fadeInUp">
      <q-card class="q-pa-lg bg-white shadow-2">
        <q-card-section>
          <h3 class="text-h5 text-primary q-mb-sm">
            ⭐ Kamal Finance Service is the Highest Rated in District!
          </h3>
          <p class="text-body1 q-mb-sm">
            Proudly holding a <span class="text-bold">4.5+ Google Rating</span> for excellent customer service and trust.
          </p>
          <div>
            <q-rating
              v-model="rating"
              max="5"
              size="32px"
              readonly
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              :color-selected="getStarColor"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- EMI Calculator Section -->
    <EMI_Calculator />

    <!-- Inquiry Popup (Dialog) -->
    <q-dialog v-model="inquiryDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Inquiry Form</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled v-model="formData.name" label="Name" required />
          <q-input filled v-model="formData.phone" label="Phone" type="tel" required />
          <q-input filled v-model="formData.service" label="Service Requested" readonly />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn color="primary" label="Submit" @click="submitForm" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Happy Customers Section -->
    <happy-customers />

    <!-- Footer Section -->
    <footer-section />

    <!-- WhatsApp Button (Floating) -->
    <WhatsAppButton />

  </q-page>
</template>

<script setup>
import { ref } from "vue"

// Local Imports
import HomeBanner from 'src/components/HomeBanner.vue'
import ServicesSection from 'src/components/ServicesSection.vue'
import EMI_Calculator from 'src/components/EMICalculator.vue'
import HappyCustomers from 'src/components/HappyCustomers.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'
import FooterSection from 'src/components/FooterSection.vue'

// Rating logic
const rating = ref(4.5)
const getStarColor = (index) => {
  if (index < Math.floor(rating.value)) return "amber-10"
  if (index < rating.value) return "amber-7"
  return "amber-3"
}

// Inquiry dialog
const inquiryDialog = ref(false)
const formData = ref({
  name: '',
  phone: '',
  service: ''
})

const submitForm = () => {
  // Your submit logic here
  console.log("Form submitted", formData.value)
}
</script>

<style scoped>
.q-icon {
  width: auto;
}
.q-card {
  height: -webkit-fill-available;
}
</style>
