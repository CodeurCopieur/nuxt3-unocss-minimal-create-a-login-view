<script setup>
  const route = useRoute();
  const img = ref('01.jpg');

  watch(() => route.name, (curr,  prev) => {
    const random = Math.floor(Math.random() * (10 - 1) + 1)
    img.value = `/0${random}.jpg`
  });
</script>

<template>
 <img loading="lazy" :src="img" class="h-full object-cover w-full absolute top-0 left-0 -z-1 animate-fade-in animate-duration-3000">
</template>
