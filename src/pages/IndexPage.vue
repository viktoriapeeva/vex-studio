<template>
  <q-page class="page-container bg-image">
    <div>
      <!-- <q-img fit="cover" src="~assets/background.png" alt="Vex Studio"></q-img> -->
    </div>
    <q-toolbar class="navbar">
      <div class="nav-links">
        <q-btn dense flat no-wrap no-caps label="Home" @click="router.push('/')" />
        <q-btn dense flat no-wrap no-caps label="Projects" @click="router.push('/projects')" />
        <q-btn dense flat no-wrap no-caps label="About Us" @click="router.push('/about')" />
        <q-btn dense flat no-wrap no-caps label="Contact Us" @click="router.push('/contact')" />
      </div>

      <div class="logo">
        <img src="./../assets/logo.png" alt="Vex Studio" />
      </div>
    </q-toolbar>
    <div class="page-content-main">
      <q-page-container>
        <!-- About Us Section -->
        <div class="row">
          <div class="col">
            <q-img
              class="about-us-image"
              width="800px"
              height="600px"
              src="./../assets/img1.png"
              alt="About Us"
            />
          </div>
          <div class="col">
            <div class="about-us-textbox">
              <h5>About Us</h5>
              VEX Architecture Studio emerged from the creative synergy between visionary architects
              Alice Reed and Max Smith three decades ago. Fueled by their shared passion for pushing
              the boundaries of design, Alice and Max embarked on a journey marked by innovation and
              dedication. From late nights spent sketching ideas to the first bricks laid in their
              modest studio, their relentless pursuit of architectural excellence laid the
              foundation for what would become VEX. From these humble beginnings, our trajectory has
              been nothing short of extraordinary. Over the years, VEX has transcended borders and
              boundaries, establishing a global presence across six dynamic cities. Our portfolio
              spans continents, with projects spanning diverse landscapes in over 30 countries. From
              towering skyscrapers that punctuate urban skylines to intimate residential spaces that
              redefine modern living, each creation embodies our unwavering commitment to elevating
              human experiences through design. At the heart of VEX lies our most valuable asset:
              our team. Comprising over 200 talented individuals, our architects, designers, and
              innovators form the backbone of our studio. United by a shared vision and fueled by
              creativity, they are the driving force behind every project we undertake. Together, we
              strive to craft spaces that transcend mere structures – spaces that resonate with
              humanity's essence and enrich the lives of those who inhabit them. Guided by a
              steadfast commitment to innovation and interconnectedness, VEX stands at the forefront
              of design, poised to embrace the challenges of tomorrow. We believe in harnessing the
              power of architecture to shape a better world – a world that is more sustainable, more
              inclusive, and more beautiful. As we continue to push the boundaries of architectural
              possibility, we invite you to join us on this journey. Welcome to the future of
              design. Welcome to VEX.
            </div>
          </div>
        </div>

        <!-- Send an inquiry -->
        <h5 class="centered-text">Send us an Inquiry</h5>
        <div class="send-message row">
          <div class="send-message-form col-6">
            <!-- <h5 class="centered-text">Send Us a Message</h5> -->
            <q-input outlined rounded bg-color="secondary" label="Name" />
            <q-input outlined rounded bg-color="secondary" label="Email" />
            <q-input outlined rounded bg-color="secondary" type="textarea" label="Message" />
            <q-btn rounded size="md" label="Send" color="accent" icon="send"></q-btn>
          </div>
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
        </div>

        <!-- Our Services -->
        <h5 class="centered-text">Our Services</h5>
        <div class="services">
          <div class="row q-gutter-xl">
            <div @click="flipped = !flipped">
              <div class="col services-container">
                <q-img class="service-image" src="./../assets/service1.png" alt="Service 1">
                  <div class="absolute-full text-subtitle2 flex flex-center">Interior Design</div>
                </q-img>
              </div>
            </div>

            <div class="col services-container">
              <q-img
                no-spinner
                class="service-image"
                src="./../assets/service2.png"
                alt="Service 2"
              >
                <div class="absolute-full text-subtitle2 flex flex-center">Furniture Design</div>
              </q-img>
            </div>
          </div>
          <q-separator />
          <div class="row q-gutter-xl">
            <div class="col services-container">
              <q-img class="service-image" src="./../assets/service3.png" alt="Service 3">
                <div class="absolute-full text-subtitle2 flex flex-center">Renovation</div>
              </q-img>
            </div>
            <div class="col services-container">
              <q-img class="service-image" src="./../assets/service4.png" alt="Service 4">
                <div class="absolute-full text-subtitle2 flex flex-center">
                  Architectural Design
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-page-container>
    </div>
  </q-page>
</template>

<script setup>
//

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const flipped = ref(false)
</script>
