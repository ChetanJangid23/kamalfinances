<template>
  <!-- Header/Navbar -->
  <q-header elevated class="bg-white text-primary">
    <q-toolbar>
      <!-- Logo -->
      <q-btn flat no-caps no-wrap to="/" class="q-ml-sm flex items-center">
        <img
          src="./logoKFS.png"
          alt="Kamal Finance Logo"
          class="q-mr-sm"
          style="height: 70px; width: auto;"
        />
        <span class="text-h5 text-primary" style="font-weight: 500;">Kamal Finance Services</span>
      </q-btn>

      <q-space />

      <!-- Desktop Navigation -->
      <div class="gt-sm" style="text-transform: none;">
        <q-btn flat label="Home" to="/" :class="{ 'active-link': isActive('/') }" style="text-transform: capitalize;" />
        <q-btn flat label="Services" to="/services" :class="{ 'active-link': isActive('/services') }" style="text-transform: capitalize;" />
        <q-btn flat label="Career" to="/career" :class="{ 'active-link': isActive('/career') }" style="text-transform: capitalize;" />
        <q-btn flat label="Contact Us" to="/contact" :class="{ 'active-link': isActive('/contact') }" style="text-transform: capitalize;" />
        <q-btn flat label="About Us" to="/about" :class="{ 'active-link': isActive('/about') }" style="text-transform: capitalize;" />
      </div>

      <!-- Mobile Menu -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="lt-md text-primary"
        @click="drawer = !drawer"
      />
    </q-toolbar>

    <!-- Mobile Drawer -->
    <q-drawer v-model="drawer" side="right" overlay class="lt-md">
      <q-list>
        <q-item clickable v-ripple to="/" :class="{ 'active-link': isActive('/') }">
          <q-item-section style="text-transform: capitalize;">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/services" :class="{ 'active-link': isActive('/services') }">
          <q-item-section style="text-transform: capitalize;">Services</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/career" :class="{ 'active-link': isActive('/career') }">
          <q-item-section style="text-transform: capitalize;">Career</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact" :class="{ 'active-link': isActive('/contact') }">
          <q-item-section style="text-transform: capitalize;">Contact Us</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" :class="{ 'active-link': isActive('/about') }">
          <q-item-section style="text-transform: capitalize;">About Us</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(false)
const route = useRoute()

const isActive = (path) => route.path === path
</script>

<style>
/* Inactive links */
.q-btn,
.q-item {
  transition: color 0.3s, font-weight 0.3s;
  color: #1976d2;
}

/* Active links */
.active-link {
  color: red !important;
  font-weight: bold;
}
</style>
