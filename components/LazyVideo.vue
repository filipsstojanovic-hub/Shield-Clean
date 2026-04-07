<template>
  <div ref="wrapper" class="absolute inset-0">
    <video
      v-if="ready"
      :src="src"
      muted
      autoplay
      loop
      playsinline
      class="w-full h-full object-cover"
    />
  </div>
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
  if (!wrapper.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started.value) {
        started.value = true
        observer.disconnect()
        const video = document.createElement('video')
        video.preload = 'auto'
        video.muted = true
        video.oncanplaythrough = () => {
          ready.value = true
        }
        video.src = props.src
      }
    },
    { rootMargin: '200px' }
  )
  observer.observe(wrapper.value)
})
</script>
