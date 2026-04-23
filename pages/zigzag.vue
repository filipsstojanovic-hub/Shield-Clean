<template>
  <main class="min-h-screen w-full bg-white py-32 px-6">
    <div class="max-w-6xl mx-auto flex flex-col gap-8">
      <!-- Panel 1 — left -->
      <div class="flex items-center gap-10 md:gap-16 -ml-24 md:-ml-40">
        <div ref="panel1Ref" class="relative w-[360px] h-[360px] md:w-[480px] md:h-[500px] flex-shrink-0">
          <svg class="w-full h-full scale-x-[-1]" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
            <defs>
              <clipPath id="panel1Clip">
                <path
                  transform="matrix(0 1 1 0 0 0)"
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                />
              </clipPath>
              <filter id="zzGlow1" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
            <image
              href="/posters/zz-panel1.webp"
              x="0"
              y="0"
              width="400"
              height="400"
              clip-path="url(#panel1Clip)"
              preserveAspectRatio="xMidYMid slice"
            />
            <g transform="matrix(0 1 1 0 0 0)">
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.08)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div class="max-w-sm">
          <span class="text-sm font-mono uppercase tracking-widest text-[#02d4ff]">// 01 — Manufacturing</span>
          <h2 class="text-3xl md:text-5xl font-bold text-[#051e2e] mt-4 leading-tight">
            Three production lines, dual-shift operations
          </h2>
          <p class="text-base text-black/60 mt-6 leading-relaxed">
            Fully integrated case forming, loading, and QC inspection — the backbone of our 60M+ round annual output.
          </p>
          <a
            href="#"
            class="inline-block mt-8 text-sm font-mono uppercase tracking-widest text-[#051e2e] border-b-2 border-[#02d4ff] pb-1 hover:text-[#02d4ff] transition-colors"
            >Learn More →</a
          >
        </div>
      </div>

      <!-- Panel 2 — right (panel right, text left) -->
      <div class="flex flex-row-reverse items-center gap-10 md:gap-16 -mr-16 md:-mr-20">
        <div ref="panel2Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
          <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
            <defs>
              <clipPath id="panel2Clip">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                />
              </clipPath>
              <filter id="zzGlow2" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
            <image
              href="https://picsum.photos/seed/shield-p2-mask/800/800"
              x="0"
              :y="panel2ParallaxY"
              width="400"
              height="700"
              clip-path="url(#panel2Clip)"
              preserveAspectRatio="xMidYMid slice"
            />
            <path
              d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
              stroke="rgba(0,0,0,0.08)"
              stroke-width="1.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
              stroke="#02d4ff"
              stroke-width="25"
              stroke-linecap="round"
              opacity="0.6"
              filter="url(#zzGlow2)"
              stroke-dasharray="12 1588"
              stroke-dashoffset="0"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3.2s" repeatCount="indefinite" />
            </path>
            <path
              d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
              stroke="#051e2e"
              stroke-width="1"
              stroke-linecap="round"
              stroke-dasharray="8 1592"
              stroke-dashoffset="0"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3.2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <div class="max-w-sm">
          <span class="text-sm font-mono uppercase tracking-widest text-[#02d4ff]">// 02 — Storage</span>
          <h2 class="text-3xl md:text-5xl font-bold text-[#051e2e] mt-4 leading-tight">
            240,000 kg TNT-equivalent capacity
          </h2>
          <p class="text-base text-black/60 mt-6 leading-relaxed">
            Licensed warehousing for raw materials and finished product — on-site storage feeds European distribution
            without bottlenecks.
          </p>
          <a
            href="#"
            class="inline-block mt-8 text-sm font-mono uppercase tracking-widest text-[#051e2e] border-b-2 border-[#02d4ff] pb-1 hover:text-[#02d4ff] transition-colors"
            >Learn More →</a
          >
        </div>
      </div>

      <!-- Panel 3 — left (panel left, text right) -->
      <div class="flex items-center gap-10 md:gap-16 -ml-32 md:-ml-56">
        <div ref="panel3Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
          <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
            <defs>
              <clipPath id="panel3Clip">
                <path
                  transform="rotate(180 200 200)"
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                />
              </clipPath>
              <filter id="zzGlow3" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
            <image
              href="https://picsum.photos/seed/shield-p3-mask/800/800"
              x="0"
              :y="panel3ParallaxY"
              width="400"
              height="700"
              clip-path="url(#panel3Clip)"
              preserveAspectRatio="xMidYMid slice"
            />
            <g transform="rotate(180 200 200)">
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.08)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="#02d4ff"
                stroke-width="25"
                stroke-linecap="round"
                opacity="0.6"
                filter="url(#zzGlow3)"
                stroke-dasharray="12 1588"
                stroke-dashoffset="0"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="2.8s" repeatCount="indefinite" />
              </path>
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="#051e2e"
                stroke-width="1"
                stroke-linecap="round"
                stroke-dasharray="8 1592"
                stroke-dashoffset="0"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="2.8s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
        <div class="max-w-sm">
          <span class="text-sm font-mono uppercase tracking-widest text-[#02d4ff]">// 03 — Compliance</span>
          <h2 class="text-3xl md:text-5xl font-bold text-[#051e2e] mt-4 leading-tight">
            NATO aligned, 60-day licensing pathway
          </h2>
          <p class="text-base text-black/60 mt-6 leading-relaxed">
            Regulatory framework meets EU defense industry requirements — traceability from material to delivery is
            built into every production step.
          </p>
          <a
            href="#"
            class="inline-block mt-8 text-sm font-mono uppercase tracking-widest text-[#051e2e] border-b-2 border-[#02d4ff] pb-1 hover:text-[#02d4ff] transition-colors"
            >Learn More →</a
          >
        </div>
      </div>

      <!-- Panel 4 — right (panel right, text left) -->
      <div class="flex flex-row-reverse items-center gap-10 md:gap-16 -mr-20 md:-mr-32">
        <div ref="panel4Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
          <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
            <defs>
              <clipPath id="panel4Clip">
                <path
                  transform="matrix(1 0 0 -1 0 400)"
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                />
              </clipPath>
              <filter id="zzGlow4" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>
            <image
              href="https://picsum.photos/seed/shield-p4-mask/800/800"
              x="0"
              :y="panel4ParallaxY"
              width="400"
              height="700"
              clip-path="url(#panel4Clip)"
              preserveAspectRatio="xMidYMid slice"
            />
            <g transform="matrix(1 0 0 -1 0 400)">
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.08)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="#02d4ff"
                stroke-width="25"
                stroke-linecap="round"
                opacity="0.6"
                filter="url(#zzGlow4)"
                stroke-dasharray="12 1588"
                stroke-dashoffset="0"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3.5s" repeatCount="indefinite" />
              </path>
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="#051e2e"
                stroke-width="1"
                stroke-linecap="round"
                stroke-dasharray="8 1592"
                stroke-dashoffset="0"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3.5s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
        <div class="max-w-sm">
          <span class="text-sm font-mono uppercase tracking-widest text-[#02d4ff]">// 04 — Expansion</span>
          <h2 class="text-3xl md:text-5xl font-bold text-[#051e2e] mt-4 leading-tight">1,020 m² ready for new lines</h2>
          <p class="text-base text-black/60 mt-6 leading-relaxed">
            Capacity to scale with European defense demand. Additional 500 m² under construction means we can onboard
            new programs within weeks, not years.
          </p>
          <a
            href="#"
            class="inline-block mt-8 text-sm font-mono uppercase tracking-widest text-[#051e2e] border-b-2 border-[#02d4ff] pb-1 hover:text-[#02d4ff] transition-colors"
            >Learn More →</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Shield · Zigzag Test',
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const panel1Ref = ref<HTMLElement | null>(null)
const panel2Ref = ref<HTMLElement | null>(null)
const panel3Ref = ref<HTMLElement | null>(null)
const panel4Ref = ref<HTMLElement | null>(null)
const panel1ParallaxY = ref(-150)
const panel2ParallaxY = ref(-150)
const panel3ParallaxY = ref(-150)
const panel4ParallaxY = ref(-150)

function computeParallax(el: HTMLElement | null, vh: number): number {
  if (!el) return -150
  const rect = el.getBoundingClientRect()
  const center = rect.top + rect.height / 2
  const offset = (center - vh / 2) / vh
  const clamped = Math.max(-1, Math.min(1, offset))
  // Image 700 tall in 400 panel → 300 slack. Y range [-300, 0], center -150.
  return -150 - clamped * 150
}

onMounted(() => {
  let alive = true
  function onScroll() {
    if (!alive) return
    const vh = window.innerHeight
    panel1ParallaxY.value = computeParallax(panel1Ref.value, vh)
    panel2ParallaxY.value = computeParallax(panel2Ref.value, vh)
    panel3ParallaxY.value = computeParallax(panel3Ref.value, vh)
    panel4ParallaxY.value = computeParallax(panel4Ref.value, vh)
  }
  window.addEventListener('scroll', onScroll)
  onScroll()
  onUnmounted(() => {
    alive = false
    window.removeEventListener('scroll', onScroll)
  })
})
</script>
