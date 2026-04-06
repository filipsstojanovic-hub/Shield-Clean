<template>
  <div ref="el" class="reveal-y" :class="{ 'reveal-y-visible': visible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  observer.observe(el.value)
})
</script>

<style scoped>
.reveal-y {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
  transition: opacity .6s cubic-bezier(.39,.575,.565,1),
              transform 1.2s cubic-bezier(.19,1,.22,1);
}
.reveal-y-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
