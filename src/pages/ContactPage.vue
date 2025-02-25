<template>
  <q-page class="page-container">
    <div>
      <!-- <q-img fit="cover" src="~assets/background.png" alt="Vex Studio"></q-img> -->
    </div>

    <div>
      <q-page-container>
        <div class="contact-form-container">
          <h5 class="centered-text title-contacts">Send us an Inquiry</h5>
          <div class="row">
            <div class="col contact-form-icons">
              <div>
                <h6>Get in touch with us</h6>
              </div>
              <div>
                <q-btn icon="mail" flat size="xl" @click="window.location.href = 'mailto:'" />
                <q-btn icon="send" flat size="xl" @click="window.location.href = 'mailto:'" />
                <q-btn icon="phone" flat size="xl" @click="window.location.href = 'mailto:'" />
              </div>
            </div>
            <div class="contact-form col-6 text-center">
              <q-input
                dark
                outlined
                rounded
                label-color="secondary"
                color="secondary"
                label="Name"
              />
              <q-input
                dark
                outlined
                rounded
                label-color="secondary"
                color="secondary"
                label="Email"
              />
              <q-input
                dark
                outlined
                rounded
                label-color="secondary"
                type="textarea"
                color="secondary"
                label="Message"
              />
              <q-btn
                rounded
                size="md"
                label="Send"
                color="secondary"
                text-color="primary"
                icon="send"
              ></q-btn>
            </div>
          </div>
        </div>
      </q-page-container>
    </div>
  </q-page>
</template>

<script setup></script>
