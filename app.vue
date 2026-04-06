<template>
  <div>
    <HudLoader />
    <nav class="fixed top-6 left-[15%] right-[15%] md:left-[25%] md:right-[25%] z-50 flex items-center justify-between px-5 md:px-6 py-3 bg-black/30 backdrop-blur-[30px] rounded-lg text-white">
      <span class="text-lg font-bold">Shield</span>
      <div class="hidden md:flex items-center gap-6 text-sm">
        <a href="#" class="relative text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#02d4ff] after:transition-all after:duration-300 hover:after:w-full">About</a>
        <a href="#" class="relative text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#02d4ff] after:transition-all after:duration-300 hover:after:w-full">Features</a>
        <a href="#" class="relative text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#02d4ff] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
      </div>
      <a href="#" class="hidden md:block relative overflow-hidden bg-white text-[#051e2e] px-5 py-2 rounded-md text-sm font-semibold uppercase tracking-wider font-mono group">
        <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        <span class="relative z-10">Get Started</span>
      </a>
      <button class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'

onMounted(() => {
  const lenis = new Lenis()

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>
