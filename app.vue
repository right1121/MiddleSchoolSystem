<script setup lang="ts">
const { data } = await useFetch('/api/school-lunch')
</script>

<template>
  <div>
    <ul>
      <li v-for="d in data" :key="d.value">
        {{ d }}
      </li>
    </ul>
    <NuxtWelcome />
  </div>
</template>
