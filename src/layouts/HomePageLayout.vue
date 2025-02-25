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
      </transition>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppFooter from 'src/components/AppFooter.vue'
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
