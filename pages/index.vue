<template>
  <div class="mt-12 flex flex-col justify-center w-full max-w-xl">
    <input class="input" placeholder='Reddit username. Example: "WarmBiertje".' v-model="user" @keyup.enter.prevent="searchUser">
    <button :disabled="!user" class="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-900 text-white font-semibold rounded-2xl duration-200" @click="searchUser">Let's go!</button>
  </div>
</template>

<script setup>
import {navigateTo} from "nuxt/app";
import {ref} from "vue";

const user = ref('');

async function searchUser() {
  if (user.value) {
    await navigateTo(`/user/${user.value}`);
  }
}
</script>

<style scoped>

</style>
