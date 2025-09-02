<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header/Navbar -->
    <!-- <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Kamal Finance Services
        </q-toolbar-title>

        <q-btn flat label="Home" to="/" />
        <q-btn flat label="About" to="/about" />
        <q-btn flat label="Services" to="/services" />
        <q-btn flat label="Contact Us" to="/contact" />

      </q-toolbar>
    </q-header> -->
    <HeaderNav />
    <!-- Page container -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>

import HeaderNav from '../components/HeaderNav.vue'
</script>
