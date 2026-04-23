<template>
  <main>
    <!-- Section 1 - Hero with reverse video -->
    <section id="overview" ref="heroSection" data-nav-dark class="relative w-full h-[300vh]">
      <div class="sticky top-0 h-screen w-full bg-black flex items-center justify-center overflow-hidden">
        <video
          ref="heroVideo"
          src="/videos/about-hero.mp4"
          muted
          playsinline
          preload="auto"
          class="w-full h-full object-cover"
        ></video>

        <!-- Top Left — Projectile -->
        <div class="absolute top-14 left-[8%] md:top-24 md:left-[11%] text-left z-10 text-white pointer-events-none">
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Bullet</div>
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mt-3 max-w-xs">
            &gt; Copper-jacketed lead core — the part that flies out.
          </div>
        </div>

        <!-- Top Right — Propellant -->
        <div class="absolute top-14 right-[6%] md:top-24 md:right-[10%] text-right z-10 text-white pointer-events-none">
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Powder</div>
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mt-3 max-w-xs ml-auto">
            &gt; Smokeless charge — burns to launch the bullet.
          </div>
        </div>

        <!-- Bottom Left — Case -->
        <div
          class="absolute bottom-10 left-[6%] md:bottom-16 md:left-[9%] text-left z-10 text-white pointer-events-none"
        >
          <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-3 max-w-xs">
            &gt; Holds powder + chambers in the weapon.
          </div>
          <div class="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">Brass Shell</div>
        </div>

        <!-- Bottom Right — Primer -->
        <div
          class="absolute bottom-14 right-[10%] md:bottom-20 md:right-[14%] text-right z-10 text-white pointer-events-none"
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
          A 350,000 m² defense park in Balatonfűzfő, Hungary — extensive capacity for strategic partnerships with
          defense technology innovators and emerging players.
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
              src="/about-panel1.webp"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/about-panel1-hover.webp"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">5.56×45mm NATO</h3>
          </div>
          <div class="flex items-start mt-6 gap-4 min-h-[120px]">
            <p
              class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
            >
              The standard infantry round across NATO forces. Lightweight, high-velocity, and optimized for modern
              assault rifles — 5.56mm remains the backbone of small arms ammunition with sustained demand driven by
              training cycles and stockpile replenishment.
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
              The full-power battle rifle and machine gun round. Heavier and harder-hitting than 5.56mm, 7.62×51mm
              serves as the primary medium machine gun and designated marksman cartridge across NATO — critical for
              suppressive fire and extended-range engagements.
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
              src="/about-panel3.webp"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/about-panel3-hover.webp"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 class="text-2xl md:text-3xl font-bold relative z-10">.50 BMG</h3>
          </div>
          <div class="flex items-start mt-6 gap-4 min-h-[120px]">
            <p
              class="text-black/50 text-sm md:text-base leading-relaxed px-2 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out"
            >
              The heavy machine gun and anti-materiel standard. 12.7×99mm delivers devastating stopping power at extreme
              range — used in vehicle-mounted weapon systems, sniper platforms, and perimeter defense across every NATO
              theatre of operation.
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

    <section class="relative flex items-end justify-center h-[50vh] w-full pb-16 overflow-visible">
      <div
        class="absolute left-0 right-0 top-0 h-[calc(100%+30vh)] pointer-events-none"
        style="
          mask-image: radial-gradient(ellipse 70% 50% at 50% 30%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 70% 50% at 50% 30%, black 20%, transparent 100%);
        "
      >
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="20" y2="16" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
              <line x1="20" y1="24" x2="20" y2="40" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
              <line x1="0" y1="20" x2="16" y2="20" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
              <line x1="24" y1="20" x2="40" y2="20" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
              <circle cx="20" cy="20" r="1.5" fill="rgba(0,0,0,0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>
      <div class="max-w-6xl px-6 md:px-8 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold leading-snug">
          Three integrated capabilities — manufacturing, logistics, and joint innovation — operating from a single
          licensed defense park.
        </h2>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="about-capabilities" ref="section4El" class="relative h-[250vh] w-full bg-white">
      <!-- Text left side - sticky -->
      <div class="sticky top-0 h-screen flex items-center pointer-events-none">
        <!-- Panel number -->
        <span class="absolute left-[15%] text-sm font-mono text-black/30 flex -mt-[10vh]"
          >0<span class="inline-block h-[1.2em] overflow-hidden relative w-[0.65em]"
            ><transition :name="activeS4Panel > activeS4PanelPrev ? 'num-up' : 'num-down'"
              ><span :key="activeS4Panel" class="block">{{ activeS4Panel }}</span></transition
            ></span
          ></span
        >
        <!-- Text -->
        <div class="max-w-md pointer-events-auto -mt-[10vh] ml-[28%]">
          <h3 class="text-sm font-mono uppercase tracking-wider text-black/40">What We Do</h3>
          <h1 class="text-4xl md:text-5xl font-bold text-[#051e2e] leading-tight mt-4">End-to-End Capability</h1>
          <h2 class="text-lg md:text-xl text-black/50 mt-4 leading-relaxed">
            From raw material to finished round — fully integrated manufacturing, storage, and partnerships under one
            roof.
          </h2>
        </div>
      </div>
      <div class="absolute right-[10%] top-[10%] w-[400px] h-[400px] md:w-[550px] md:h-[550px]">
        <img
          src="/panel-manufacturing.webp"
          class="absolute top-[22%] right-[37%] w-[45%] h-[45%] object-contain z-[5] pointer-events-none"
        />
        <div class="absolute top-16 right-20 text-right z-10 space-y-4">
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">120M+</span>
            <p class="text-xs text-black/30 font-mono uppercase">rounds / year</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">3</span>
            <p class="text-xs text-black/30 font-mono uppercase">production lines</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">2×</span>
            <p class="text-xs text-black/30 font-mono uppercase">shift operations</p>
          </div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-end pb-16 px-14 md:px-20 z-10">
          <span class="text-xs font-mono uppercase tracking-wider text-black/30">01 — Manufacturing</span>
          <h3 class="text-xl md:text-2xl font-bold text-[#051e2e] mt-3 leading-snug">Three production lines</h3>
          <p class="text-xs text-black/40 mt-2 leading-relaxed">
            Dual-shift operations with full case forming, loading, and QC inspection.
          </p>
        </div>
        <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
          <defs>
            <filter id="panelGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
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
            filter="url(#panelGlow)"
            stroke-dasharray="12 1588"
            stroke-dashoffset="0"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3s" repeatCount="indefinite" />
          </path>
          <path
            d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
            stroke="#051e2e"
            stroke-width="1"
            stroke-linecap="round"
            stroke-dasharray="8 1592"
            stroke-dashoffset="0"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <div class="absolute right-[10%] top-[35%] w-[400px] h-[400px] md:w-[550px] md:h-[550px]">
        <img
          src="/panel-logistics.webp"
          class="absolute top-[22%] right-[25%] w-[45%] h-[45%] object-contain z-[5] pointer-events-none"
        />
        <div class="absolute top-16 left-14 text-left z-10 space-y-4">
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">240T</span>
            <p class="text-xs text-black/30 font-mono uppercase">of tnt</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">19</span>
            <p class="text-xs text-black/30 font-mono uppercase">storage units</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">5,330</span>
            <p class="text-xs text-black/30 font-mono uppercase">m² storage</p>
          </div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-end pb-16 px-14 md:px-20 z-10">
          <span class="text-xs font-mono uppercase tracking-wider text-black/30">02 — Storage & Logistics</span>
          <h3 class="text-xl md:text-2xl font-bold text-[#051e2e] mt-3 leading-snug">Raw material to delivery</h3>
          <p class="text-xs text-black/40 mt-2 leading-relaxed">
            On-site storage for brass, lead, powder, and primers. Licensed warehousing and European distribution.
          </p>
        </div>
        <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none" style="transform: scaleX(-1)">
          <defs>
            <filter id="panelGlow2" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
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
            filter="url(#panelGlow2)"
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
        </svg>
      </div>
      <div class="absolute right-[10%] top-[60%] w-[400px] h-[400px] md:w-[550px] md:h-[550px]">
        <img
          src="/panel-compliance.webp"
          class="absolute top-[22%] right-[22%] w-[45%] h-[45%] object-contain z-[5] pointer-events-none"
        />
        <div class="absolute top-16 left-14 text-left z-10 space-y-4">
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">350K+</span>
            <p class="text-xs text-black/30 font-mono uppercase">m² defense park</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">100K+</span>
            <p class="text-xs text-black/30 font-mono uppercase">m² expansion ready</p>
          </div>
          <div>
            <span class="text-2xl md:text-3xl font-bold text-[#051e2e]">EU</span>
            <p class="text-xs text-black/30 font-mono uppercase">backed pipeline</p>
            <p class="text-xs mt-1 font-mono uppercase">
              <span class="font-bold text-[#051e2e]">Licenses</span>
              <span class="text-black/30"> at your disposal</span>
            </p>
          </div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-end pb-24 px-14 md:px-20 z-10">
          <span class="text-xs font-mono uppercase tracking-wider text-black/30">03 — Scale & Innovate</span>
          <h3 class="text-xl md:text-2xl font-bold text-[#051e2e] mt-3 leading-snug">Joint ventures across defense</h3>
          <p class="text-xs text-black/40 mt-2 leading-relaxed">
            Defense park ready to innovate — open to partnerships with any defense-related company.
          </p>
        </div>
        <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none" style="transform: rotate(180deg)">
          <defs>
            <filter id="panelGlow3" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
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
            filter="url(#panelGlow3)"
            stroke-dasharray="12 1588"
            stroke-dashoffset="0"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="4s" repeatCount="indefinite" />
          </path>
          <path
            d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
            stroke="#051e2e"
            stroke-width="1"
            stroke-linecap="round"
            stroke-dasharray="8 1592"
            stroke-dashoffset="0"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-1600" dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </section>

    <!-- Section 5 - Contact -->
    <section id="about-contact" class="relative flex items-center justify-center w-full -mt-[15vh] px-6 pb-16">
      <div class="w-full max-w-2xl">
        <div class="flex flex-col items-center mb-12">
          <div class="flex gap-2 mb-4">
            <span class="w-3 h-3 rounded-full bg-[#02d4ff]"></span>
            <span class="w-3 h-3 rounded-full bg-black/15"></span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-center">Ready to scale the EU defense sector? Get in touch</h2>
        </div>
        <form class="space-y-10">
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Full Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors"
            />
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Role or position *</label>
            <input
              type="text"
              placeholder="Project manager"
              class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors"
            />
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Phone number</label>
            <input
              type="tel"
              placeholder="(323) 555-0147"
              class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors"
            />
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Email *</label>
            <input
              type="email"
              placeholder="name@email.com"
              class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors"
            />
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Company name *</label>
            <input
              type="text"
              placeholder="Acme"
              class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors"
            />
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">How Can We Help? *</label>
            <div class="relative">
              <select
                class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none appearance-none focus:border-[#02d4ff] transition-colors"
              >
                <option value="">Select options</option>
                <option value="general">General inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="procurement">Procurement</option>
              </select>
              <span class="absolute right-0 bottom-3 text-black/30">&#8595;</span>
            </div>
          </div>
          <button
            type="submit"
            class="relative overflow-hidden w-full bg-black/5 text-black/30 py-5 text-sm font-semibold uppercase tracking-widest font-mono group rounded-lg mt-4"
          >
            <span
              class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
            ></span>
            <span class="relative z-10 group-hover:text-[#051e2e] transition-colors duration-300">Send Message</span>
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative flex flex-col min-h-screen w-full bg-[#051e2e] text-white overflow-hidden">
      <!-- Trapezoid vrh -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-[55px] pointer-events-none rotate-180">
        <svg class="w-[calc(100%+50px)] h-full -ml-[25px]" viewBox="0 0 850 55">
          <path
            d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z"
            fill="white"
          />
        </svg>
      </div>

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
        <NuxtLink
          to="/contact"
          class="relative overflow-hidden bg-white/10 text-white/60 px-12 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest font-mono group"
        >
          <span
            class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
          ></span>
          <span class="relative z-10 group-hover:text-[#051e2e] transition-colors duration-300"
            >Request A Briefing</span
          >
        </NuxtLink>
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
              <li><NuxtLink to="/" class="hover:text-[#02d4ff] transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-[#02d4ff] transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-[#02d4ff] transition-colors">Contact</NuxtLink></li>
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
useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const heroSection = ref<HTMLElement | null>(null)
const heroVideo = ref<HTMLVideoElement | null>(null)
const section4El = ref<HTMLElement | null>(null)
const activeS4Panel = ref(1)
const activeS4PanelPrev = ref(1)

let cleanupFn: (() => void) | null = null

onMounted(() => {
  let alive = true

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
    })
  }
  window.addEventListener('scroll', onScroll)

  cleanupFn = () => {
    alive = false
    window.removeEventListener('scroll', onScroll)
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
