<script setup lang="ts">
const { data } = useFetch('/api/school_lunch')
</script>

<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>
