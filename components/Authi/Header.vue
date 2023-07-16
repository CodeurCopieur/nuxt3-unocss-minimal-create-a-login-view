<script setup>
  defineProps({
    title: String,
    subtitle: String,
  });
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <svg height="60" width="60" class="mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
    </svg>
    <h1 class="font-semibold font-sans text-xl text-gray-900">{{ title }}</h1>
    <p class="font-medium font-sans text-base text-center text-gray-900/60">{{ subtitle }}</p>
  </div>
</template>