<template>
  <section class="happy-customers bg-white">
    <!-- First Row -->
    <div class="row items-center q-col-gutter-xl section-row">
      <!-- Left: Image -->
      <div class="col-12 col-md-6" style="height: 500px;">
        <div class="carousel">
          <img
            v-for="(img, i) in customerImages1"
            :key="i"
            :src="img"
            :alt="'Happy Customer ' + (i+1)"
            :class="{ active: i === currentIndex1 }"
          />
        </div>
      </div>

      <!-- Right: Text -->
      <div class="col-12 col-md-6 text-content">
        <h2 class="text-h4 q-mb-md text-primary">Our Joy, Our Pride</h2>
        <p>
          At <strong>Kamal Finance Service</strong>, nothing makes us happier
          than seeing our customers achieve their dreams — whether it's buying
          their first home, driving away in their dream car, or fulfilling any
          other lifelong wish.
        </p>
        <p>
          Our owner, <strong>Kamal Kishor Suthar</strong>, feels immense pride
          in being a part of your journey and providing the right financial
          support to make your dreams a reality.
        </p>
        <p>
          Join our family of happy customers and let us help you achieve your
          financial goals with ease and confidence.
        </p>

        <!-- Counts in single row -->
        <div class="row text-center q-my-lg counts-row">
          <div class="col">
            <h3 class="text-h5 text-primary" style="margin-bottom: 0;">1500+</h3>
            <p class="text-subtitle2">Happy Clients</p>
          </div>
          <div class="col">
            <h3 class="text-h5 text-primary" style="margin-bottom: 0;">900+</h3>
            <p class="text-subtitle2">Loans Done</p>
          </div>
          <div class="col">
            <h3 class="text-h5 text-primary" style="margin-bottom: 0;">5+</h3>
            <p class="text-subtitle2">Years of Experience</p>
          </div>
        </div>
        <div class="text-right">
          <q-btn color="primary" label="Get in Touch" to="/contact" />
        </div>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row items-center q-col-gutter-xl section-row reverse-on-desktop">
      <!-- Left: Text -->
      <div class="col-12 col-md-6 text-content">
        <h2 class="text-h4 q-mb-md text-primary">Your Dreams, Our Mission</h2>
        <p>
          With a dedicated team and customer-first approach, we ensure smooth,
          quick, and hassle-free financial services that help you move forward
          in life.
        </p>
        <p>
          We believe in building long-term relationships based on trust,
          reliability, and transparency.
        </p>

        <div class="q-mt-lg q-mb-md">
    <h2 class="text-h4 q-mb-sm text-primary">Partnered with Leading Brands and Organizations Globally.</h2>
    <p class="q-mb-xs">
      Trusted by top brands and organizations worldwide.
    </p>
    <p>
      Join a network of industry leaders and innovators.
    </p>
  </div>

      <div class="text-right">
        <q-btn color="primary" label="Explore Services" to="/services" />
      </div>
    </div>
      <!-- Right: Image -->
      <div class="col-12 col-md-6">
        <div class="carousel">
          <img
            v-for="(img, i) in customerImages2"
            :key="i"
            :src="img"
            :alt="'Happy Customer ' + (i+1)"
            :class="{ active: i === currentIndex2 }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// First carousel images
const customerImages1 = [
  './customer1.png',
  './customer2.png',
  './customer3.png'
]

// Second carousel images
const customerImages2 = [
  './customer4.png',
  './customer5.png',
  './customer6.png'
]

const currentIndex1 = ref(0)
const currentIndex2 = ref(0)

let interval1, interval2

onMounted(() => {
  interval1 = setInterval(() => {
    currentIndex1.value = (currentIndex1.value + 1) % customerImages1.length
  }, 5000)

  interval2 = setInterval(() => {
    currentIndex2.value = (currentIndex2.value + 1) % customerImages2.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval1)
  clearInterval(interval2)
})
</script>

<style scoped>
.happy-customers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 0 0;
  background: #f9f9f9;
  gap: 20px;
  flex-wrap: wrap;
}

.customers-left,
.customers-right {
  flex: 1 1 50%;
  padding: 20px;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 500px; /* ensures good height */
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
  max-height: 650px;
  border-radius: 4px;
}
.carousel img.active {
  display: block;
}
.section-row {
  margin-bottom: 4rem;
}

.customers-right h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #222;
}

.customers-right p {
  font-size: 18px;
  line-height: 1.6;
  color: #444;
}

.counts-row {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  gap: 20px;
}

.count-item {
  text-align: center;
  flex: 1;
}

.count-item h3 {
  font-size: 2rem;
  color: #007bff; /* Primary blue */
  margin: 0;
}

.count-item p {
  margin: 5px 0 0;
  font-size: 1rem;
  color: #333;
}



@media (max-width: 768px) {
  .reverse-on-desktop {
    flex-direction: column !important; /* Mobile: Image on top, text below */
  }
  .happy-customers {
    flex-direction: column;
    text-align: center;
  }
  .customers-right {
    padding-left: 0;
  }
  .counts-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>
