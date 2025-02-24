<template>
  <q-page class="page-container">
    <div>
      <!-- <q-img fit="cover" src="~assets/background.png" alt="Vex Studio"></q-img> -->
    </div>

    <div class="page-content">
      <q-page-container>
        <!-- Send an inquiry -->
        <h5 class="centered-text title-contacts">Send us an Inquiry</h5>
        <div class="row">
          <div class="col send-message-icons">
            <div>
              <h6>Or contact us another way:</h6>
            </div>
            <div>
              <q-btn icon="mail" flat size="xl" @click="window.location.href = 'mailto:'" />
              <q-btn icon="send" flat size="xl" @click="window.location.href = 'mailto:'" />
              <q-btn icon="phone" flat size="xl" @click="window.location.href = 'mailto:'" />
            </div>
          </div>
          <div class="contact-form col-6">
            <q-input outlined rounded bg-color="secondary" label="Name" />
            <q-input outlined rounded bg-color="secondary" label="Email" />
            <q-input outlined rounded bg-color="secondary" type="textarea" label="Message" />
            <q-btn rounded size="md" label="Send" color="accent" icon="send"></q-btn>
          </div>
        </div>
      </q-page-container>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup></script>
