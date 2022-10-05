<template>
  <div class="p-4 lg:p-6 flex flex-col items-center">
    <div class="flex flex-row justify-center">
      <NuxtLink class="pb-6 text-lg md:text-3xl text-white font-bold" to="/">Reddit Collectible Avatar Exporter</NuxtLink>
    </div>
    <NuxtPage/>
    <div class="py-12 flex flex-col text-neutral-600 text-center">
      <span>This website is not affiliated or endorsed by reddit Inc. Images hosted on this website are the property of reddit Inc.</span>
      <a class="mt-2 decoration-0 text-amber-500 hover:text-amber-600 duration-200" href="https://github.com/WarmBeer/reddit-collectible-avatar-exporter">View it on GitHub</a>
      <div class="mt-6 px-2 py-1 flex flex-col flex-nowrap justify-center w-full rounded-2xl">
        <span class="mb-2">Useful links:</span>
        <a href="https://www.redditavatars.io/" class="text-amber-500">redditavatars.io</a>
        <a href="https://www.redditportfolio.com/" class="ml-3 md:ml-6 text-amber-500">redditportfolio.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Reddit Avatar Exporter',
  meta: [
    { name: 'description', content: 'Export your Reddit Collectible Avatar with any background you like in high resolution!' }
  ]
})
</script>

<style>
html, body {
  @apply bg-zinc-900;
}

input.input, select.input {
  /*@apply py-2 px-4 w-full text-white bg-neutral-800 border border-neutral-700 rounded-md text-sm shadow-sm cursor-pointer placeholder-neutral-400 hover:border-sky-500 focus:bg-neutral-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition duration-200;*/
  @apply px-4 py-3.5 block w-full max-w-xl bg-transparent text-neutral-200 placeholder-neutral-400 font-medium border-2 border-neutral-800 hover:border-neutral-600 focus:border-neutral-400 text-sm rounded-2xl outline-0 duration-200;
}

label.input-label {
  @apply block mb-2 text-sm font-medium text-neutral-400;
}
</style>
