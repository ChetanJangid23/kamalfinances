<template>
  <q-page class="q-pa-md bg-grey-1">
    <!-- About Us Section -->
    <div class="text-center q-mb-xl">
      <h2 class="text-h4 text-primary q-mb-sm animate__animated animate__fadeInDown">
        About Us
      </h2>
      <p class="text-body1 animate__animated animate__fadeInUp">
        At Kamal Finance Service, we are committed to providing transparent and customer-focused
        financial services. With years of experience, we ensure trust, simplicity, and quick solutions.
      </p>
    </div>
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
  color="amber"
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

    <!-- Who We Are Section -->
    <div class="row q-mb-xl items-center">
      <div class="col-12 col-md-6 q-pr-md">
        <h6 class=" text-red" style="margin-bottom: 0;">Who we are</h6>
        <h2 class="text-h4 text-primary q-mb-md" style="margin-top: 0;">
          We Build Trust, not Transactions.
        </h2>
        <p class="text-body1">
          Our extensive financial offerings include Vehicle Loans, SME Finance,
          Personal Loans, Insurance Broking, Housing Finance, Fixed Deposits,
          and Mutual Fund schemes. As a leader in sustainable finance, we are
          proud to be the only non-banking Indian financial company listed on
          the Dow Jones Sustainability Index for Emerging Markets. We are
          committed to fostering sustainable growth and simplifying financial
          solutions to create opportunities for our customers.
        </p>
      </div>
      <div class="col-12 col-md-6">
    <h6 class=" text-red" style="margin-bottom: 0;">Our Team</h6>
    <h2 class="text-h4 text-primary q-mb-md" style="margin-top: 0;">
      Dedicated People, Happy to Help.
    </h2>
    <p class="text-body1">
      Behind Kamal Finance Service is a passionate team of professionals
      who believe in serving with empathy and integrity. Our team members
      are not just financial advisors, but trusted partners who genuinely
      care about customer needs. With a strong spirit of teamwork, we
      ensure every customer receives personal attention, quick support,
      and clear guidance. Helping people achieve their financial goals is
      what makes our team proud and truly happy.
    </p>
  </div>
    </div>

    <!-- Mission & Vision Section -->
<div class="row q-mb-xl items-center">
  <div class="col-12 col-md-6 q-pr-md">
    <h6 class=" text-red" style="margin-bottom: 0;">Our Mission</h6>
    <h2 class="text-h4 text-primary q-mb-md" style="margin-top: 0;">
      Empowering People with Integrity.
    </h2>
    <p class="text-body1 ">
      Our mission is to empower individuals and businesses by offering accessible
      financial solutions with honesty and care. We aim to bridge the gap between
      financial challenges and opportunities, ensuring every customer experiences
      simplicity, transparency, and trust. More than just loans or services, our
      mission is about creating meaningful relationships that help people achieve
      their goals with confidence and peace of mind.
    </p>
  </div>

  <div class="col-12 col-md-6">
    <h6 class=" text-red" style="margin-bottom: 0;">Our Vision</h6>
    <h2 class="text-h4 text-primary q-mb-md" style="margin-top: 0;">
      Building a Future of Trust.
    </h2>
    <p class="text-body1">
      Our vision is to be the most trusted financial partner in the region,
      making services simpler, faster, and more reliable for everyone. We
      dream of a future where every individual, regardless of background, has
      access to fair and transparent financial solutions. By embracing
      innovation, nurturing relationships, and fostering sustainable growth,
      we strive to set new benchmarks in financial excellence while
      contributing positively to the communities we serve.
    </p>
  </div>
</div>



    <!-- Happy Customers Section -->


    <!-- Our Team Section -->


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
          href="tel:+919216155355"
          class="text-blue-600 font-semibold hover:underline"
        >
          +91 92161 55535
        </a>
      </p>
    </div>

  </div>
</div>


  </q-page>
</template>

<script setup>
import { ref } from "vue";

const rating = ref(4.5);

const getStarColor = (index) => {
  // Dark amber for full stars
  if (index < Math.floor(rating.value)) {
    return "amber-10";
  }
  // Slightly lighter amber for half star
  if (index < rating.value) {
    return "amber-7";
  }
  // Default light amber for remaining
  return "amber-3";
};


</script>

<style scoped>
.rounded-borders {
  border-radius: 16px;
}
.about-us {
  max-width: 1000px;
  margin: auto;
}
.full-height {
  min-height: 200px; /* Ensures Mission & Vision are same height */
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-in-out;
}
</style>
