<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container style="padding-bottom: 100px">
      <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <router-view />
      </transition>
      <q-toolbar class="sticky-nav-links">
        <q-btn dense flat no-wrap no-caps label="Home" to="/" />
        <q-btn dense flat no-wrap no-caps label="Projects" to="/projects" />
        <q-btn dense flat no-wrap no-caps label="About Us" to="/about" />
        <q-btn dense flat no-wrap no-caps label="Contact Us" to="/contact" />
        <q-space />

        <q-img class="sticky-logo" width="100px" src="./../assets/logo.png"></q-img>
      </q-toolbar>

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppFooter from 'src/components/AppFooter.vue'
</script>
