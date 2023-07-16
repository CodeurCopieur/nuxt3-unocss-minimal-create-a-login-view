<script setup>
  defineProps({
    title: String,
    subtitle: String,
  });
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <img src="/" height="60" width="60" class="mx-auto" alt="logo">
    <h1 class="font-semibold font-sans text-xl text-gray-900">{{ title }}</h1>
    <p class="font-medium font-sans text-base text-center text-gray-900/60">{{ subtitle }}</p>
  </div>
</template>