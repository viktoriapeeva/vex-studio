<template>
  <q-page class="page-container">
    <div>
      <!-- <q-img fit="cover" src="~assets/background.png" alt="Vex Studio"></q-img> -->
    </div>

    <div>
      <q-page-container>
        <!-- About Us Section -->

        <div class="full-width">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            arrows
            navigation
            transition-prev="jump-right"
            transition-next="jump-left"
            infinite
            class="carousel"
          >
            <q-carousel-slide class="carousel-image" :name="1" img-src="./../assets/service1.png">
              <div class="q-mt-md text-center carousel-text-title">Interior Design</div>
              <div class="q-mt-md text-center carousel-text">
                One of our most popular services, offering innovative and personalized interior
                design solutions to transform your space. Our team of experts will work closely with
                you to create a design that reflects your unique style and vision.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="./../assets/service2.png">
              <div class="q-mt-md text-center carousel-text-title">Interior Design</div>
              <div class="q-mt-md text-center carousel-text">
                One of our most popular services, offering innovative and personalized interior
                design solutions to transform your space. Our team of experts will work closely with
                you to create a design that reflects your unique style and vision.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" img-src="./../assets/service3.png">
              <div class="q-mt-md text-center carousel-text-title">Interior Design</div>
              <div class="q-mt-md text-center carousel-text">
                One of our most popular services, offering innovative and personalized interior
                design solutions to transform your space. Our team of experts will work closely with
                you to create a design that reflects your unique style and vision.
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" img-src="./../assets/service4.png">
              <div class="q-mt-md text-center carousel-text-title">Interior Design</div>
              <div class="q-mt-md text-center carousel-text">
                One of our most popular services, offering innovative and personalized interior
                design solutions to transform your space. Our team of experts will work closely with
                you to create a design that reflects your unique style and vision.
              </div>
            </q-carousel-slide>
          </q-carousel>

          <div class="row">
            <div class="col-4">
              <ServiceBox
                title="Interior Design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-ruler-square"
              />
            </div>
            <div class="col-4">
              <ServiceBox
                title="Furniture Design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-sofa"
              />
            </div>
            <div class="col-4">
              <ServiceBox
                title="Renovation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-hammer"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <ServiceBox
                title="Architectural Design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-home-city"
              />
            </div>
            <div class="col-4">
              <ServiceBox
                title="Interior Design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-home"
              />
            </div>
            <div class="col-4">
              <ServiceBox
                title="Interior Design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in bibendum sapien. Maecenas placerat, eros at cursus scelerisque, nibh lorem ornare ex, ut condimentum mi velit vitae purus. Nunc lobortis tempus turpis, rhoncus efficitur justo malesuada a. Phasellus neque lectus, tincidunt id imperdiet tempus, gravida non risus. Etiam id lorem quis eros gravida bibendum. "
                icon="mdi-home"
              />
            </div>
          </div>
        </div>
      </q-page-container>
    </div>
  </q-page>
</template>

<script setup>
import ServiceBox from 'src/components/ServiceBox.vue'
import { ref } from 'vue'

const slide = ref(1)
</script>
