<template>
  <q-footer class="bg-secondary">
    <div class="footer-container">
      <div class="footer-content row">
        <div class="col-3 text-center">
          <q-img class="q-mt-lg" width="120px" src="./../assets/logo-white.png"></q-img>
        </div>
        <div class="col-3">
          <q-list dense class="footer-links">
            <q-item clickable to="/">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable to="/projects">
              <q-item-section>Projects</q-item-section>
            </q-item>
            <q-item clickable to="/about">
              <q-item-section>About Us</q-item-section>
            </q-item>
            <q-item clickable to="/contact">
              <q-item-section>Contact Us</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-3">
          <q-list dense class="footer-links">
            <q-item clickable>
              <q-item-section>Privacy Policy</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Terms & Conditions</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>FAQs</q-item-section>
            </q-item>
          </q-list>
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
</template>
<script setup></script>
