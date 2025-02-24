<template>
  <q-layout view="lHh Lpr lff" @scroll="scrollHandler">
    <q-page-container style="padding-bottom: 100px">
      <router-view />
      <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <!-- <q-header> -->
        <q-toolbar class="sticky-nav-links" v-if="enableNavigation">
          <q-btn dense flat no-wrap no-caps label="Home" @click="router.push('/')" />
          <q-btn dense flat no-wrap no-caps label="Projects" @click="router.push('/projects')" />
          <q-btn dense flat no-wrap no-caps label="About Us" @click="router.push('/about')" />
          <q-btn dense flat no-wrap no-caps label="Contact Us" @click="router.push('/contact')" />
          <q-space />

          <q-img class="sticky-logo" src="./../assets/logo.png"></q-img>
        </q-toolbar>
        <!-- </q-header> -->
      </transition>
    </q-page-container>
    <q-footer class="bg-secondary">
      <div class="footer-container">
        <div class="footer-content row">
          <div class="col-3 text-center">
            <q-img class="q-mt-lg" width="120px" src="./../assets/logo-white.png"></q-img>
          </div>
          <div class="col-3">
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-3">
            <ul class="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div class="col-3 text-center">
            <!-- socials -->
            <q-btn flat round dense icon="mdi-facebook" />
            <q-btn flat round dense icon="mdi-twitter" />
            <q-btn flat round dense icon="mdi-instagram" />
            <q-btn flat round dense icon="mdi-linkedin" />
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const enableNavigation = ref(false)

const scrollHandler = (e) => {
  if (e.position > 500) {
    enableNavigation.value = true
  } else {
    enableNavigation.value = false
  }
}
</script>
