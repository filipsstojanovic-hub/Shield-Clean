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
          <a
            href="/"
            @click.prevent="navigateWithCurtain('/')"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors text-left cursor-pointer"
            >Home</a
          >
          <a
            href="/about"
            @click.prevent="navigateWithCurtain('/about')"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors text-left cursor-pointer"
            >About Us</a
          >
          <a
            href="/production"
            @click.prevent="navigateWithCurtain('/production')"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors text-left cursor-pointer"
            >Production</a
          >
          <a
            href="/contact"
            @click.prevent="navigateWithCurtain('/contact')"
            class="menu-item text-3xl font-bold uppercase tracking-tight hover:text-[#02d4ff] transition-colors text-left cursor-pointer"
            >Contact</a
          >
        </nav>
        <div class="mt-auto px-10 pb-10 text-xs font-mono text-white/40 uppercase tracking-widest">
          <p>Balatonfűzfő · HU</p>
          <p class="mt-1">47.5°N 18.4°E</p>
        </div>
      </aside>
    </transition>

    <!-- Page transition curtain — slides in from right to cover, then slides out to left -->
    <transition name="curtain" @after-enter="onCurtainEntered" @after-leave="onCurtainLeft">
      <div v-if="curtainVisible" class="fixed inset-0 z-[100] bg-[#051e2e] pointer-events-none"></div>
    </transition>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'

const menuOpen = ref(false)
const route = useRoute()

// Loader should only ever play once per session. After loader-gone fires, never show HudLoader again.
const loaderShown = ref(false)
const showLoader = computed(() => {
  if (loaderShown.value) return false
  return route.path === '/' || route.path === '/production'
})

// Page transition curtain — shared via composable so page CTAs can trigger the same overlay.
const { curtainVisible, navigateWithCurtain: rawNavigate, onCurtainEntered, onCurtainLeft } = useCurtainNav()
async function navigateWithCurtain(path: string) {
  menuOpen.value = false
  await rawNavigate(path)
}

// Identity gate — session-scoped password protection
const gatePassed = ref(false)
function onGatePassed() {
  gatePassed.value = true
}

const isOverDark = ref(true)
const navColorClass = computed(() => (isOverDark.value ? 'text-white' : 'text-[#051e2e]'))

// Mark loader as shown once its sequence finishes
if (import.meta.client) {
  window.addEventListener('loader-gone', () => {
    loaderShown.value = true
  })
}

onMounted(() => {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  })
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Detect whether nav is currently over a dark background section.
  // Two probe points cover the vertical extent of the burger/logo (top-6..top-8 + 32px icon),
  // so detection flips the instant any dark section overlaps the nav area, not one tick late.
  const PROBE_TOP = 24
  const PROBE_BOTTOM = 56
  let navAlive = true
  function checkNavBg() {
    if (menuOpen.value) {
      isOverDark.value = true
      return
    }
    const darkEls = document.querySelectorAll('[data-nav-dark]')
    let over = false
    for (const el of Array.from(darkEls)) {
      const rect = (el as HTMLElement).getBoundingClientRect()
      // Covers nav area if it intersects the burger's vertical band.
      if (rect.top <= PROBE_BOTTOM && rect.bottom >= PROBE_TOP) {
        over = true
        break
      }
    }
    isOverDark.value = over
  }
  // rAF loop — syncs nav color with Lenis-smoothed scroll frame-by-frame.
  function navBgLoop() {
    if (!navAlive) return
    checkNavBg()
    requestAnimationFrame(navBgLoop)
  }
  requestAnimationFrame(navBgLoop)
  window.addEventListener('resize', checkNavBg, { passive: true })
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

/* Page transition curtain */
.curtain-enter-active {
  transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
.curtain-enter-from {
  transform: translateX(100%);
}
.curtain-leave-active {
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1);
}
.curtain-leave-to {
  transform: translateX(-100%);
}
</style>
