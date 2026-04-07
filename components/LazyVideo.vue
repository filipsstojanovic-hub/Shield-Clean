<template>
  <video
    v-if="ready"
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

const wrapper = ref<HTMLElement | null>(null)
const ready = ref(false)
const started = ref(false)

onMounted(() => {
  // Find parent element to observe
  const parent = getCurrentInstance()?.vnode.el?.parentElement
  if (!parent) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started.value) {
        started.value = true
        observer.disconnect()
        // Preload video in background
        const video = document.createElement('video')
        video.preload = 'auto'
        video.muted = true
        video.oncanplaythrough = () => {
          ready.value = true
        }
        video.src = props.src
      }
    },
    { rootMargin: '200px' } // Start loading 200px before visible
  )
  observer.observe(parent)
})
</script>
