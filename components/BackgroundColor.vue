<script setup>
  const route = useRoute();
  const img = ref('01.jpg');
</script>

<template>
 <img loading="lazy" :src="img" class="h-full object-cover w-full absolute top-0 left-0 -z-1 animate-fade-in animate-duration-3000">
</template>



<style lang="scss" scoped>
  
</style>