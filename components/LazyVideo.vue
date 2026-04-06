<template>
  <video
    v-if="loaded"
    :src="src"
    muted
    autoplay
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  poster?: string
}>()

const el = ref<HTMLElement | null>(null)
const loaded = ref(false)

onMounted(() => {
  // Preload video in background
  const video = document.createElement('video')
  video.preload = 'auto'
  video.muted = true
  video.oncanplaythrough = () => {
    loaded.value = true
  }
  video.src = props.src
})
</script>
