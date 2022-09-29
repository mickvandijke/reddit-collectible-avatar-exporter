<template>
  <div class="p-6 flex flex-col items-center">
    <div class="flex flex-row justify-center">
      <NuxtLink class="py-6 text-lg md:text-3xl text-white font-bold" to="/">Reddit Collectible Avatar Exporter</NuxtLink>
    </div>
    <NuxtPage/>
    <div class="py-12 text-neutral-600 text-center">
      <span>This website is not affiliated or endorsed by reddit Inc. Images hosted on this website are the property of reddit Inc.</span>
    </div>
  </div>
</template>

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
