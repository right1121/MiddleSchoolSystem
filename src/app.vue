<script setup lang="ts">
const { data } = await useFetch('/api/school-lunch')
</script>

<template>
  <div>
    <ul>
      <li v-for="d in data">{{ d }}</li>
    </ul>
    <NuxtWelcome />
  </div>
</template>
