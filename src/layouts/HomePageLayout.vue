<template>
  <q-layout view="lHh Lpr lff" @scroll="scrollHandler">
    <q-page-container style="padding-bottom: 100px">
      <!-- <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      > -->
      <router-view />
      <!-- </transition> -->
      <transition
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <q-toolbar class="sticky-nav-links" v-if="enableNavigation">
          <q-btn dense flat no-wrap no-caps label="Home" to="/" />
          <q-btn dense flat no-wrap no-caps label="Projects" to="/projects" />
          <q-btn dense flat no-wrap no-caps label="About Us" to="/about" />
          <q-btn dense flat no-wrap no-caps label="Contact Us" to="/contact" />
          <q-space />

          <q-img class="sticky-logo" src="./../assets/logo.png"></q-img>
        </q-toolbar>
      </transition>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppFooter from 'src/components/AppFooter.vue'
import { ref } from 'vue'
const enableNavigation = ref(false)

const scrollHandler = (e) => {
  if (e.position > 500) {
    enableNavigation.value = true
  } else {
    enableNavigation.value = false
  }
}
</script>
