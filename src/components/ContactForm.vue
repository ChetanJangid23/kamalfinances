<template>
  <div class="q-pa-lg bg-white rounded-borders shadow-md">
    <div class="row q-col-gutter-xl">
      <!-- Contact Us Section -->
       <div style="text-align: center; width: 100%;">
        <div class="text-center q-mb-xl " style="margin-bottom: 0; text-align: center;">
      <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
        Contact Us
      </h2>
      <p class="text-body1 animate__animated animate__fadeInUp">
        We  love to hear from you! Whether you have a question about our services, need assistance, or just want to chat, our team is here to help.
      </p>
    </div>
       </div>



      <!-- Left Section -->
      <div class="col-12 col-md-6">
        <h2 class="text-h4 text-primary q-mb-md">Get in Touch</h2>
        <p class="text-body1 q-mb-lg">
          Get in touch with us today for personalized financial solutions and expert advice.
          We’re here to help you navigate your financial journey with ease.
        </p>

        <!-- Location -->
        <div class="q-mb-md">
          <q-icon name="place" style="padding-bottom: 12px;" color="primary" size="md" />
          <div class="q-ml-sm inline-block">
            <div class="text-subtitle1">Location</div>
            <div class="text-body2">
              42-B New Master Colony, <br />
              Near RTO Office, <br />
              Jhalawar - Rajasthan
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="q-mb-md">
          <q-icon name="email" style="padding-bottom: 12px;" color="primary" size="md" />
          <div class="q-ml-sm inline-block">
            <div class="text-subtitle1">Email us</div>
            <div class="text-body2">
              <a href="mailto:care.kamalfinance@gmail.com" class="text-primary">care.kamalfinance@gmail.com</a> <br />
              <!-- <a href="mailto:hello@yourdomain.tld" class="text-primary">hello@yourdomain.tld</a> -->
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div class="q-mb-md">
          <q-icon name="phone" style="padding-bottom: 12px;" color="primary" size="md" />
          <div class="q-ml-sm inline-block">
            <div class="text-subtitle1">Call us</div>
            <div class="text-body2">
              <a href="tel:9216155355" class="text-primary">9216155355</a>
            </div>
          </div>
        </div>

        <q-separator class="q-my-md" />
        <div style="display: flex;">
          <div class="text-subtitle1 q-mb-sm" style="padding-top: 11px;">Follow us on social</div>
          <div class="row q-gutter-sm">
            <q-btn
              round
              flat
              color="primary"
              icon="fa-brands fa-facebook"
              href="https://www.facebook.com/people/KAMAL-Finance-services/100093035190411/"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="col-12 col-md-6">
        <h2 class="text-h4 text-primary q-mb-md">Send a Message</h2>
        <p class="text-body1 q-mb-lg">
          Secure Your Peace of Mind Today – Contact Us for Top-notch Solutions!
        </p>

        <q-form @submit.prevent="submitForm">
          <q-input style="padding-bottom: 16px;" v-model="form.name" label="Name" outlined required />
          <q-input style="padding-bottom: 16px;" v-model="form.phone" label="Phone" outlined type="tel" required />
          <q-input style="padding-bottom: 16px;" v-model="form.email" label="Email" outlined type="email" required />
          <q-select style="padding-bottom: 16px;"
            v-model="form.service"
            label="Service Requested"
            outlined
            :options="serviceOptions"
            required
          />
          <q-input style="padding-bottom: 16px;" v-model="form.message" label="Message" outlined type="textarea" autogrow required />
          <q-card-section class="q-pt-none">
  <div class="text-center text-caption q-mt-sm">
    By submitting this form, you agree that we may use your information to respond to your inquiries,
    provide customer service support, send you important information about the services, and send you
    marketing communications (with your consent) via different channels, including but not limited to
    SMS, Email, WhatsApp, and Voice.
  </div>
</q-card-section>
          <q-btn type="submit" label="Send" color="primary" class="full-width" :loading="loading" />
        </q-form>

        <!-- Success Dialog -->
        <q-dialog v-model="success">
          <q-card class="q-pa-md" style="max-width: 300px">
            <q-card-section class="text-h6 text-green-9">
              ✅ Message sent successfully!
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="closeSuccess" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

  <!-- <div class="col-12 col-md-6">
  <h2 class="text-h4 text-primary q-mb-md">Send a Message</h2>
  <p class="text-body1 q-mb-lg">
    Secure Your Peace of Mind Today – Contact Us for Top-notch Solutions!
  </p>

  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfWUJHqHARyeFE_3l_pChmgP84-R5ypzuO9SKMsKTTnQ0yGPA/viewform?embedded=true"
    width="100%"
    height="600"
    frameborder="0"
    marginheight="0"
    marginwidth="0">
    Loading…
  </iframe>
</div> -->

    <!-- Google Map Section -->
    <q-card class="q-mt-lg" flat bordered style="width: 100%; height: 400px; border-radius: 16px; overflow: hidden; box-shadow: 0px 4px 12px rgba(0,0,0,0.1);">
      <q-card-section class="q-pa-none" style="height: 100%; padding: 0;">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0;"
          src="https://www.google.com/maps?q=Kamal%20FINANCE%20Services%20:-%20Best%20Finance%20Company,%2042-B,%20%E0%A4%9D%E0%A4%BE%E0%A4%B2%E0%A5%80%E0%A4%B5%E0%A4%BE%E0%A4%B2%20%E0%A4%9A%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A4%BE%20RTO%20%E0%A4%91%E0%A4%AB%E0%A4%BF%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AA%E0%A4%BE%E0%A4%B8,%20New%20Master%20Colony,%20Khandiya,%20Rajasthan%20326001&output=embed"
          allowfullscreen>
        </iframe>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
});

const serviceOptions = [
  "Personal Loans",
  "Business Loans",
  "Car Loans",
  "Vehicle Finance",
  "Home Loan",
  "Property Loan",
  "Life Insurance",
  "Health Insurance",
  "General Insurance"
];

const loading = ref(false);
const success = ref(false);

const submitForm = async () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfWUJHqHARyeFE_3l_pChmgP84-R5ypzuO9SKMsKTTnQ0yGPA/formResponse";

  loading.value = true;
  success.value = false;

  const params = new URLSearchParams();
  params.append("entry.1088591403", form.value.name);
  params.append("entry.504135429", form.value.phone);
  params.append("entry.1887191596", form.value.email);
  params.append("entry.387049496", form.value.service);
  params.append("entry.1023872141", form.value.message);

  try {
    await fetch(formUrl, {
      method: "POST",
      body: params,
      mode: "no-cors", // Google blocks CORS
    });
    console.log("✅ Submitted to Google Form");

    // Show success modal
    success.value = true;

    // Reset form
    form.value = { name: "", phone: "", email: "", service: "", message: "" };
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
</style>
