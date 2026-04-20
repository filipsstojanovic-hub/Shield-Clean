<template>
  <div>
    <HudLoader />
    <nav class="fixed top-6 left-[15%] right-[15%] md:left-[25%] md:right-[25%] z-50 flex items-center justify-between px-5 md:px-6 py-3 bg-black/30 backdrop-blur-[30px] rounded-lg text-white">
      <NuxtLink to="/" class="text-lg font-bold">Shield</NuxtLink>
      <div class="hidden md:flex items-center gap-6 text-sm">
        <!-- Home dropdown -->
        <div class="relative group/home">
          <NuxtLink to="/" class="relative text-white/70 hover:text-white transition-colors duration-300 py-2 flex items-center gap-1">Home <svg class="w-3 h-3 transition-transform duration-300 group-hover/home:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5l3 3 3-3"/></svg></NuxtLink>
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible transition-all duration-300">
            <div class="bg-black/40 backdrop-blur-[30px] rounded-lg py-3 px-4 min-w-[180px] border border-white/10">
              <a href="/#hero" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Hero</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/#capabilities" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Capabilities</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/#production" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Production</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/#contact" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Contact</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
            </div>
          </div>
        </div>
        <!-- About dropdown -->
        <div class="relative group/about">
          <NuxtLink to="/about" class="relative text-white/70 hover:text-white transition-colors duration-300 py-2 flex items-center gap-1">About <svg class="w-3 h-3 transition-transform duration-300 group-hover/about:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5l3 3 3-3"/></svg></NuxtLink>
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/about:opacity-100 group-hover/about:visible transition-all duration-300">
            <div class="bg-black/40 backdrop-blur-[30px] rounded-lg py-3 px-4 min-w-[180px] border border-white/10">
              <a href="/about#overview" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Overview</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/about#ammunition" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Ammunition</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/about#about-capabilities" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Capabilities</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
              <a href="/about#about-contact" class="flex items-center justify-between text-white/50 hover:text-white py-1.5 transition-colors group/item"><span>Contact</span><svg class="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 3l3 3-3 3"/></svg></a>
            </div>
          </div>
        </div>
        <!-- Contact -->
        <NuxtLink to="/contact" class="relative text-white/70 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#02d4ff] after:transition-all after:duration-300 hover:after:w-full">Contact</NuxtLink>
      </div>
      <NuxtLink to="/contact" class="hidden md:block relative overflow-hidden bg-white text-[#051e2e] px-5 py-2 rounded-md text-sm font-semibold uppercase tracking-wider font-mono group">
        <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        <span class="relative z-10">Get Started</span>
      </NuxtLink>
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
