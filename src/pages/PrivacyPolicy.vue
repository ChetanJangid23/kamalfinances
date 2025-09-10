<template>
  <div class="q-pa-lg bg-white rounded-borders shadow-md">
    <!-- Header Section -->
    <div style="text-align: center; width: 100%">
      <div class="text-center q-mb-xl" style="margin-bottom: 0; text-align: center">
        <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
          Privacy Policy
        </h2>
        <p class="text-body1 animate__animated animate__fadeInUp">
          At Kamal Finance Services, we value your privacy and are committed to safeguarding your
          personal information.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="text-body1">
      <h3 class="text-subtitle1 text-primary q-mt-md">Information We Collect</h3>
      <p>We may collect your Name, Phone, Email, and Service details when you submit an inquiry.</p>

      <h3 class="text-subtitle1 text-primary q-mt-md">How We Use Your Information</h3>
      <p>
        We use your information to respond to inquiries, provide customer service support, send
        important updates about our services, and send marketing communications (with your consent)
        via SMS, Email, WhatsApp, and Voice.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">Data Protection</h3>
      <p>
        We apply industry-standard security measures to protect your data. However, no online
        transmission can be guaranteed 100% secure.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">To Communicate with You</h3>
      <p>
        To Communicate with You: We may use your information to respond to your inquiries, provide
        customer service support, send you important information about the services, and send you
        marketing communications (with your consent) via different channels, including but not
        limited to SMS, Email, WhatsApp, and Voice.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">Contact Us</h3>
      <p>
        📧
        <a href="mailto:care.kamalfinance@gmail.com" class="text-primary"
          >care.kamalfinance@gmail.com</a
        ><br />
        📞 <a href="tel:+919216155355" class="text-primary">+91 92161 55355</a>
      </p>
    </div>
  </div>
  <footer-section />
  <WhatsAppButton />
</template>

<script setup>
import FooterSection from 'src/components/FooterSection.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'
</script>
