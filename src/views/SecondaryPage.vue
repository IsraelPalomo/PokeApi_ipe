<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: { require: true, default: 'Secondary Page', type: String },
});
</script>
