<template>
  <q-page padding>
    <!-- Banner -->
     <q-page padding>
    <home-banner />
  </q-page>
    <q-img
      src="https://via.placeholder.com/1200x400"
      ratio="16/9"
      class="rounded-borders"
    >
      <div class="absolute-bottom bg-black bg-opacity-50 text-white text-h5 q-pa-md">
        Welcome to Kamal Finance Services
      </div>
    </q-img>

    <!-- About Section -->
    <div class="q-mt-lg">
      <div class="text-h5 text-primary text-center">About Us</div>
      <p class="text-center q-pa-md">
        We provide hassle-free finance solutions for all your needs.
      </p>
    </div>

    <!-- Services Section -->
    <div class="q-mt-xl">
      <div class="text-h5 text-primary text-center">Our Services</div>
      <div class="row q-col-gutter-md q-mt-md">
        <div class="col-xs-12 col-sm-4" v-for="s in services" :key="s.title">
          <q-card class="q-pa-md">
            <q-icon :name="s.icon" size="40px" color="primary" />
            <div class="text-h6 q-mt-sm">{{ s.title }}</div>
            <p>{{ s.desc }}</p>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import HomeBanner from 'src/components/HomeBanner.vue'

const services = [
  { title: "Personal Loans", icon: "attach_money", desc: "Quick approval personal loans." },
  { title: "Business Loans", icon: "business_center", desc: "Grow your business with our support." },
  { title: "Vehicle Finance", icon: "directions_car", desc: "Easy vehicle loans with low interest." }
];
</script>
