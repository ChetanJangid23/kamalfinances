<template>
  <div class="q-pa-lg bg-white rounded-borders shadow-md">
    <div class="row q-col-gutter-xl">
      <!-- Career Opportunities Section -->
    <div class="text-center q-mb-xl " style="margin-bottom: 0; padding-top: 0;">
      <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
        Career Opportunities
      </h2>
      <p class="text-body1 animate__animated animate__fadeInUp">
        Explore exciting career opportunities with Kamal Finance Services! Join our network as a channel
  partner and enjoy flexible working hours, competitive incentives, and the chance to grow
  professionally while helping customers achieve their financial goals. Be part of a team that
  values transparency, support, and success.
      </p>
    </div>
      <!-- Left Section: Career Benefits -->
      <div class="col-12 col-md-6" style="padding-top: 0;">
        <h2 class="text-h4 text-primary q-mb-md">Join as a Channel Partner</h2>
        <p class="text-body1 q-mb-lg">
          Become a part of our growing network and enjoy exclusive benefits:
        </p>

        <ul class="text-body2 q-pl-md">
          <li>✅ Competitive commissions and incentives</li>
          <li>✅ Access to a wide range of financial products</li>
          <li>✅ Dedicated support and training</li>
          <li>✅ Flexible working hours and work from anywhere</li>
          <li>✅ Recognition and growth opportunities</li>
        </ul>
      </div>

      <!-- Right Section: Form -->
      <div class="col-12 col-md-6" style="padding-top: 0;">
        <h2 class="text-h4 text-primary q-mb-md">Apply Now</h2>
        <p class="text-body1 q-mb-lg">
          Fill out the form below to start your journey as a channel partner.
        </p>

        <q-form @submit.prevent="submitForm">
          <q-input v-model="form.name" label="Name" outlined required style="padding-bottom: 16px;" />
          <q-input v-model="form.phone" label="Phone" type="tel" outlined required style="padding-bottom: 16px;" />
          <q-input v-model="form.email" label="Email" type="email" outlined required style="padding-bottom: 16px;" />
          <!-- Address input -->
          <q-input v-model="form.address" label="Address" outlined required style="padding-bottom: 16px;" />
          <q-input v-model="form.location" label="Location Interested For" outlined required style="padding-bottom: 16px;" />
          <q-input v-model="form.message" label="Message" type="textarea" outlined autogrow style="padding-bottom: 16px;" />
          <q-card-section class="q-pt-none">
  <div class="text-center text-caption q-mt-sm">
    By submitting this form, you agree that we may use your information to respond to your inquiries,
    provide customer service support, send you important information about the services, and send you
    marketing communications (with your consent) via different channels, including but not limited to
    SMS, Email, WhatsApp, and Voice.
  </div>
</q-card-section>
          <q-btn type="submit" label="Submit" color="primary" class="full-width" :loading="loading" />
        </q-form>

        <!-- Success Dialog -->
        <q-dialog v-model="success">
          <q-card class="q-pa-md" style="max-width: 300px">
            <q-card-section class="text-h6 text-green-9">
              ✅ Application submitted successfully!
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="closeSuccess" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: "CareerChannelPartner" });
import { ref } from "vue";

const form = ref({
  name: "",
  phone: "",
  email: "",
  address: "",
  location: "",
  message: "",
});

const loading = ref(false);
const success = ref(false);

// Replace this URL with your Career Google Form Response URL
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScx8-UQ9oGFk_5cl9SqD6cVQJAHBodJ5TTCGcsvOm4gTiyD2Q/formResponse";

const submitForm = async () => {
  loading.value = true;
  success.value = false;

  const params = new URLSearchParams();
  params.append("entry.1088591403", form.value.name);    // Name field entry ID
  params.append("entry.504135429", form.value.phone);    // Phone field entry ID
  params.append("entry.387049496", form.value.email);   // Email field entry ID
  params.append("entry.1693222219", form.value.address);    // Address entry ID
  params.append("entry.1529299036", form.value.location); // Location entry ID
  params.append("entry.336918982", form.value.message); // Message entry ID

  try {
    await fetch(formUrl, {
      method: "POST",
      body: params,
      mode: "no-cors",
    });
    console.log("✅ Submitted to Google Form");

    success.value = true;
    form.value = { name: "", phone: "", email: "", address: "", location: "", message: "" };
  } catch (err) {
    console.error("❌ Error submitting form", err);
  } finally {
    loading.value = false;
  }
};

const closeSuccess = () => {
  success.value = false;
};
</script>

<style scoped>
.rounded-borders {
  border-radius: 16px;
}
ul li {
  margin-bottom: 8px;
}
</style>
