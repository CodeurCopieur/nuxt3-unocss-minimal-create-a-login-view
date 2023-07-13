<script setup>
  
</script>
<template>
  <NuxtLayout name="default">
    <div class="h-screen w-full flex items-center justify-center">
      <div class="w-full md:w-1/2 lg:w-1/3">
        <Card>
          <div class="flex flex-col gap-4">
            <svg width="300" height="200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
            </svg>
            <nuxt-link class="button mt-8" to="">Login</nuxt-link>
            <span class="font-semibold mx-auto text-xs text-gray-900 inline-bold inline-block">or</span>
            <nuxt-link class="button-secondary" to="">Create account</nuxt-link>
          </div>
        </Card>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  
</style>