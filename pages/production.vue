<template>
  <main>
    <!-- Section 1 - Hero with scroll-expanding masked video -->
    <section
      id="overview"
      ref="heroSection"
      :data-nav-dark="heroProgress >= 0.4 ? '' : null"
      class="relative w-full h-[300vh]"
    >
      <div class="sticky top-0 h-screen w-full bg-white overflow-hidden">
        <!-- Topographic background (visible around the panel mask) -->
        <img
          src="/hero-topo-bg.webp"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <!-- Masked video — clip-path expands with scroll -->
        <div
          class="absolute inset-0"
          :style="{
            clipPath: 'url(#heroPanelMask)',
            WebkitClipPath: 'url(#heroPanelMask)',
          }"
        >
          <video
            ref="heroVideo"
            src="/videos/about-hero.mp4"
            muted
            playsinline
            preload="auto"
            class="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>

        <!-- SVG: clipPath defs + visible outline stroke -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="heroPanelMask" clipPathUnits="userSpaceOnUse">
              <path
                :transform="heroClipTransform"
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 355 Q400 365 390 365 L317.5 365 Q310 365 305 372 L280 395 Q275 400 265 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
              />
            </clipPath>
          </defs>
          <path
            :transform="heroClipTransform"
            d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 355 Q400 365 390 365 L317.5 365 Q310 365 305 372 L280 395 Q275 400 265 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
            stroke="rgba(5,30,46,0.25)"
            stroke-width="1"
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            vector-effect="non-scaling-stroke"
          />
          <!-- Outer outline — same shape as panel, scaled ~5% larger, expands together -->
          <path
            :transform="heroClipOutlineTransform"
            d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 355 Q400 365 390 365 L317.5 365 Q310 365 305 372 L280 395 Q275 400 265 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
            stroke="rgba(5,30,46,0.35)"
            stroke-width="1"
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <!-- Intro headline: visible at start, slides up on scroll (home-hero style) -->
        <div
          ref="heroIntroRef"
          class="absolute bottom-10 left-6 md:bottom-16 md:left-16 z-10 pointer-events-none will-change-transform"
          :style="heroIntroStyle"
        >
          <h1 class="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <span class="block overflow-hidden"><span class="block intro-line">Built to scale</span></span>
            <span class="block overflow-hidden"><span class="block intro-line">NATO-aligned supply.</span></span>
          </h1>
        </div>

        <!-- Top Left — Projectile -->
        <div
          class="absolute top-14 left-[8%] md:top-24 md:left-[11%] text-left z-10 text-white pointer-events-none transition-opacity duration-700"
          :style="{ opacity: heroProgress >= 0.86 ? 1 : 0 }"
        >
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Bullet</div>
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mt-3 max-w-xs">
            &gt; Copper-jacketed lead core — the part that flies out.
          </div>
        </div>

        <!-- Top Right — Propellant -->
        <div
          class="absolute top-14 right-[6%] md:top-24 md:right-[10%] text-right z-10 text-white pointer-events-none transition-opacity duration-700"
          :style="{ opacity: heroProgress >= 0.86 ? 1 : 0 }"
        >
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Powder</div>
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mt-3 max-w-xs ml-auto">
            &gt; Smokeless charge — burns to launch the bullet.
          </div>
        </div>

        <!-- Bottom Left — Case -->
        <div
          class="absolute bottom-10 left-[6%] md:bottom-16 md:left-[9%] text-left z-10 text-white pointer-events-none transition-opacity duration-700"
          :style="{ opacity: heroProgress >= 0.86 ? 1 : 0 }"
        >
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-3 max-w-xs">
            &gt; Holds powder + chambers in the weapon.
          </div>
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Brass Shell</div>
        </div>

        <!-- Bottom Right — Primer -->
        <div
          class="absolute bottom-14 right-[10%] md:bottom-20 md:right-[14%] text-right z-10 text-white pointer-events-none transition-opacity duration-700"
          :style="{ opacity: heroProgress >= 0.86 ? 1 : 0 }"
        >
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-3 max-w-xs ml-auto">
            &gt; Struck by firing pin — sparks the powder.
          </div>
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Ignition Cap</div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="relative flex items-center justify-center h-[50vh] w-full overflow-hidden">
      <div class="max-w-6xl px-6 md:px-8 text-center">
        <h2 class="text-3xl md:text-5xl font-bold leading-snug">
          These four parts assemble the rounds NATO relies on. EuroShield is starting small-caliber production across
          5.56×45mm, 7.62×51mm, and 12.7×99mm.
        </h2>
      </div>
    </section>

    <!-- Section 3 - Two panels -->
    <section id="ammunition" class="relative flex items-start justify-center w-full bg-white px-6 md:px-8 pt-10">
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Panel 1 - 5.56mm -->
        <div class="group cursor-pointer">
          <div class="bg-[#051e2e] text-white rounded-2xl p-8 md:p-10 min-h-[400px] relative overflow-hidden">
            <img
              src="/about-panel3.webp"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/about-panel3-hover.webp"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">5.56×45mm NATO</h3>
          </div>
          <div class="flex items-start mt-6 gap-4 min-h-[120px]">
            <p
              class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
            >
              NATO's standard-issue infantry round. Light, fast, volume-driven — the core of training cycles, frontline
              supply, and allied stockpile replenishment.
            </p>
            <div
              class="bg-black/5 group-hover:bg-[#051e2e] rounded-lg py-2 flex-shrink-0 transition-colors duration-400 ease-out w-14 overflow-hidden relative h-8"
            >
              <svg
                class="w-4 h-4 text-black/20 group-hover:text-[#02d4ff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in group-hover:translate-x-[150%] group-hover:opacity-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
              <svg
                class="w-4 h-4 text-[#02d4ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[350%] opacity-0 transition-all duration-300 ease-out delay-150 group-hover:-translate-x-1/2 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </div>
          </div>
        </div>
        <!-- Panel 2 - 7.62mm -->
        <div class="group cursor-pointer">
          <div class="bg-[#051e2e] text-white rounded-2xl p-8 md:p-10 min-h-[400px] relative overflow-hidden">
            <img
              src="/about-panel2.webp"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/about-panel2-hover.webp"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">7.62×51mm NATO</h3>
          </div>
          <div class="flex items-start mt-6 gap-4 min-h-[120px]">
            <p
              class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
            >
              The full-power battle rifle and machine gun round. Heavier reach, longer range — the backbone of NATO's
              designated marksman platforms and medium machine guns.
            </p>
            <div
              class="bg-black/5 group-hover:bg-[#051e2e] rounded-lg py-2 flex-shrink-0 transition-colors duration-400 ease-out w-14 overflow-hidden relative h-8"
            >
              <svg
                class="w-4 h-4 text-black/20 group-hover:text-[#02d4ff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in group-hover:translate-x-[150%] group-hover:opacity-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
              <svg
                class="w-4 h-4 text-[#02d4ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[350%] opacity-0 transition-all duration-300 ease-out delay-150 group-hover:-translate-x-1/2 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </div>
          </div>
        </div>
        <!-- Panel 3 - .50 cal -->
        <div class="group cursor-pointer">
          <div class="bg-[#051e2e] text-white rounded-2xl p-8 md:p-10 min-h-[400px] relative overflow-hidden">
            <img
              src="/about-panel1.webp"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/about-panel1-hover.webp"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">.50 BMG</h3>
          </div>
          <div class="flex items-start mt-6 gap-4 min-h-[120px]">
            <p
              class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
            >
              NATO's heavy machine gun and anti-materiel standard. Maximum stopping power across vehicle-mounted
              systems, sniper platforms, and perimeter defense.
            </p>
            <div
              class="bg-black/5 group-hover:bg-[#051e2e] rounded-lg py-2 flex-shrink-0 transition-colors duration-400 ease-out w-14 overflow-hidden relative h-8"
            >
              <svg
                class="w-4 h-4 text-black/20 group-hover:text-[#02d4ff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in group-hover:translate-x-[150%] group-hover:opacity-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
              <svg
                class="w-4 h-4 text-[#02d4ff] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[350%] opacity-0 transition-all duration-300 ease-out delay-150 group-hover:-translate-x-1/2 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 — End-to-End Capability (zigzag layout) -->
    <section
      id="about-capabilities"
      ref="section4El"
      class="relative w-full bg-white pt-32 md:pt-40 pb-32 px-6 md:px-16"
    >
      <div class="max-w-7xl mx-auto mb-12 md:mb-16">
        <h2 ref="capIntroHeadingRef" class="max-w-2xl text-3xl md:text-5xl font-bold text-[#051e2e] leading-[1.15]">
          EuroShield anchors a new generation of European defense manufacturing — licensed, scalable, ready for scale.
        </h2>
      </div>
      <div class="max-w-7xl mx-auto flex flex-col gap-8">
        <!-- Row 1 — Panel 1 right, text left -->
        <div class="flex items-center justify-between gap-10">
          <div
            ref="wwdText1Ref"
            :style="{ transform: `translateY(${wwdText1Y}px)` }"
            class="max-w-md flex flex-col justify-between self-stretch pt-52 md:pt-72 pb-16 md:pb-24 will-change-transform"
          >
            <div>
              <div
                class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
              >
                <span class="text-[#051e2e]/40">01</span><span ref="capPanel1LabelWord">Manufacturing</span>
              </div>
              <p ref="capPanel1DescRef" class="text-xl md:text-2xl text-[#051e2e] leading-snug mt-8">
                5,330 m² dedicated storage<br />
                across 19 licensed operational<br />
                units — ready to scale<br />
                production rapidly.
              </p>
            </div>
            <div class="flex gap-6 md:gap-8">
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">120M+</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  rounds / year
                </p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">3</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  production lines
                </p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">2×</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  shift operations
                </p>
              </div>
            </div>
          </div>
          <div ref="wwdPanel1Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="wwdPanel1Clip">
                  <path
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/panel-manufacturing.webp"
                x="0"
                :y="wwdPanel1Y"
                width="400"
                height="700"
                clip-path="url(#wwdPanel1Clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.15)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <!-- Row 2 — Panel 2 left, text right -->
        <div class="flex items-center justify-between gap-10">
          <div ref="wwdPanel2Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="wwdPanel2Clip">
                  <path
                    transform="matrix(-1 0 0 1 400 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/panel-logistics.webp?v=3"
                x="0"
                :y="wwdPanel2Y"
                width="400"
                height="700"
                clip-path="url(#wwdPanel2Clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <g transform="matrix(-1 0 0 1 400 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  stroke="rgba(0,0,0,0.15)"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
          <div
            ref="wwdText2Ref"
            :style="{ transform: `translateY(${wwdText2Y}px)` }"
            class="max-w-md flex flex-col justify-between self-stretch pt-52 md:pt-72 pb-16 md:pb-24 will-change-transform"
          >
            <div>
              <div
                class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
              >
                <span class="text-[#051e2e]/40">02</span><span ref="capPanel2LabelWord">Storage</span>
              </div>
              <p ref="capPanel2DescRef" class="text-xl md:text-2xl text-[#051e2e] leading-snug mt-8">
                Indefinitely licensed storage<br />
                across regulated defense<br />
                classes — scalable to<br />
                mission demand.
              </p>
            </div>
            <div class="flex gap-6 md:gap-8">
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">240T</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">of TNT</p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">19</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  storage units
                </p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">5,330</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  m² storage
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3 — text left, Panel 3 right -->
        <div class="flex items-center justify-between gap-10">
          <div
            ref="wwdText3Ref"
            :style="{ transform: `translateY(${wwdText3Y}px)` }"
            class="max-w-md flex flex-col justify-between self-stretch pt-52 md:pt-72 pb-16 md:pb-24 will-change-transform"
          >
            <div>
              <div
                class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
              >
                <span class="text-[#051e2e]/40">03</span><span ref="capPanel3LabelWord">Scale</span>
              </div>
              <p ref="capPanel3DescRef" class="text-xl md:text-2xl text-[#051e2e] leading-snug mt-8">
                105,000 m² ready for new<br />
                production lines, storage, and<br />
                defense tech development<br />
                — repurposing on demand.
              </p>
            </div>
            <div class="flex gap-6 md:gap-8">
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">350K+</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  m² defense park
                </p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">100K+</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  m² expansion ready
                </p>
              </div>
              <div>
                <span class="block text-3xl md:text-5xl font-bold text-[#051e2e] leading-none">EU</span>
                <p class="text-[10px] md:text-xs text-black/40 font-mono uppercase tracking-[0.15em] mt-1.5">
                  backed pipeline
                </p>
              </div>
            </div>
          </div>
          <div ref="wwdPanel3Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="wwdPanel3Clip">
                  <path
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/panel-compliance.webp?v=2"
                x="0"
                :y="wwdPanel3Y"
                width="400"
                height="700"
                clip-path="url(#wwdPanel3Clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <g>
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  stroke="rgba(0,0,0,0.15)"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative flex flex-col min-h-screen w-full bg-[#051e2e] text-white overflow-hidden">
      <!-- Circuit linije -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
        stroke-width="1.5"
      >
        <defs>
          <filter id="aboutFooterGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <path
          d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296"
          stroke="rgba(255,255,255,0.15)"
          stroke-linecap="round"
        />
        <path
          d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296"
          stroke="#02d4ff"
          stroke-width="25"
          stroke-linecap="round"
          opacity="0.6"
          filter="url(#aboutFooterGlow)"
          stroke-dasharray="12 1188"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path
          d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296"
          stroke="white"
          stroke-width="1"
          stroke-linecap="round"
          stroke-dasharray="8 1192"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path
          d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360"
          stroke="rgba(255,255,255,0.15)"
          stroke-linecap="round"
        />
        <path
          d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360"
          stroke="#02d4ff"
          stroke-width="25"
          stroke-linecap="round"
          opacity="0.6"
          filter="url(#aboutFooterGlow)"
          stroke-dasharray="12 1188"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360"
          stroke="white"
          stroke-width="1"
          stroke-linecap="round"
          stroke-dasharray="8 1192"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800"
          stroke="rgba(255,255,255,0.15)"
          stroke-linecap="round"
        />
        <path
          d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800"
          stroke="#02d4ff"
          stroke-width="25"
          stroke-linecap="round"
          opacity="0.6"
          filter="url(#aboutFooterGlow)"
          stroke-dasharray="12 1188"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path
          d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800"
          stroke="white"
          stroke-width="1"
          stroke-linecap="round"
          stroke-dasharray="8 1192"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path
          d="M0,520 L240,520 Q360,520 282,611 L120,800"
          stroke="#02d4ff"
          stroke-width="25"
          stroke-linecap="round"
          opacity="0.6"
          filter="url(#aboutFooterGlow)"
          stroke-dasharray="12 1188"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M0,520 L240,520 Q360,520 282,611 L120,800"
          stroke="white"
          stroke-width="1"
          stroke-linecap="round"
          stroke-dasharray="8 1192"
          stroke-dashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
      </svg>

      <!-- Heading + CTA -->
      <div class="flex flex-col items-center text-center px-6 pt-32 md:pt-40">
        <h2 class="text-4xl md:text-7xl font-bold mb-10 max-w-3xl leading-tight">The future of defense starts here.</h2>
        <a
          href="/contact"
          @click.prevent="navigateWithCurtain('/contact')"
          @mouseenter="scrambleText"
          @mouseleave="scrambleText"
          class="btn-notch-clip inline-block bg-[#02d4ff] text-[#051e2e] text-xs font-mono uppercase tracking-widest px-8 py-4 cursor-pointer"
          >Request A Briefing</a
        >
      </div>

      <!-- Logo + linkovi -->
      <div class="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pb-8 pt-16 gap-12 mt-auto">
        <div>
          <h3 class="text-3xl font-bold mb-8">EuroShield</h3>
          <p class="text-white/40 text-sm mb-1">Defense Manufacturing</p>
          <p class="text-white/40 text-sm mb-1">Ammunition Production</p>
          <p class="text-white/40 text-sm">NATO Aligned</p>
        </div>
        <div class="flex gap-16 md:gap-24">
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Products</h3>
            <ul class="space-y-3 text-white/60">
              <li>5.56×45mm NATO</li>
              <li>7.62×51mm NATO</li>
              <li>.50 BMG</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Company</h3>
            <ul class="space-y-3 text-white/60">
              <li>
                <a
                  href="/"
                  @click.prevent="navigateWithCurtain('/')"
                  class="hover:text-[#02d4ff] transition-colors cursor-pointer"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/about"
                  @click.prevent="navigateWithCurtain('/about')"
                  class="hover:text-[#02d4ff] transition-colors cursor-pointer"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="/production"
                  @click.prevent="navigateWithCurtain('/production')"
                  class="hover:text-[#02d4ff] transition-colors cursor-pointer"
                  >Production</a
                >
              </li>
              <li>
                <a
                  href="/contact"
                  @click.prevent="navigateWithCurtain('/contact')"
                  class="hover:text-[#02d4ff] transition-colors cursor-pointer"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Reach Us</h3>
          <p class="text-white/60 mb-2">Ready to scale production?</p>
          <p class="text-white/60 mb-6">Connect with our defense team.</p>
          <div class="flex gap-4">
            <a href="#" class="text-white/60 hover:text-[#02d4ff] transition-colors text-lg font-bold">in</a>
            <a href="#" class="text-white/60 hover:text-[#02d4ff] transition-colors text-lg font-bold">X</a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4 md:gap-0"
      >
        <p>&copy; 2026 EuroShield. All rights reserved.</p>
        <div class="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

const { navigateWithCurtain } = useCurtainNav()
const { scrambleText } = useScramble()

useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const scrambleChars = '!<>-_\\/[]{}—=+*^?#________'
function scrambleElement(el: HTMLElement) {
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
      } else output += to
    }
    el.textContent = output
    if (complete === queue.length) return
    frame++
    requestAnimationFrame(update)
  }
  update()
}

// What We Do — text animation refs (mirror home Section 3)
const capIntroHeadingRef = ref<HTMLElement | null>(null)
const capPanel1LabelWord = ref<HTMLElement | null>(null)
const capPanel1DescRef = ref<HTMLElement | null>(null)
const capPanel2LabelWord = ref<HTMLElement | null>(null)
const capPanel2DescRef = ref<HTMLElement | null>(null)
const capPanel3LabelWord = ref<HTMLElement | null>(null)
const capPanel3DescRef = ref<HTMLElement | null>(null)
const capPanel1Animated = ref(false)
const capPanel2Animated = ref(false)
const capPanel3Animated = ref(false)

function animateCapIntroHeading() {
  nextTick(() => {
    if (!capIntroHeadingRef.value) return
    SplitText.create(capIntroHeadingRef.value, {
      type: 'lines',
      linesClass: 'cap-line',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self: any) => {
        gsap.set(self.lines, { yPercent: 100 })
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.to(self.lines, {
                  yPercent: 0,
                  duration: 0.9,
                  ease: 'power3.out',
                  stagger: 0.15,
                })
                observer.disconnect()
              }
            })
          },
          { threshold: 0.3 },
        )
        observer.observe(capIntroHeadingRef.value!)
      },
    })
  })
}

function capStyleCharReveal(el: HTMLElement | null) {
  if (!el) return
  nextTick(() => {
    gsap.set(el, { opacity: 1 })
    SplitText.create(el, {
      type: 'words, chars',
      charsClass: 'char',
      wordsClass: 'word',
      reduceWhiteSpace: false,
      onSplit: (self: any) => {
        gsap.from(self.chars, {
          duration: 0.5,
          opacity: 0,
          y: 8,
          stagger: 0.015,
          ease: 'power2.out',
        })
      },
    })
  })
}

function setupCapPanelReveals() {
  nextTick(() => {
    const panels = [
      {
        panel: wwdPanel1Ref.value,
        label: capPanel1LabelWord.value,
        desc: capPanel1DescRef.value,
        flag: capPanel1Animated,
      },
      {
        panel: wwdPanel2Ref.value,
        label: capPanel2LabelWord.value,
        desc: capPanel2DescRef.value,
        flag: capPanel2Animated,
      },
      {
        panel: wwdPanel3Ref.value,
        label: capPanel3LabelWord.value,
        desc: capPanel3DescRef.value,
        flag: capPanel3Animated,
      },
    ]
    panels.forEach(({ panel, label, desc, flag }) => {
      if (!panel) return
      if (desc) gsap.set(desc, { opacity: 0 })
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !flag.value) {
              flag.value = true
              if (label) scrambleElement(label)
              capStyleCharReveal(desc)
              observer.disconnect()
            }
          })
        },
        { threshold: 0.3 },
      )
      observer.observe(panel)
    })
  })
}

const heroSection = ref<HTMLElement | null>(null)
const heroVideo = ref<HTMLVideoElement | null>(null)
const heroProgress = ref(0)
const section4El = ref<HTMLElement | null>(null)
const activeS4Panel = ref(1)
const activeS4PanelPrev = ref(1)

// Viewport size (for hero clip-path scaling)
const vw = ref(1920)
const vh = ref(1080)

// Panel expands over first 70% of hero scroll with easeInOutCubic for smooth feel.
// Starts short (0.55 height ratio), grows to 3.5× viewport so corner steps/notches are pushed off-screen.
const HERO_PANEL_HEIGHT_RATIO = 0.55

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

const heroClipSize = computed(() => {
  const p = heroProgress.value
  const rawP = Math.min(1, p / 0.7)
  const expandP = easeInOutCubic(rawP)
  const startWidth = vw.value < 768 ? 600 : 800
  const startHeight = startWidth * HERO_PANEL_HEIGHT_RATIO
  const endWidth = vw.value * 3.5
  const endHeight = vh.value * 3.5
  const currentWidth = startWidth + (endWidth - startWidth) * expandP
  const currentHeight = startHeight + (endHeight - startHeight) * expandP
  return {
    kx: currentWidth / 400,
    ky: currentHeight / 400,
    cx: vw.value / 2,
    cy: vh.value / 2,
  }
})

const heroClipTransform = computed(() => {
  const { kx, ky, cx, cy } = heroClipSize.value
  // scale(kx, ky) makes panel narrow in height at start; rotate(90) puts left-side notch on top
  return `translate(${cx} ${cy}) scale(${kx} ${ky}) rotate(90) translate(-200 -200)`
})

// Outer outline — same shape, scaled ~5% larger to create a visible gap around the panel
const heroClipOutlineTransform = computed(() => {
  const { kx, ky, cx, cy } = heroClipSize.value
  return `translate(${cx} ${cy}) scale(${kx * 1.05} ${ky * 1.05}) rotate(90) translate(-200 -200)`
})

// Intro headline — slides up off-screen as user scrolls; color fades dark→white as panel
// expansion starts covering the text area (dark works over white bg, white works over video).
const heroIntroRef = ref<HTMLElement | null>(null)
const heroIntroStyle = computed(() => {
  const p = heroProgress.value
  const ty = -p * 1200
  const t = Math.max(0, Math.min(1, (p - 0.08) / 0.12))
  const r = Math.round(5 + (255 - 5) * t)
  const g = Math.round(30 + (255 - 30) * t)
  const b = Math.round(46 + (255 - 46) * t)
  return {
    transform: `translateY(${ty}px)`,
    color: `rgb(${r}, ${g}, ${b})`,
  }
})

// WWD section parallax — text drifts faster (fg), panels slower (bg) as row scrolls through viewport
const wwdText1Ref = ref<HTMLElement | null>(null)
const wwdText2Ref = ref<HTMLElement | null>(null)
const wwdText3Ref = ref<HTMLElement | null>(null)
const wwdText1Y = ref(0)
const wwdText2Y = ref(0)
const wwdText3Y = ref(0)
const wwdPanel1Ref = ref<HTMLElement | null>(null)
const wwdPanel2Ref = ref<HTMLElement | null>(null)
const wwdPanel3Ref = ref<HTMLElement | null>(null)
const wwdPanel1Y = ref(-150)
const wwdPanel2Y = ref(-150)
const wwdPanel3Y = ref(-150)

// Home-style image parallax: image is 700 tall in 400 viewBox, y slides from -300 to 0 (center -150)
function computeImageParallax(el: HTMLElement | null, vh: number): number {
  if (!el) return -150
  const rect = el.getBoundingClientRect()
  const center = rect.top + rect.height / 2
  const offset = (center - vh / 2) / vh
  const clamped = Math.max(-1, Math.min(1, offset))
  return -150 - clamped * 150
}

function computeTextParallaxTarget(el: HTMLElement | null, intensity = 80): number {
  if (!el) return 0
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const p = (rect.top + rect.height / 2 - vh / 2) / vh
  return -p * intensity
}

// Lerp targets — scroll handler writes raw values here, rAF loop smooths refs toward them
let wwdText1YTarget = 0
let wwdText2YTarget = 0
let wwdText3YTarget = 0
let wwdPanel1YTarget = -150
let wwdPanel2YTarget = -150
let wwdPanel3YTarget = -150

let cleanupFn: (() => void) | null = null

onMounted(() => {
  let alive = true
  gsap.registerPlugin(SplitText)
  animateCapIntroHeading()
  setupCapPanelReveals()

  // Init viewport size + track resize (for clip-path scale)
  vw.value = window.innerWidth
  vh.value = window.innerHeight
  const onResize = () => {
    vw.value = window.innerWidth
    vh.value = window.innerHeight
  }
  window.addEventListener('resize', onResize, { passive: true })

  // Intro headline — hide lines until loader is gone, then slide up from below
  nextTick(() => {
    const lines = heroIntroRef.value?.querySelectorAll('.intro-line')
    if (lines && lines.length) gsap.set(lines, { yPercent: 100 })
  })
  const revealIntro = () => {
    const lines = heroIntroRef.value?.querySelectorAll('.intro-line')
    if (!lines || !lines.length) return
    gsap.to(lines, {
      yPercent: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
    })
  }
  // If loader has already finished (e.g. client-side navigation back to this page), reveal immediately.
  // Otherwise wait for the event.
  if ((window as unknown as { __heroLoaderGone?: boolean }).__heroLoaderGone) {
    nextTick(revealIntro)
  } else {
    window.addEventListener('loader-gone', revealIntro, { once: true })
  }

  // Scroll-scrubbed video: currentTime mapped to hero scroll progress (0→1 over 300vh)
  let rawProgress = 0
  let smoothedProgress = 0

  function heroSmoothLoop() {
    if (!alive) return
    const diff = rawProgress - smoothedProgress
    if (Math.abs(diff) > 0.0005) {
      smoothedProgress += diff * 0.15
    } else {
      smoothedProgress = rawProgress
    }
    const v = heroVideo.value
    if (v && !isNaN(v.duration) && v.duration > 0) {
      const t = smoothedProgress * v.duration
      if (Math.abs(v.currentTime - t) > 0.01) v.currentTime = t
    }
    requestAnimationFrame(heroSmoothLoop)
  }
  requestAnimationFrame(heroSmoothLoop)

  let scrollTicking = false
  function onScroll() {
    if (scrollTicking) return
    scrollTicking = true
    requestAnimationFrame(() => {
      scrollTicking = false
      if (heroSection.value) {
        const rect = heroSection.value.getBoundingClientRect()
        const height = heroSection.value.offsetHeight
        const scrolled = -rect.top
        rawProgress = Math.max(0, Math.min(1, scrolled / (height - window.innerHeight)))
        heroProgress.value = rawProgress
      }
      if (section4El.value) {
        const rect4 = section4El.value.getBoundingClientRect()
        const height4 = section4El.value.offsetHeight
        const scrolled4 = -rect4.top
        const progress4 = Math.max(0, Math.min(1, scrolled4 / (height4 - window.innerHeight)))
        const newPanel = progress4 < 0.33 ? 1 : progress4 < 0.66 ? 2 : 3
        if (newPanel !== activeS4Panel.value) {
          activeS4PanelPrev.value = activeS4Panel.value
          activeS4Panel.value = newPanel
        }
      }
      wwdText1YTarget = computeTextParallaxTarget(wwdText1Ref.value, 80)
      wwdText2YTarget = computeTextParallaxTarget(wwdText2Ref.value, 80)
      wwdText3YTarget = computeTextParallaxTarget(wwdText3Ref.value, 80)
      const vhNow = window.innerHeight
      wwdPanel1YTarget = computeImageParallax(wwdPanel1Ref.value, vhNow)
      wwdPanel2YTarget = computeImageParallax(wwdPanel2Ref.value, vhNow)
      wwdPanel3YTarget = computeImageParallax(wwdPanel3Ref.value, vhNow)
    })
  }
  window.addEventListener('scroll', onScroll)

  // Parallax smooth loop — lerps refs toward scroll-computed targets at 0.12/frame
  const LERP = 0.12
  function smoothParallaxLoop() {
    if (!alive) return
    wwdText1Y.value += (wwdText1YTarget - wwdText1Y.value) * LERP
    wwdText2Y.value += (wwdText2YTarget - wwdText2Y.value) * LERP
    wwdText3Y.value += (wwdText3YTarget - wwdText3Y.value) * LERP
    wwdPanel1Y.value += (wwdPanel1YTarget - wwdPanel1Y.value) * LERP
    wwdPanel2Y.value += (wwdPanel2YTarget - wwdPanel2Y.value) * LERP
    wwdPanel3Y.value += (wwdPanel3YTarget - wwdPanel3Y.value) * LERP
    requestAnimationFrame(smoothParallaxLoop)
  }
  requestAnimationFrame(smoothParallaxLoop)

  cleanupFn = () => {
    alive = false
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
  }
})

onUnmounted(() => {
  cleanupFn?.()
})
</script>

<style scoped>
.num-up-enter-active,
.num-down-enter-active {
  transition:
    transform 0.45s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.3s ease;
}
.num-up-leave-active,
.num-down-leave-active {
  position: absolute;
  transition:
    transform 0.35s cubic-bezier(0.55, 0.06, 0.68, 0.19),
    opacity 0.25s ease;
}
.num-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.num-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.num-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.num-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
