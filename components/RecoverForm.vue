<template>
  <div class="w-full"> 
   <CustomHeader title="Récupérer votre mot de passe" subtitle="Entrez votre e-mail avec lequel le compte a été enregistré" />
   <form class="flex flex-col mt-8 w-full gap-4">
     <div class="flex flex-col relative">
       <label for="email" class="font-semibold font-sans text-sm text-gray-900">Email</label>
       <input type="email" class="input" placeholder="mail@mail.com">
     </div>
     <div class="flex flex-col gap-2">
       <button class="bg-gray-900 mt-2 text-base text-gray-50 button">Récupérer</button>
       <p class="font-medium mt-2 text-center text-xs text-gray-900/80">pas encore de mail? 
         <NuxtLink to="/" class="text-gray-900 underline">Cliquez ici</NuxtLink>
       </p>
     </div>
   </form>
  </div>
 </template>