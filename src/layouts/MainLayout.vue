<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container style="padding-bottom: 100px">
      <router-view />

      <!-- <q-header> -->
      <q-toolbar class="sticky-nav-links">
        <!-- background -->

        <q-btn dense flat no-wrap no-caps label="Home" @click="router.push('/')" />
        <q-btn dense flat no-wrap no-caps label="Projects" @click="router.push('/projects')" />
        <q-btn dense flat no-wrap no-caps label="About Us" @click="router.push('/about')" />
        <q-btn dense flat no-wrap no-caps label="Contact Us" @click="router.push('/contact')" />
        <q-space />

        <q-img class="sticky-logo" width="100px" src="./../assets/logo.png"></q-img>
      </q-toolbar>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppFooter from 'src/components/AppFooter.vue'
const router = useRouter()
</script>
