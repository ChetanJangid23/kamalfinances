<template>
  <!-- Services Section -->
  <div class="q-mt-xl">
    <div style="text-align: center">
      <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
        Our Services
      </h2>
      <p class="text-body1 animate__animated animate__fadeInUp">
        Explore our wide range of financial services tailored to meet your needs.
      </p>
    </div>
    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-xs-12 col-sm-4" v-for="s in services" :key="s.title">
        <q-card class="q-pa-md">
          <q-icon :name="s.icon" size="40px" color="primary" />
          <div class="text-h6 q-mt-sm">{{ s.title }}</div>
          <p>{{ s.desc }}</p>
          <q-card-actions align="right">
            <q-btn color="primary" label="Inquire" @click="openInquiry(s.title)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>

  <!-- Inquiry Popup -->
  <!-- <q-dialog v-model="inquiryDialog">
    <q-card style="min-width: 350px; max-height: fit-content">
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
  </q-dialog> -->
<!-- Inquiry Popup -->
  <q-dialog v-model="inquiryDialog">
    <q-card style="min-width: 350px; max-height: fit-content">
      <q-card-section>
        <div class="text-h6">Inquiry Form</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          filled
          v-model="formData.name"
          label="Name"
          required
        />
        <q-input
          filled
          v-model="formData.phone"
          label="Phone"
          type="tel"
          required
        />
        <q-input
          filled
          v-model="formData.service"
          label="Service Requested"
          readonly
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn color="primary" label="Submit" @click="submitForm" />
      </q-card-actions>
    </q-card>
  </q-dialog>


</template>

<script setup>
import { ref, reactive } from 'vue'

const inquiryDialog = ref(false)

const formData = reactive({
  name: '',
  phone: '',
  service: ''
})

const services = [
  { title: 'Personal Loans', icon: 'currency_rupee', desc: 'Quick approval personal loans.' },
  { title: 'Business Loans', icon: 'business_center', desc: 'Grow your business with our support.' },
  { title: 'Home Loan', icon: 'home', desc: 'Affordable home loans with flexible EMI options.' },
  { title: 'Car Loans', icon: 'directions_car', desc: 'Easy car loans with low interest. All brands car loan available.' },
  { title: 'Vehicle Finance', icon: 'agriculture local_shipping', desc: 'Easy Tractor and Commercial Vehicle loans with low interest.' },
  { title: 'Loan Against Property(LAP)', icon: 'apartment', desc: 'Affordable loan against property with flexible EMI options.' },
  { title: 'Life Insurance', icon: 'favorite', desc: 'Secure your family’s future with our life insurance plans.' },
  { title: 'Health Insurance', icon: 'health_and_safety', desc: 'Comprehensive health insurance plans for you and your family.' },
  { title: 'General Insurance', icon: 'security', desc: 'Protect your assets with our general insurance plans.' }
]

function openInquiry(serviceTitle) {
  formData.name = ''
  formData.phone = ''
  formData.service = serviceTitle
  inquiryDialog.value = true
}

const submitForm = async () => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfOKWC7j5L28cb_D7A01bzFvPpy8CTq8t21vs3ruXn2UkUgmA/formResponse";

  const params = new URLSearchParams();
  params.append("entry.1088591403", formData.name);    // Name
  params.append("entry.504135429", formData.phone);   // Phone
  params.append("entry.387049496", formData.service); // Service

  try {
    await fetch(formUrl, {
      method: "POST",
      body: params,
      mode: "no-cors", // required, Google blocks CORS
    });
    console.log("✅ Submitted to Google Form");
    inquiryDialog.value = false;
  } catch (err) {
    console.error("❌ Error submitting form", err);
  }
};

</script>


<style scoped>
.q-icon {
  width: auto;
}
.q-card {
  height: -webkit-fill-available;
}
</style>
