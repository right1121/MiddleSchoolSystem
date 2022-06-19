<script setup lang="ts">
const { data } = useFetch('/api/school-lunch')
</script>

<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>
