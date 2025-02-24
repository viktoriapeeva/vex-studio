<template>
  <div class="service-card">
    <div class="service-card-text text-center">
      <q-icon :name="icon" size="50px" />
      <div class="service-card-title">
        {{ title }}
      </div>
      <div class="service-card-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-home',
  },
})
</script>
