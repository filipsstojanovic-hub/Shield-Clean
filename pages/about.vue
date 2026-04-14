<template>
  <main>
    <!-- Section 1 - Hero with metak animation -->
    <section ref="heroSection" class="relative w-full h-[400vh]">
      <div class="sticky top-0 h-screen w-full bg-black flex items-center justify-center overflow-hidden">
        <canvas ref="heroCanvas" class="w-full h-full object-cover"></canvas>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="relative flex items-center justify-center h-[50vh] w-full overflow-hidden">
      <div class="max-w-6xl px-6 md:px-8 text-center">
        <h2 class="text-3xl md:text-5xl font-bold leading-snug">A 9,050 m² licensed facility in Balatonfűzfő, Hungary — 19 operational units, 240,000 kg TNT-equivalent capacity, and a 60-day path to full manufacturing authorization.</h2>
      </div>
    </section>

    <!-- Section 3 - Two panels -->
    <section class="relative flex items-start justify-center w-full bg-white px-6 md:px-8 pb-20 pt-10">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Panel 1 - 155mm -->
        <div class="group cursor-pointer">
          <div class="bg-[#051e2e] text-white rounded-2xl p-8 md:p-10 min-h-[400px] relative overflow-hidden">
            <img src="/about-panel1.webp" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
            <img src="/about-panel1-hover.webp" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">155mm Artillery</h3>
          </div>
          <div class="flex items-start mt-6 gap-4">
            <p class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">The highest-growth segment in European defense. 155mm demand is growing at ~17% CAGR, driven by NATO restocking, Ukraine-related donations, and heavy land warfare requirements across Europe.</p>
            <div class="bg-black/5 group-hover:bg-[#051e2e] rounded-lg py-2 flex-shrink-0 transition-all duration-400 ease-out w-10 group-hover:w-14 overflow-hidden relative h-8">
              <svg class="w-4 h-4 text-black/20 group-hover:text-[#02d4ff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in group-hover:translate-x-[150%] group-hover:opacity-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M19 12L13 6M19 12L13 18" /></svg>
              <svg class="w-4 h-4 text-[#02d4ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[350%] opacity-0 transition-all duration-300 ease-out delay-150 group-hover:-translate-x-1/2 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M19 12L13 6M19 12L13 18" /></svg>
            </div>
          </div>
        </div>
        <!-- Panel 2 - 30mm -->
        <div class="group cursor-pointer">
          <div class="bg-[#051e2e] text-white rounded-2xl p-8 md:p-10 min-h-[400px] relative overflow-hidden">
            <img src="/about-panel2.webp" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
            <img src="/about-panel2-hover.webp" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">30mm Medium Caliber</h3>
          </div>
          <div class="flex items-start mt-6 gap-4">
            <p class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">Emerging as a leading medium-caliber segment at ~11% CAGR, supported by shifting mission profiles toward air-burst and HE rounds for C-UAS roles and expanding IFV fleets across NATO.</p>
            <div class="bg-black/5 group-hover:bg-[#051e2e] rounded-lg py-2 flex-shrink-0 transition-all duration-400 ease-out w-10 group-hover:w-14 overflow-hidden relative h-8">
              <svg class="w-4 h-4 text-black/20 group-hover:text-[#02d4ff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in group-hover:translate-x-[150%] group-hover:opacity-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M19 12L13 6M19 12L13 18" /></svg>
              <svg class="w-4 h-4 text-[#02d4ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[350%] opacity-0 transition-all duration-300 ease-out delay-150 group-hover:-translate-x-1/2 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M19 12L13 6M19 12L13 18" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section class="relative flex items-center justify-center h-screen w-full bg-white">
      <span class="text-[12rem] font-bold text-black/5 select-none">04</span>
    </section>

    <!-- Section 5 -->
    <section class="relative flex items-center justify-center h-screen w-full bg-white">
      <span class="text-[12rem] font-bold text-black/5 select-none">05</span>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const heroSection = ref<HTMLElement | null>(null)
const heroCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const cdnBase = 'https://filipsstojanovic-hub.github.io/shield-cdn'
  const totalFrames = 121
  const images: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null)
  let loaded = false
  let lastDrawn = 0

  // Cover draw
  function drawCover(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const scale = Math.max(cw / iw, ch / ih)
    const sw = iw * scale
    const sh = ih * scale
    ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh)
  }

  function sizeCanvas(canvas: HTMLCanvasElement) {
    const dpr = window.devicePixelRatio || 1
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
    }
  }

  function draw(frame: number) {
    const canvas = heroCanvas.value
    if (!canvas || !loaded) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    sizeCanvas(canvas)
    const img = images[frame - 1]
    if (!img?.complete) return
    drawCover(canvas, ctx, img)
  }

  // Load frames in batches
  let firstDone = false
  const batchSize = 6
  let i = 0
  function loadBatch() {
    for (let b = 0; b < batchSize && i < totalFrames; b++, i++) {
      const idx = i
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        images[idx] = img
        if (!firstDone) {
          firstDone = true
          loaded = true
          draw(1)
          window.dispatchEvent(new Event('hero-frames-loaded'))
        }
      }
      img.src = `${cdnBase}/about-frames/frame_${String(idx + 1).padStart(4, '0')}.jpg`
    }
    if (i < totalFrames) setTimeout(loadBatch, 50)
  }
  loadBatch()

  // Scroll handler
  let scrollTicking = false
  window.addEventListener('scroll', () => {
    if (scrollTicking) return
    scrollTicking = true
    requestAnimationFrame(() => {
      scrollTicking = false
      if (heroSection.value && loaded) {
        const rect = heroSection.value.getBoundingClientRect()
        const height = heroSection.value.offsetHeight
        const scrolled = -rect.top
        const progress = Math.max(0, Math.min(1, scrolled / (height - window.innerHeight)))
        const frame = Math.max(1, Math.min(totalFrames, Math.round(progress * (totalFrames - 1)) + 1))
        if (frame !== lastDrawn) { lastDrawn = frame; draw(frame) }
      }
    })
  })
})
</script>

