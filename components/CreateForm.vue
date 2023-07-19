<script setup>
  
</script>
<template>
 <div class="w-full"> 
  <CustomHeader title="Créer un compte" subtitle="Merci de remplir les champs ci-dessous" />
  <form class="flex flex-col mt-8 w-full gap-4">
    <div class="flex flex-col relative">
      <label for="email" class="font-semibold font-sans text-sm text-gray-900">Email</label>
      <input type="email" class="input" placeholder="mail@mail.com">
    </div>
    <div class="flex flex-col relative">
      <label for="password" class="font-semibold font-sans text-sm text-gray-900">Password</label>
      <input type="password" class="input" placeholder="*********">
    </div>
    <div class="flex flex-col relative">
      <label for="cpassword" class="font-semibold font-sans text-sm text-gray-900">Confirm password</label>
      <input type="password" class="input" placeholder="*********">
    </div>
    <div class="flex flex-col gap-2">
      <button class="bg-gray-900 mt-2 text-base text-gray-50 button">Rejoignez-nous</button>
      <p class="font-medium mt-2 text-center text-xs text-gray-900/80">Vous avez déjà un compte? 
        <NuxtLink to="/auth/login" class="text-gray-900 underline">Connectez-vous ici</NuxtLink>
      </p>
    </div>
  </form>
 </div>
</template>