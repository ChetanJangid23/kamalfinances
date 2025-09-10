<template>
  <div class="q-pa-lg bg-white rounded-borders shadow-md">
    <!-- Header Section -->
    <div style="text-align: center; width: 100%;">
      <div class="text-center q-mb-xl" style="margin-bottom: 0; text-align: center;">
        <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
          Terms & Conditions
        </h2>
        <p class="text-body1 animate__animated animate__fadeInUp">
          Please read these Terms & Conditions carefully before using Kamal Finance Services.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="text-body1">
      <h3 class="text-subtitle1 text-primary q-mt-md">Use of Services</h3>
      <p>
        You agree to use our services only for lawful purposes and in compliance with applicable laws.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">Communications</h3>
      <p>
        By submitting your details, you consent to receive communications from us via SMS, Email, WhatsApp, or Voice.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">Limitation of Liability</h3>
      <p>
        Kamal Finance Services will not be liable for any indirect or consequential damages
        arising from your use of our services.
      </p>

      <h3 class="text-subtitle1 text-primary q-mt-md">Changes to Terms</h3>
      <p>
        We may update these Terms from time to time. Updated Terms will be posted here.
      </p>
      <h3 class="text-subtitle1 text-primary q-mt-md">To Communicate with You</h3>
      <p>
        To Communicate with You: We may use your information to respond to your inquiries, provide
        customer service support, send you important information about the services, and send you
        marketing communications (with your consent) via different channels, including but not
        limited to SMS, Email, WhatsApp, and Voice.
      </p>
    </div>
  </div>
  <footer-section />
    <WhatsAppButton />
</template>

<script setup>
  import FooterSection from 'src/components/FooterSection.vue';
  import WhatsAppButton from 'src/components/WhatsAppButton.vue';
</script>
