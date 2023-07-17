<template>
 <div class="w-full">
  <CustomHeader title="bienvenue :)" subtitle="veuillez-vous connecter à votre compte" />
  <form class="flex flex-col mt-8 w-full gap-4">
    <div class="flex flex-col relative">
      <label for="email" class="font-semibold font-sans text-sm text-gray-900">Email</label>
      <input type="email" class="input" placeholder="mail@mail.com">
    </div>
    <div class="flex flex-col relative">
      <label for="password" class="font-semibold font-sans text-sm text-gray-900">Password</label>
      <input type="password" class="input" placeholder="********">
      <div class="font-medium mt-2 text-right text-xs text-gray-900/80">
        <NuxtLink to="/auth/forgot">Mot de passe oublié</NuxtLink>
      </div>
      <div class="flex flex-col gap-2">
        <button class="bg-gray-900 mt-2 text-base text-gray-50 button">Allons-y</button>
        <p class="font-medium mt-2 text-center text-xs text-gray-900/80">Pas encore inscrit? <NuxtLink to="/auth/register">Créer un compte</NuxtLink></p>
      </div>
    </div>
  </form>
 </div>
</template>

