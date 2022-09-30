<template>
  <div class="mt-12 flex flex-col items-center w-full max-w-xl">
    <input class="input" placeholder='Reddit username. Example: "WarmBiertje".' v-model="user" @keyup.enter.prevent="searchUser">
    <button :disabled="!user" class="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-900 text-white font-semibold rounded-2xl duration-200" @click="searchUser">Let's go!</button>
    <div class="w-72 h-96 mt-6 ">
      <img
          class="w-full h-full"
          :src="exampleImage"
          alt="u/WarmBiertje's avatar"
      >
    </div>
  </div>
</template>

<script setup>
import {navigateTo} from "nuxt/app";
import {ref} from "vue";

const exampleImages = [
    '/images/examples/1.png',
    '/images/examples/2.png',
    '/images/examples/3.png',
    '/images/examples/4.png',
    '/images/examples/5.png',
    '/images/examples/6.png',
    '/images/examples/7.png',
    '/images/examples/8.png',
    '/images/examples/9.png',
    '/images/examples/10.png',
    '/images/examples/11.png',
    '/images/examples/12.png',
    '/images/examples/13.png',
    '/images/examples/14.png',
    '/images/examples/15.png',
    '/images/examples/16.png',
    '/images/examples/17.png',
];

const exampleImage = exampleImages[Math.floor(Math.random()*exampleImages.length)]

const user = ref('');

async function searchUser() {
  if (user.value) {
    await navigateTo(`/user/${user.value}`);
  }
}
</script>

<style scoped>

</style>
