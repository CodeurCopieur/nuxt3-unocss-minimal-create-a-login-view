<script setup>
  
</script>

<template>
  <div class="flex h-screen w-full relative items-center justify-center">
    <div class="w-1/5">
      <Card>
        <slot/>
      </Card>
      <NuxtLink to="" class="flex font-medium mt-2 text-base text-gray-900 gap-2 items-center">
        <div>
          <svg class="h-4 w-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/></g></svg>
        </div>
        Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>