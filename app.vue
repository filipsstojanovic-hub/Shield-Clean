<template>
  <div>
    <HudLoader v-if="showLoader" />
    <IdentityGate v-if="!gatePassed" :wait-for-loader="showLoader" @passed="onGatePassed" />

    <!-- Logo top-left -->
    <NuxtLink
      to="/"
      class="fixed top-6 left-6 md:top-8 md:left-10 z-[60] text-xl font-bold tracking-wider transition-colors duration-300"
      :class="navColorClass"
      >EuroShield</NuxtLink
    >

    <!-- Menu button top-right -->
    <button
      @click="menuOpen = !menuOpen"
      class="fixed top-6 right-6 md:top-8 md:right-10 z-[60] flex items-center gap-4 transition-colors duration-300"
      :class="navColorClass"
    >
      <span class="text-sm font-mono uppercase tracking-widest">{{ menuOpen ? 'Close' : 'Menu' }}</span>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-8 h-8 transition-transform ease-in-out duration-500"
        :class="menuOpen ? '-rotate-45' : ''"
      >
        <path
          class="transition-all ease-in-out duration-500"
          :class="menuOpen ? '[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]' : '[stroke-dasharray:12_63]'"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path d="M7 16 27 16" />
      </svg>
    </button>

    <!-- Backdrop blur when menu open -->
    <transition name="backdrop">
      <div v-if="menuOpen" @click="menuOpen = false" class="fixed inset-0 z-40 backdrop-blur-md bg-black/30"></div>
    </transition>

    <!-- Side drawer -->
    <transition name="drawer">
      <aside
        v-if="menuOpen"
        class="fixed top-0 right-0 h-screen w-full md:w-1/4 z-50 bg-[#051e2e] text-white flex flex-col"
      >
        <nav class="flex flex-col gap-8 px-10 pt-32">
          <NuxtLink
            @click="menuOpen = false"
            to="/"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors"
            >Home</NuxtLink
          >
          <NuxtLink
            @click="menuOpen = false"
            to="/about"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors"
            >About Us</NuxtLink
          >
          <NuxtLink
            @click="menuOpen = false"
            to="/contact"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors"
            >Contact</NuxtLink
          >
        </nav>
        <div class="mt-auto px-10 pb-10 text-xs font-mono text-white/40 uppercase tracking-widest">
          <p>Balatonfűzfő · HU</p>
          <p class="mt-1">47.5°N 18.4°E</p>
        </div>
      </aside>
    </transition>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'

const menuOpen = ref(false)
const route = useRoute()
const showLoader = computed(() => route.path === '/' || route.path === '/about')

// Identity gate — session-scoped password protection
const gatePassed = ref(false)
function onGatePassed() {
  gatePassed.value = true
}

const isOverDark = ref(true)
const navColorClass = computed(() => (isOverDark.value ? 'text-white' : 'text-[#051e2e]'))

onMounted(() => {
  const lenis = new Lenis({
    lerp: 0.18,
    wheelMultiplier: 1.2,
    touchMultiplier: 2,
  })
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Detect whether nav is currently over a dark background section
  const probeY = 40
  function checkNavBg() {
    if (menuOpen.value) {
      isOverDark.value = true
      return
    }
    const darkEls = document.querySelectorAll('[data-nav-dark]')
    let over = false
    darkEls.forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect()
      if (rect.top <= probeY && rect.bottom >= probeY) over = true
    })
    isOverDark.value = over
  }
  window.addEventListener('scroll', checkNavBg, { passive: true })
  nextTick(checkNavBg)
  watch(menuOpen, () => checkNavBg())

  // Scramble menu items when drawer opens
  const scrambleChars = '!<>-_\\/[]{}—=+*^?#________'
  function scrambleEl(el: HTMLElement) {
    const target = el.dataset.scrambleTarget || el.textContent || ''
    el.dataset.scrambleTarget = target
    const queue: Array<{ to: string; start: number; end: number; char?: string }> = []
    for (let i = 0; i < target.length; i++) {
      const start = Math.floor(Math.random() * 15)
      const end = start + Math.floor(Math.random() * 15) + 8
      queue.push({ to: target[i], start, end })
    }
    let frame = 0
    function update() {
      let output = ''
      let complete = 0
      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i]
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28)
            queue[i].char = scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          output += queue[i].char
        } else output += to === ' ' ? ' ' : ''
      }
      el.textContent = output
      if (complete === queue.length) return
      frame++
      requestAnimationFrame(update)
    }
    update()
  }
  watch(menuOpen, (open) => {
    if (open) {
      nextTick(() => {
        document.querySelectorAll<HTMLElement>('.menu-item').forEach((el, i) => {
          setTimeout(() => scrambleEl(el), i * 80)
        })
      })
    }
  })
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
