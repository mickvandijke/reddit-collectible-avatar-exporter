<template>
  <div class="flex flex-col items-center w-full">
    <h2 class="py-2 text-xl text-amber-500 font-semibold">u/{{ user }}</h2>
    <div class="mt-6">
      <div v-if="pending" class="w-24 w-24 bg-neutral-800 rounded-xl animate-pulse"></div>
      <div v-else-if="avatar" class="w-24">
        <img :src="avatar" :alt="avatarAltText" class="m-auto max-w-full max-h-full">
      </div>
      <h2 v-else class="px-4 py-2 bg-red-600/10 text-red-500 font-semibold rounded-3xl">Could not load avatar!</h2>
    </div>
    <div class="mt-6 py-6 flex flex-col items-center max-w-full">
      <ul class="p-6 flex flex-row flex-nowrap border border-neutral-800 w-full max-w-6xl overflow-x-auto rounded-3xl">
        <li v-for="(background, index) in avatarBackgrounds" @click="setBackground(index)" class="mr-3 flex flex-col shrink-0 cursor-pointer">
          <div class="p-2 bg-neutral-800 border-2 border-transparent rounded-3xl hover:bg-neutral-700 drop-shadow duration-200" :class="{ 'border-amber-500': selectedBackgroundIndex === index }">
            <img class="w-48 h-64" :src="background.path" :alt="background.name">
            <div class="mt-2 text-neutral-200 text-sm text-center font-semibold">{{ background.name }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6 py-6">
      <div class="w-72 h-96 relative">
        <img
            class="w-full h-full absolute"
            :src="selectedBackground.path"
            :alt="avatarAltText"
        >
        <img
            class="absolute"
            :class="{ 'w-36': avatarSize === 'small', 'w-48': avatarSize === AvatarSize.Normal, 'centered': avatarPosition === AvatarPosition.Centered, 'normal': avatarPosition === AvatarPosition.Normal }"
            style="left: 50%;"
            :src="avatar"
            :alt="avatarAltText"
        >
      </div>
    </div>
    <div class="mt-2 flex flex-col items-center w-32">
      <label class="input-label">Avatar size</label>
      <select class="py-2 input capitalize" v-model="avatarSize" @change="drawAvatar">
        <option v-for="size in AvatarSize" :value="size">{{ size }}</option>
      </select>
      <label class="mt-6 input-label">Avatar position</label>
      <select class="py-2 input capitalize" v-model="avatarPosition" @change="drawAvatar">
        <option v-for="position in AvatarPosition" :value="position">{{ position }}</option>
      </select>
    </div>
    <img ref="background" crossorigin="anonymous" class="hidden" :src="`${selectedBackground.path}?not-from-cache-please`" alt="background">
    <img ref="foreground" crossorigin="anonymous" class="hidden" :src="`${avatar}?not-from-cache-please`" alt="foreground">
    <canvas ref="canvas" width="552" height="736" class="hidden"></canvas>
    <div class="mt-6 p-6 flex flex-col items-center text-neutral-200 text-sm font-semibold border border-neutral-800 rounded-3xl w-full max-w-lg">
      <span class="text-amber-500">Please consider sending a small thank you to my ETH wallet ❤️</span>
      <span class="mt-2 overflow-hidden break-all">0xB0753614730408d91Ccc46c1f4210efF0bee648B</span>
    </div>
    <button v-if="!pending && avatar" class="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-2xl duration-200" @click="saveImage">Export avatar</button>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "nuxt/app";
import {onMounted, Ref, ref, watch} from 'vue';
import {getAvatarBackgrounds} from "~/types/AvatarBackgrounds";

enum AvatarSize {
  Normal = "normal",
  Small = "small"
}

enum AvatarPosition {
  Normal = "normal",
  Centered = "centered"
}

const router = useRouter();
const route = useRoute();
const user = route.params.user;

const avatar = ref("");
const avatarBackgrounds = getAvatarBackgrounds();
const selectedBackgroundIndex: Ref<number> = ref(route.query.background ? parseInt(route.query.background as string) : Math.floor(Math.random()*avatarBackgrounds.length));

if (selectedBackgroundIndex.value >= avatarBackgrounds.length || selectedBackgroundIndex.value < 0 ) {
  selectedBackgroundIndex.value = 0;
}

const selectedBackground = ref(avatarBackgrounds[selectedBackgroundIndex.value]);

const avatarSize: Ref<AvatarSize> = ref(AvatarSize.Normal);

switch(route.query.size) {
  case AvatarSize.Small:
    avatarSize.value = AvatarSize.Small;
    break;
  default:
    avatarSize.value = AvatarSize.Normal;
}

const avatarPosition: Ref<AvatarPosition> = ref(AvatarPosition.Normal);

switch(route.query.position) {
  case AvatarPosition.Centered:
    avatarPosition.value = AvatarPosition.Centered;
    break;
  default:
    avatarPosition.value = AvatarPosition.Normal;
}

const avatarIntrinsicWidth = ref(380);
const avatarIntrinsicHeight = ref(498);

const background = ref(null);
const foreground = ref(null);
const canvas = ref(null);

const apiRoute = `https://www.reddit.com/user/${user}/about.json`;
const pending = ref(true);

watch([selectedBackgroundIndex, avatarSize, avatarPosition], () => {
  router.push({
    query: {
      background: selectedBackgroundIndex.value,
      size: avatarSize.value,
      position: avatarPosition.value },
  })
})

fetch(apiRoute)
    .then(async (data) => {
      data = await data.json();

      if (data['data']['snoovatar_img']) {
        avatar.value = data['data']['snoovatar_img'];
      } else {
        avatar.value = "";
      }

      pending.value = false;
    });

onMounted(() => {
  background.value.onload = () => {
    drawAvatar();
  }

  foreground.value.onload = () => {
    avatarIntrinsicWidth.value = foreground.value.width;
    avatarIntrinsicHeight.value = foreground.value.height;
    drawAvatar();
  }
})

function setBackground(index) {
  selectedBackgroundIndex.value = index;
  selectedBackground.value = avatarBackgrounds[selectedBackgroundIndex.value];
}

function getCanvasAvatarWidth() {
  switch (avatarSize.value) {
    case AvatarSize.Normal: {
      return avatarIntrinsicWidth.value;
    }
    case AvatarSize.Small: {
      return avatarIntrinsicWidth.value * 0.75;
    }
  }
}

function getCanvasAvatarHeight() {
  switch (avatarSize.value) {
    case AvatarSize.Normal: {
      return avatarIntrinsicHeight.value;
    }
    case AvatarSize.Small: {
      return avatarIntrinsicHeight.value * 0.75;
    }
  }
}

function getAvatarPositionTop(canvasHeight, avatarHeight) {
  switch (avatarPosition.value) {
    case AvatarPosition.Normal: {
      return canvasHeight - avatarHeight - 75;
    }
    case AvatarPosition.Centered: {
      return (canvasHeight / 2 - avatarHeight / 2)
    }
  }
}

function drawAvatar() {
  const context = canvas.value.getContext('2d');

  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  context.globalAlpha = 1.0;
  context.drawImage(background.value, 0, 0);

  const avatarWidth = getCanvasAvatarWidth();
  const avatarHeight = getCanvasAvatarHeight();

  const top = getAvatarPositionTop(canvas.value.height, avatarHeight);
  const left = canvas.value.width / 2 - avatarWidth / 2;

  context.drawImage(foreground.value, left, top, avatarWidth, avatarHeight);
}

function avatarAltText() {
  return `${user}'s avatar`;
}

function saveImage() {
  let link = document.createElement("a");
  link.download = 'reddit-collectible-avatar.png';
  link.href = canvas.value.toDataURL("image/png").replace("image/png", "image/octet-stream");

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}
</script>

<style scoped>
img.normal {
  bottom: 10%;
  transform: translate(-50%, 0%);
}

img.centered {
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
