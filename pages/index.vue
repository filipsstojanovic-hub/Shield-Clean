<template>
  <main>
    <!-- Hero -->
    <section id="hero" ref="heroSection" data-nav-dark class="relative w-full h-[400vh] z-0">
      <div class="sticky top-0 h-screen w-full bg-[#051e2e] flex items-center justify-center overflow-hidden">
        <canvas
          ref="heroCanvas"
          class="absolute inset-0 w-full h-full object-cover will-change-transform"
          :style="heroCanvasStyle"
        ></canvas>
        <div class="absolute inset-0 bg-black/25 pointer-events-none"></div>
        <div class="absolute inset-0 flex items-center justify-center gap-3 pointer-events-none z-10">
          <div
            class="flex items-center gap-2 -translate-x-[152px] translate-y-[104px]"
            :style="{ opacity: elem1Opacity }"
          >
            <span class="relative flex items-center justify-center w-2 h-2">
              <span class="absolute w-8 h-8 rounded-full border border-white animate-ping"></span>
              <span class="relative w-2 h-2 rounded-full bg-white"></span>
            </span>
            <span
              class="text-white text-[10px] font-mono uppercase tracking-wider border border-white/50 px-2 py-0.5 bg-black/30 backdrop-blur-sm"
              >01 · B-5 · Manufacturing</span
            >
          </div>
          <div class="flex items-center gap-2 translate-x-32 translate-y-16" :style="{ opacity: elem2Opacity }">
            <span class="relative flex items-center justify-center w-2 h-2">
              <span class="absolute w-8 h-8 rounded-full border border-white animate-ping"></span>
              <span class="relative w-2 h-2 rounded-full bg-white"></span>
            </span>
            <span
              class="text-white text-[10px] font-mono uppercase tracking-wider border border-white/50 px-2 py-0.5 bg-black/30 backdrop-blur-sm"
              >02 · B-34 · 120,000 kg</span
            >
          </div>
          <div class="flex items-center gap-2 translate-x-40 -translate-y-[200px]" :style="{ opacity: elem3Opacity }">
            <span class="relative flex items-center justify-center w-2 h-2">
              <span class="absolute w-8 h-8 rounded-full border border-white animate-ping"></span>
              <span class="relative w-2 h-2 rounded-full bg-white"></span>
            </span>
            <span
              class="text-white text-[10px] font-mono uppercase tracking-wider border border-white/50 px-2 py-0.5 bg-black/30 backdrop-blur-sm"
              >03 · B-29 · Expansion</span
            >
          </div>
        </div>
        <div
          class="absolute bottom-10 left-8 md:bottom-16 md:left-12 text-left z-10 text-white will-change-transform"
          :style="leftTextStyle"
        >
          <div ref="heroHeadingRef" class="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tight">
            <span class="block overflow-hidden"><span class="block hero-line">Europe rearms fast.</span></span>
            <span class="block overflow-hidden"><span class="block hero-line">We scale faster.</span></span>
          </div>
          <a
            href="#"
            @mouseenter="scrambleText"
            @mouseleave="scrambleText"
            class="btn-notch-clip inline-block bg-[#02d4ff] text-[#051e2e] text-xs font-mono uppercase tracking-widest px-8 py-4 mt-8 cursor-pointer"
            >Learn More</a
          >
        </div>
        <div
          class="absolute bottom-10 right-14 md:bottom-16 md:right-24 text-right z-10 pointer-events-none text-white will-change-transform"
          :style="rightTextStyle"
        >
          <div
            ref="statusLabel"
            class="flex items-center justify-end gap-3 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#02d4ff] mb-4"
          >
            <span class="w-2 h-2 rounded-full bg-[#02d4ff] dot-blink"></span>
            <span ref="statusLabelText">Status</span>
          </div>
          <div ref="statusLine1" class="text-xl md:text-2xl leading-snug text-white/90 max-w-sm">
            19 operational units, all indefinite-licensed.
          </div>
          <div ref="statusLine2" class="text-xl md:text-2xl leading-snug text-white/90 max-w-sm mt-2">
            B-5 anchors the active manufacturing core.
          </div>
        </div>
        <div
          class="absolute bottom-10 left-8 md:bottom-16 md:left-12 text-left z-10 pointer-events-none text-white will-change-transform"
          :style="leftText2Style"
        >
          <div
            ref="profileLabel"
            class="flex items-center gap-3 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#02d4ff] mb-4"
          >
            <span class="w-2 h-2 rounded-full bg-[#02d4ff] dot-blink"></span>
            <span ref="profileLabelText">Profile</span>
          </div>
          <div ref="profileBody" class="text-xl md:text-2xl leading-snug max-w-sm">
            240 tons TNT-equivalent across 13 licensed warehouses — one of Europe's largest single-site defense storage
            footprints.
          </div>
        </div>
        <div
          class="absolute bottom-10 right-14 md:bottom-16 md:right-24 text-right z-10 pointer-events-none text-white will-change-transform"
          :style="rightText2Style"
        >
          <div
            ref="briefingLabel"
            class="flex items-center justify-end gap-3 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#02d4ff] mb-4"
          >
            <span class="w-2 h-2 rounded-full bg-[#02d4ff] dot-blink"></span>
            <span ref="briefingLabelText">Briefing</span>
          </div>
          <div ref="briefingLine1" class="text-xl md:text-2xl leading-snug text-white/90 max-w-sm">
            1,020 m² build-ready land — B-29 under construction.
          </div>
          <div ref="briefingLine2" class="text-xl md:text-2xl leading-snug text-white/90 max-w-sm mt-2">
            Positioned for joint ventures across the EU defense ecosystem.
          </div>
        </div>
        <!-- Scroll progress indicator -->
        <div
          class="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 h-[22%] flex items-start gap-2 pointer-events-none"
        >
          <!-- HUD top cap: ⊓ bracket -->
          <svg
            class="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-3 overflow-visible"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M0,0 L0,5 M0,0 L7,0 M13,0 L20,0 M20,0 L20,5"
              stroke="white"
              stroke-opacity="0.7"
              stroke-width="1"
              stroke-linecap="square"
            />
          </svg>
          <div class="w-[1px] h-full bg-white/70 relative overflow-hidden">
            <div
              class="absolute top-0 left-0 w-full bg-[#02d4ff] transition-none"
              :style="{ height: heroProgress * 100 + '%' }"
            ></div>
          </div>
          <!-- HUD bottom cap: ⊔ bracket -->
          <svg
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-3 overflow-visible"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M0,7 L0,12 M0,12 L7,12 M13,12 L20,12 M20,12 L20,7"
              stroke="white"
              stroke-opacity="0.7"
              stroke-width="1"
              stroke-linecap="square"
            />
          </svg>
          <span class="text-xs font-mono text-white/60 absolute -left-8" :style="{ top: heroProgress * 85 + '%' }"
            >{{ String(Math.round(heroProgress * 100)).padStart(2, '0') }}%</span
          >
        </div>
        <div
          v-if="!heroScrolled"
          ref="cursorLabel"
          class="fixed pointer-events-none z-50 text-white text-xs font-mono uppercase tracking-widest opacity-0 transition-opacity duration-300"
          style="transform: translate(-50%, -50%)"
        >
          Scroll to Explore
        </div>
      </div>
    </section>

    <!-- Section 3 - Zigzag panels -->
    <section id="capabilities" class="relative w-full bg-white z-20 -mt-[100vh] pt-32 md:pt-40 pb-32 px-6 md:px-16">
      <div class="max-w-7xl mx-auto mb-12 md:mb-16">
        <h2 ref="capIntroHeadingRef" class="max-w-2xl text-3xl md:text-5xl font-bold text-[#051e2e] leading-[1.15]">
          EuroShield anchors a new generation of European defense manufacturing — licensed, scalable, ready for scale.
        </h2>
      </div>
      <div class="max-w-6xl mx-auto flex flex-col gap-8">
        <!-- Panel 2 — right panel, left text -->
        <div class="flex flex-row-reverse items-center gap-10 md:gap-16 -mr-24 md:-mr-40">
          <div ref="capPanel2Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="capPanel2Clip">
                  <path
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/cap2.webp"
                x="0"
                :y="capPanel2ParallaxY"
                width="400"
                height="700"
                clip-path="url(#capPanel2Clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.08)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="max-w-sm">
            <div
              class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
            >
              <span class="text-[#051e2e]/40">01</span><span ref="capPanel2LabelWord">Storage</span>
            </div>
            <p ref="capPanel2DescRef" class="text-xl md:text-2xl text-[#051e2e] mt-8 leading-snug">
              Indefinitely licensed storage across regulated defense classes — scalable to mission demand.
            </p>
            <a
              href="#"
              @mouseenter="scrambleText"
              @mouseleave="scrambleText"
              class="btn-notch-clip inline-block bg-[#051e2e] text-white text-xs font-mono uppercase tracking-widest px-8 py-4 mt-8 cursor-pointer"
              >Learn More</a
            >
          </div>
        </div>

        <!-- Panel 1 — left panel, right text -->
        <div class="flex items-center gap-10 md:gap-16 -ml-24 md:-ml-40">
          <div ref="capPanel1Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg
              class="w-full h-full scale-x-[-1]"
              viewBox="-40 -40 480 480"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="capPanel1Clip">
                  <path
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/cap1.webp"
                x="0"
                :y="capPanel1ParallaxY"
                width="400"
                height="700"
                clip-path="url(#capPanel1Clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                stroke="rgba(0,0,0,0.08)"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="max-w-sm">
            <div
              class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
            >
              <span class="text-[#051e2e]/40">02</span><span ref="capPanel1LabelWord">Facility</span>
            </div>
            <p ref="capPanel1DescRef" class="text-xl md:text-2xl text-[#051e2e] mt-8 leading-snug">
              5,330 m² dedicated storage across 19 licensed operational units — ready to scale production rapidly.
            </p>
            <a
              href="#"
              @mouseenter="scrambleText"
              @mouseleave="scrambleText"
              class="btn-notch-clip inline-block bg-[#051e2e] text-white text-xs font-mono uppercase tracking-widest px-8 py-4 mt-8 cursor-pointer"
              >Learn More</a
            >
          </div>
        </div>

        <!-- Panel 4 — right panel, left text (path flipped vertical, image upright) -->
        <div class="flex flex-row-reverse items-center gap-10 md:gap-16 -mr-24 md:-mr-40">
          <div ref="capPanel4Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="capPanel4Clip">
                  <path
                    transform="matrix(1 0 0 -1 0 400)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/cap4.webp"
                x="0"
                :y="capPanel4ParallaxY"
                width="400"
                height="700"
                clip-path="url(#capPanel4Clip)"
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
              </g>
            </svg>
          </div>
          <div class="max-w-sm">
            <div
              class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
            >
              <span class="text-[#051e2e]/40">03</span><span ref="capPanel4LabelWord">Licensing</span>
            </div>
            <p ref="capPanel4DescRef" class="text-xl md:text-2xl text-[#051e2e] mt-8 leading-snug">
              Every defense-manufacturing license at your disposal — positioned in Europe's fastest-growing defense
              market.
            </p>
            <a
              href="#"
              @mouseenter="scrambleText"
              @mouseleave="scrambleText"
              class="btn-notch-clip inline-block bg-[#051e2e] text-white text-xs font-mono uppercase tracking-widest px-8 py-4 mt-8 cursor-pointer"
              >Learn More</a
            >
          </div>
        </div>

        <!-- Panel 3 — left panel, right text (path rotated 180, image upright) -->
        <div class="flex items-center gap-10 md:gap-16 -ml-24 md:-ml-40">
          <div ref="capPanel3Ref" class="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none">
              <defs>
                <clipPath id="capPanel3Clip">
                  <path
                    transform="rotate(180 200 200)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/cap3.webp"
                x="0"
                :y="capPanel3ParallaxY"
                width="400"
                height="700"
                clip-path="url(#capPanel3Clip)"
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
              </g>
            </svg>
          </div>
          <div class="max-w-sm">
            <div
              class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono uppercase tracking-widest text-[#051e2e]"
            >
              <span class="text-[#051e2e]/40">04</span><span ref="capPanel3LabelWord">Expansion</span>
            </div>
            <p ref="capPanel3DescRef" class="text-xl md:text-2xl text-[#051e2e] mt-8 leading-snug">
              105,000 m² ready for new production lines, storage, and defense tech development — repurposing on demand.
            </p>
            <a
              href="#"
              @mouseenter="scrambleText"
              @mouseleave="scrambleText"
              class="btn-notch-clip inline-block bg-[#051e2e] text-white text-xs font-mono uppercase tracking-widest px-8 py-4 mt-8 cursor-pointer"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section ref="section4" :data-nav-dark="section4ColorShift === 0 ? '' : null" class="relative w-full h-[500vh]">
      <div
        class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-300"
        :style="{
          backgroundColor:
            section4ColorShift > 0
              ? `rgb(${5 + section4ColorShift * 250}, ${30 + section4ColorShift * 225}, ${46 + section4ColorShift * 209})`
              : '#051e2e',
        }"
      >
        <!-- Scroll progress indicator (3 dots, active one expands into filling line) -->
        <div class="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
          <template v-for="i in 3" :key="'s4dot' + i">
            <div
              class="w-[3px] rounded-full overflow-hidden transition-[height] duration-500 ease-out"
              :style="{
                height: section4DotActive(i - 1) ? '28px' : '3px',
                backgroundColor:
                  section4ColorShift > 0 ? `rgba(0,0,0,${0.12 + section4ColorShift * 0.08})` : 'rgba(255,255,255,0.22)',
              }"
            >
              <div
                class="w-full"
                :style="{
                  height: section4DotFill(i - 1) * 100 + '%',
                  backgroundColor: section4ColorShift > 0 ? '#051e2e' : '#02d4ff',
                }"
              ></div>
            </div>
          </template>
        </div>
        <div
          class="absolute z-10 top-[38%] left-1/2 -translate-x-1/2"
          :style="{
            transform: `translate(-50%, ${-Math.max(0, Math.min(1, (section4Progress - 0.5) / 0.08)) * 30}vh)`,
          }"
        >
          <span
            class="text-sm font-mono uppercase tracking-wider transition-colors duration-300"
            :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'rgba(255,255,255,0.4)' }"
            >Our Mission</span
          >
        </div>
        <div
          class="relative z-10 text-5xl md:text-9xl font-bold whitespace-nowrap"
          :style="{
            color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'white',
            transform: `translateY(${-Math.max(0, Math.min(1, (section4Progress - 0.5) / 0.08)) * 30}vh) scale(${(1 + section4Merge * 0.5) * (1 - Math.max(0, Math.min(1, (section4Progress - 0.5) / 0.08)) * 0.6)})`,
          }"
        >
          <span class="inline-flex">
            <span>B</span>
            <span
              class="inline-block overflow-hidden"
              :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }"
              >uilt</span
            >
          </span>
          <span class="inline-block" :style="{ width: (1 - section4Merge) * 0.6 + 'em' }"></span>
          <span class="inline-flex">
            <span>T</span>
            <span
              class="inline-block overflow-hidden"
              :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }"
              >o</span
            >
          </span>
          <span class="inline-block" :style="{ width: (1 - section4Merge) * 0.6 + 'em' }"></span>
          <span class="inline-flex">
            <span>D</span>
            <span
              class="inline-block overflow-hidden"
              :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }"
              >efend</span
            >
          </span>
        </div>
        <!-- Section 4 slides — lines reveal animation on active slide change -->
        <div
          :class="[
            'absolute bottom-[22%] left-[8%] md:left-[10%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 1 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'white' }"
        >
          <!-- Panel above title (matches zigzag panel 1 pattern) -->
          <div
            class="w-[240px] h-[240px] md:w-[340px] md:h-[340px] mb-6"
            :style="{ transform: `translate(${s4MouseX * 22}px, ${s4MouseY * 14}px)` }"
          >
            <svg class="w-full h-full scale-x-[-1]" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel1Clip">
                  <path
                    transform="matrix(0 1 1 0 0 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel1.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel1Clip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide1ImageP }"
              />
              <g transform="matrix(0 1 1 0 0 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide1StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
          <h3
            ref="slide4Title1"
            class="text-2xl md:text-4xl font-bold leading-tight split-text"
            v-html="
              'A licensed facility starting with <u class=&quot;decoration-current decoration-2 underline-offset-4&quot;>small-caliber ammunition</u>'
            "
          ></h3>
        </div>
        <div
          :class="[
            'absolute bottom-[14%] right-[4%] md:right-[5%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 1 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{
            color: section4ColorShift > 0 ? `rgba(0,0,0,${0.6 * section4ColorShift})` : 'rgba(255,255,255,0.7)',
          }"
        >
          <!-- Panel above right description -->
          <div
            class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mb-6 ml-auto"
            :style="{ transform: `translate(${-s4MouseX * 28}px, ${-s4MouseY * 18}px)` }"
          >
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel1RClip">
                  <path
                    transform="matrix(0 1 1 0 0 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel1r.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel1RClip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide1ImageP }"
              />
              <g transform="matrix(0 1 1 0 0 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide1StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
          <p ref="slide4Desc1" class="text-base md:text-lg leading-relaxed split-text">
            Our facility is producing small-caliber rounds — 5.56×45mm, 7.62×51mm, and 12.7×99mm — ready for
            NATO-aligned supply.
          </p>
        </div>

        <div
          :class="[
            'absolute bottom-[22%] left-[8%] md:left-[10%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 2 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'white' }"
        >
          <!-- Panel above title -->
          <div
            class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mb-6"
            :style="{ transform: `translate(${s4MouseX * 22}px, ${s4MouseY * 14}px) rotate(-90deg)` }"
          >
            <svg class="w-full h-full scale-x-[-1]" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel2Clip">
                  <path
                    transform="matrix(0 1 1 0 0 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel2.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel2Clip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide2ImageP }"
              />
              <g transform="matrix(0 1 1 0 0 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide2StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
          <h3
            ref="slide4Title2"
            class="text-2xl md:text-4xl font-bold leading-tight split-text"
            v-html="
              'A defense park built for <u class=&quot;decoration-current decoration-2 underline-offset-4&quot;>growing demand and innovation</u>'
            "
          ></h3>
        </div>
        <div
          :class="[
            'absolute bottom-[14%] right-[4%] md:right-[5%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 2 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{
            color: section4ColorShift > 0 ? `rgba(0,0,0,${0.6 * section4ColorShift})` : 'rgba(255,255,255,0.7)',
          }"
        >
          <p ref="slide4Desc2" class="text-base md:text-lg leading-relaxed split-text mb-6">
            105,000 m² of licensed development land for in-demand defense projects — timed with NATO's 5% GDP defense
            commitment by 2030.
          </p>
          <!-- Panel below right description -->
          <div
            class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] ml-auto"
            :style="{ transform: `translate(${-s4MouseX * 28}px, ${-s4MouseY * 18}px)` }"
          >
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel2RClip">
                  <path
                    transform="matrix(0 -1 -1 0 400 400)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel2r.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel2RClip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide2ImageP }"
              />
              <g transform="matrix(0 -1 -1 0 400 400)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide2StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
        </div>

        <div
          :class="[
            'absolute bottom-[12%] left-[8%] md:left-[10%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 3 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'white' }"
        >
          <h3
            ref="slide4Title3"
            class="text-2xl md:text-4xl font-bold leading-tight split-text mb-6"
            v-html="
              `Built to scale across <u class=&quot;decoration-current decoration-2 underline-offset-4&quot;>Europe's defense ecosystem</u>`
            "
          ></h3>
          <!-- Panel below title -->
          <div
            class="w-[240px] h-[240px] md:w-[340px] md:h-[340px]"
            :style="{ transform: `translate(${s4MouseX * 22}px, ${s4MouseY * 14}px)` }"
          >
            <svg class="w-full h-full scale-x-[-1]" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel3Clip">
                  <path
                    transform="matrix(0 1 1 0 0 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel3.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel3Clip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide3ImageP }"
              />
              <g transform="matrix(0 1 1 0 0 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide3StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          :class="[
            'absolute bottom-[14%] right-[4%] md:right-[5%] max-w-md z-10 pointer-events-none transition-opacity duration-[1200ms]',
            activeSlide4 === 3 ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{
            color: section4ColorShift > 0 ? `rgba(0,0,0,${0.6 * section4ColorShift})` : 'rgba(255,255,255,0.7)',
          }"
        >
          <!-- Panel above right description -->
          <div
            class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mb-6 ml-auto"
            :style="{ transform: `translate(${-s4MouseX * 28}px, ${-s4MouseY * 18}px)` }"
          >
            <svg class="w-full h-full" viewBox="-40 -40 480 480" fill="none" preserveAspectRatio="none">
              <defs>
                <clipPath id="s4Panel3RClip">
                  <path
                    transform="matrix(0 1 1 0 0 0)"
                    d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  />
                </clipPath>
              </defs>
              <image
                href="/posters/zz-panel3r.webp"
                x="0"
                y="0"
                width="400"
                height="400"
                clip-path="url(#s4Panel3RClip)"
                preserveAspectRatio="xMidYMid slice"
                :style="{ opacity: s4Slide3ImageP }"
              />
              <g transform="matrix(0 1 1 0 0 0)">
                <path
                  d="M0 45 Q0 35 10 35 L82.5 35 Q90 35 95 28 L120 5 Q125 0 135 0 L380 0 Q400 0 400 20 L400 380 Q400 400 380 400 L20 400 Q0 400 0 380 L0 300 Q0 290 10 280 L20 270 Q30 260 30 250 L30 150 Q30 140 20 130 L10 120 Q0 110 0 100 Z"
                  :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.4 * section4ColorShift})` : 'rgba(255,255,255,0.6)'"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  :stroke-dasharray="S4_PANEL_PATH_LEN"
                  :stroke-dashoffset="S4_PANEL_PATH_LEN - s4Slide3StrokeP * S4_PANEL_PATH_LEN"
                />
              </g>
            </svg>
          </div>
          <p ref="slide4Desc3" class="text-base md:text-lg leading-relaxed split-text">
            300,000 m² of land, all necessary licenses, and EU-backed funding — EuroShield scales rapidly within
            Europe's defense ecosystem, ready for any collaboration.
          </p>
        </div>
        <svg
          class="absolute inset-0 w-full h-full"
          style="
            mask-image: radial-gradient(ellipse 65% 60% at 50% 50%, black 30%, transparent 100%);
            -webkit-mask-image: radial-gradient(ellipse 65% 60% at 50% 50%, black 30%, transparent 100%);
          "
        >
          <!-- Vertikalne linije (gap oko tačaka) — puls -->
          <template v-for="col in 25" :key="'vc' + col">
            <template v-for="row in 13" :key="'vl' + col + '-' + row">
              <line
                :x1="((col - 1) / 24) * 100 + '%'"
                :y1="'calc(' + ((row - 1) / 13) * 100 + '% + 8px)'"
                :x2="((col - 1) / 24) * 100 + '%'"
                :y2="'calc(' + (row / 13) * 100 + '% - 8px)'"
                :stroke="
                  section4ColorShift > 0
                    ? `rgba(0,0,0,${0.05 + section4ColorShift * 0.03})`
                    : `rgba(2,212,255,${0.18 * gridDotOpacity(col - 1, row - 1, 24, 13)})`
                "
                stroke-width="1"
              />
            </template>
          </template>
          <!-- Horizontalne linije (gap oko tačaka) — puls -->
          <template v-for="row in 14" :key="'hr' + row">
            <template v-for="col in 24" :key="'hl' + row + '-' + col">
              <line
                :x1="'calc(' + ((col - 1) / 24) * 100 + '% + 8px)'"
                :y1="((row - 1) / 13) * 100 + '%'"
                :x2="'calc(' + (col / 24) * 100 + '% - 8px)'"
                :y2="((row - 1) / 13) * 100 + '%'"
                :stroke="
                  section4ColorShift > 0
                    ? `rgba(0,0,0,${0.05 + section4ColorShift * 0.03})`
                    : `rgba(2,212,255,${0.18 * gridDotOpacity(col - 1, row - 1, 24, 13)})`
                "
                stroke-width="1"
              />
            </template>
          </template>
          <!-- Tačkice na presecima -->
          <template v-for="row in 14" :key="'r' + row">
            <circle
              v-for="col in 25"
              :key="'d' + row + '-' + col"
              :cx="((col - 1) / 24) * 100 + '%'"
              :cy="((row - 1) / 13) * 100 + '%'"
              r="1.5"
              :fill="
                section4ColorShift > 0
                  ? `rgba(0,0,0,${0.2})`
                  : `rgba(2,212,255,${0.6 * gridDotOpacity(col - 1, row - 1, 24, 13)})`
              "
            />
          </template>
        </svg>
      </div>
    </section>

    <!-- Partners & Licenses slider -->
    <section
      ref="plSection"
      class="relative w-full min-h-screen bg-[#02d4ff] text-[#051e2e] overflow-hidden cursor-pointer"
      @click="nextPartnerPage"
      @mousemove="onPartnerMouseMove"
      @mouseenter="partnerCursorVisible = true"
      @mouseleave="partnerCursorVisible = false"
    >
      <!-- Horizontal indicator with single line + number on left -->
      <div class="absolute right-10 md:right-14 top-28 md:top-32 z-20 flex items-center gap-4 pointer-events-none">
        <span class="text-sm md:text-base font-mono tracking-widest text-[#051e2e]">0{{ partnerPage + 1 }}</span>
        <div class="w-64 md:w-80 h-[1px] bg-[#051e2e]/20 relative overflow-hidden">
          <div
            class="absolute top-0 left-0 h-full bg-[#051e2e]"
            :style="{ width: partnerAutoProgress * 100 + '%' }"
          ></div>
        </div>
      </div>

      <!-- Slider pages -->
      <div
        class="flex h-full min-h-screen transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        :style="{ transform: `translateX(-${partnerPage * 100}%)` }"
      >
        <!-- Page 1 - Nammo -->
        <div class="w-full flex-shrink-0 min-h-screen flex items-center px-6 md:px-20">
          <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
            <img src="/logos/nammo.svg" alt="Nammo" class="h-16 md:h-24 w-auto" />
            <div class="max-w-2xl">
              <p class="text-base md:text-lg leading-relaxed">
                Nordic NATO ammunition supplier with deep production ties across Europe's defense network.
              </p>
              <p class="text-base md:text-lg leading-relaxed mt-6">
                Joint venture rooted in Finland and Norway, producing small- and medium-caliber rounds for NATO partners
                — a strategic supply partner for EuroShield's European distribution.
              </p>
            </div>
          </div>
        </div>

        <!-- Page 2 - BAE -->
        <div class="w-full flex-shrink-0 min-h-screen flex items-center px-6 md:px-20">
          <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
            <img src="/logos/bae.svg" alt="BAE" class="h-16 md:h-24 w-auto" />
            <div class="max-w-2xl">
              <p class="text-base md:text-lg leading-relaxed">
                UK-based global defense systems leader in munitions, naval, and aerospace manufacturing.
              </p>
              <p class="text-base md:text-lg leading-relaxed mt-6">
                BAE Systems operates critical munitions programs across Europe and North America — technical and
                supply-chain collaboration that underpins EuroShield's small-caliber production capability.
              </p>
            </div>
          </div>
        </div>

        <!-- Page 3 - Thales -->
        <div class="w-full flex-shrink-0 min-h-screen flex items-center px-6 md:px-20">
          <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
            <img src="/logos/thales.svg" alt="Thales" class="h-16 md:h-24 w-auto" />
            <div class="max-w-2xl">
              <p class="text-base md:text-lg leading-relaxed">
                French multinational in aerospace, defense electronics, and integrated weapon systems.
              </p>
              <p class="text-base md:text-lg leading-relaxed mt-6">
                Thales brings command-and-control systems expertise to NATO-aligned defense programs — a key integration
                partner for EuroShield's defense technology and C-UAS collaboration.
              </p>
            </div>
          </div>
        </div>

        <!-- Page 4 - Licenses -->
        <div class="w-full flex-shrink-0 min-h-screen flex items-center px-6 md:px-20 py-24 md:py-32">
          <div class="w-full max-w-6xl flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Pyrotechnic Storage</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                Licensed production of fireworks, flares, and pyrotechnic ammunition components for commercial and
                defense applications.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Explosive Storage</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                240,000 kg TNT-equivalent capacity across regulated explosive classes with indefinite validity.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Disaster Management</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                Emergency response and containment certification for handling high-consequence materials on-site.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Defense Industry</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                Authorization to manufacture and distribute defense-grade munitions across NATO-aligned markets.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Explosive Disposal</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                Regulated decommissioning and neutralization of expired or surplus explosive inventory.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-12 items-start">
              <span
                class="text-sm md:text-base font-mono uppercase tracking-wider border border-[#051e2e]/30 px-4 py-2 justify-self-start"
                >Mining Authority</span
              >
              <p class="text-base md:text-lg leading-relaxed max-w-2xl">
                Blasting and industrial charge production clearance for mining and construction applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- "Next" label following cursor (hero-style) -->
      <div
        v-show="partnerCursorVisible"
        class="fixed pointer-events-none z-30 text-[#051e2e] text-xs font-mono uppercase tracking-widest transition-opacity duration-200"
        :style="{ left: partnerCursorX + 20 + 'px', top: partnerCursorY + 20 + 'px' }"
      >
        {{ partnerPage === 3 ? 'Restart' : 'Next →' }}
      </div>
    </section>

    <!-- Footer -->
    <footer data-nav-dark class="relative flex flex-col min-h-screen w-full bg-[#051e2e] text-white overflow-hidden">
      <!-- Circuit linije -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
        stroke-width="1.5"
      >
        <defs>
          <filter id="footerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <!-- Linija 1 - gore levo: dole, skreni levo, skreni dole, krivina do levog ruba -->
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
          filter="url(#footerGlow)"
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

        <!-- Linija 2 - gore desno: dole, skreni desno, skreni dole, skreni do desnog ruba -->
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
          filter="url(#footerGlow)"
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

        <!-- Linija 3 - dole desno: dijagonala, skreni levo, skreni dole -->
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
          filter="url(#footerGlow)"
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

        <!-- Linija 4 - dole levo: horizontala, krivina, dijagonala dole -->
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path
          d="M0,520 L240,520 Q360,520 282,611 L120,800"
          stroke="#02d4ff"
          stroke-width="25"
          stroke-linecap="round"
          opacity="0.6"
          filter="url(#footerGlow)"
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

      <!-- Gornji deo - heading + CTA -->
      <div class="flex flex-col items-center text-center px-6 pt-32 md:pt-40">
        <h2 class="text-4xl md:text-7xl font-bold mb-10 max-w-3xl leading-tight">The future of defense starts here.</h2>
        <a
          href="/contact"
          @mouseenter="scrambleText"
          @mouseleave="scrambleText"
          class="btn-notch-clip inline-block bg-[#02d4ff] text-[#051e2e] text-xs font-mono uppercase tracking-widest px-8 py-4 cursor-pointer"
          >Request A Briefing</a
        >
      </div>

      <!-- Donji deo - logo + linkovi -->
      <div class="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pb-8 pt-16 gap-12 mt-auto">
        <div>
          <h3 class="text-3xl font-bold mb-8">EuroShield</h3>
          <p class="text-white/40 text-sm mb-1">Defense Manufacturing</p>
          <p class="text-white/40 text-sm mb-1">Ammunition Production</p>
          <p class="text-white/40 text-sm">NATO Aligned</p>
        </div>
        <div class="flex gap-16 md:gap-24">
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Capabilities</h3>
            <ul class="space-y-3 text-white/60">
              <li>Defense Munitions</li>
              <li>Defense Technology</li>
              <li>Defense Gear &amp; Equipment</li>
              <li>Defense Logistics</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Company</h3>
            <ul class="space-y-3 text-white/60">
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
            <a href="#" class="text-white/60 hover:text-[#02d4ff] transition-colors text-lg font-bold">yt</a>
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

if (import.meta.client) {
  gsap.registerPlugin(SplitText)
}

const blobBase = 'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com'
useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
  link: [
    { rel: 'preload', href: `${blobBase}/videos/panel1.mp4`, as: 'video', type: 'video/mp4' },
    { rel: 'preload', href: `${blobBase}/videos/panel2.mp4`, as: 'video', type: 'video/mp4' },
  ],
})

const heroSection = ref<HTMLElement | null>(null)
const heroCanvas = ref<HTMLCanvasElement | null>(null)
const cursorLabel = ref<HTMLElement | null>(null)
const heroScrolled = ref(false)

const section3 = ref<HTMLElement | null>(null)
const capPanel1Ref = ref<HTMLElement | null>(null)
const capPanel2Ref = ref<HTMLElement | null>(null)
const capPanel3Ref = ref<HTMLElement | null>(null)
const capPanel4Ref = ref<HTMLElement | null>(null)
const capPanel1ParallaxY = ref(-150)
const capPanel2ParallaxY = ref(-150)
const capPanel3ParallaxY = ref(-150)
const capPanel4ParallaxY = ref(-150)

// Scramble text hover effect
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
function scrambleText(e: Event) {
  scrambleElement(e.currentTarget as HTMLElement)
}

function computeCapParallax(el: HTMLElement | null, vh: number): number {
  if (!el) return -150
  const rect = el.getBoundingClientRect()
  const center = rect.top + rect.height / 2
  const offset = (center - vh / 2) / vh
  const clamped = Math.max(-1, Math.min(1, offset))
  return -150 - clamped * 150
}
const section4 = ref<HTMLElement | null>(null)
const section5 = ref<HTMLElement | null>(null)
const section8 = ref<HTMLElement | null>(null)
const parallax2 = ref(0)
const parallax6 = ref(0)
const parallax8 = ref(0)
const parallax9 = ref(0)
const section9El = ref<HTMLElement | null>(null)
const section4Progress = ref(0)
const pulseTime = ref(0)
const heroProgress = ref(0)
const heroExitProgress = ref(0)
const heroCanvasStyle = computed(() => {
  const p = heroExitProgress.value
  // Scale stays constant (so canvas always covers viewport + extra), only translateY animates for parallax
  return { transform: `translateY(-${p * 15}vh) scale(1.2)` }
})
const heroHeadingRef = ref<HTMLElement | null>(null)
const capIntroHeadingRef = ref<HTMLElement | null>(null)
const statusLabel = ref<HTMLElement | null>(null)
const statusLabelText = ref<HTMLElement | null>(null)
const statusLine1 = ref<HTMLElement | null>(null)
const statusLine2 = ref<HTMLElement | null>(null)
const profileLabel = ref<HTMLElement | null>(null)
const profileLabelText = ref<HTMLElement | null>(null)
const profileBody = ref<HTMLElement | null>(null)
const briefingLabel = ref<HTMLElement | null>(null)
const briefingLabelText = ref<HTMLElement | null>(null)
const briefingLine1 = ref<HTMLElement | null>(null)
const briefingLine2 = ref<HTMLElement | null>(null)
const statusAnimated = ref(false)
const profileAnimated = ref(false)
const briefingAnimated = ref(false)

// Section 3 panel label/description refs + flags
const capPanel1LabelWord = ref<HTMLElement | null>(null)
const capPanel2LabelWord = ref<HTMLElement | null>(null)
const capPanel3LabelWord = ref<HTMLElement | null>(null)
const capPanel4LabelWord = ref<HTMLElement | null>(null)
const capPanel1DescRef = ref<HTMLElement | null>(null)
const capPanel2DescRef = ref<HTMLElement | null>(null)
const capPanel3DescRef = ref<HTMLElement | null>(null)
const capPanel4DescRef = ref<HTMLElement | null>(null)
const capPanel1Animated = ref(false)
const capPanel2Animated = ref(false)
const capPanel3Animated = ref(false)
const capPanel4Animated = ref(false)

function charRevealBlock(els: (HTMLElement | null)[]) {
  nextTick(() => {
    els.filter(Boolean).forEach((el) => {
      gsap.set(el, { opacity: 1 })
      SplitText.create(el as HTMLElement, {
        type: 'words, chars',
        charsClass: 'char',
        wordsClass: 'word',
        mask: 'chars',
        reduceWhiteSpace: false,
        onSplit: (self: any) => {
          gsap.from(self.chars, {
            duration: 0.6,
            yPercent: 100,
            stagger: 0.02,
            ease: 'power3.out',
          })
        },
      })
    })
  })
}

function animateHeroHeadingLoop() {
  nextTick(() => {
    if (!heroHeadingRef.value) return
    const lines = heroHeadingRef.value.querySelectorAll('.hero-line')
    if (!lines.length) return
    gsap.set(lines, { yPercent: 100 })
    gsap.to(lines, {
      yPercent: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
    })
  })
}

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

function btdStyleCharReveal(el: HTMLElement | null) {
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
        panel: capPanel2Ref.value,
        label: capPanel2LabelWord.value,
        desc: capPanel2DescRef.value,
        flag: capPanel2Animated,
      },
      {
        panel: capPanel1Ref.value,
        label: capPanel1LabelWord.value,
        desc: capPanel1DescRef.value,
        flag: capPanel1Animated,
      },
      {
        panel: capPanel4Ref.value,
        label: capPanel4LabelWord.value,
        desc: capPanel4DescRef.value,
        flag: capPanel4Animated,
      },
      {
        panel: capPanel3Ref.value,
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
              btdStyleCharReveal(desc)
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

// Partners & Licenses slider
const plSection = ref<HTMLElement | null>(null)
const partnerPage = ref(0)
const partnerCursorX = ref(0)
const partnerCursorY = ref(0)
const partnerCursorVisible = ref(false)
const partnerAutoProgress = ref(0)
const PARTNER_SLIDE_MS = 5000

let partnerTimerStart = 0
function resetPartnerTimer() {
  partnerTimerStart = performance.now()
  partnerAutoProgress.value = 0
}

function nextPartnerPage() {
  partnerPage.value = (partnerPage.value + 1) % 4
  resetPartnerTimer()
}
function onPartnerMouseMove(e: MouseEvent) {
  partnerCursorX.value = e.clientX
  partnerCursorY.value = e.clientY
}

onMounted(() => {
  partnerTimerStart = performance.now()
  let alive = true
  function tick() {
    if (!alive) return
    const elapsed = performance.now() - partnerTimerStart
    const p = Math.min(1, elapsed / PARTNER_SLIDE_MS)
    partnerAutoProgress.value = p
    if (p >= 1) {
      partnerPage.value = (partnerPage.value + 1) % 4
      resetPartnerTimer()
    }
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
  onUnmounted(() => {
    alive = false
  })
})

// Hero text choreography — tied to heroProgress (0→1)
// textAnim: slide up from far below (invisible) through viewport, keep sliding up on exit
function textAnim(p: number, enterAt: number, fullInAt: number) {
  let ty: number
  if (p < enterAt) ty = 300
  else if (p < fullInAt) {
    const t = (p - enterAt) / (fullInAt - enterAt)
    ty = 300 - t * 300
  } else {
    const t = (p - fullInAt) / (1 - fullInAt)
    ty = -t * 1200
  }
  return { transform: `translateY(${ty}px)` }
}

// Dot element fade-in tied to heroProgress
function dotFade(p: number, startAt: number, fadeWindow = 0.04) {
  if (p < startAt) return 0
  if (p < startAt + fadeWindow) return (p - startAt) / fadeWindow
  return 1
}
const elem1Opacity = computed(() => dotFade(heroProgress.value, 0.4))
const elem2Opacity = computed(() => dotFade(heroProgress.value, 0.36))
const elem3Opacity = computed(() => dotFade(heroProgress.value, 0.44))

const leftTextStyle = computed(() => textAnim(heroProgress.value, -0.1, 0))
const rightTextStyle = computed(() => textAnim(heroProgress.value, 0.2, 0.33))
const leftText2Style = computed(() => textAnim(heroProgress.value, 0.48, 0.61))
const rightText2Style = computed(() => {
  // Briefing — slide-in synced with others, exit split in two phases so it
  // doesn't "pin" during the hero overlap. First half of exit runs through
  // hero's 0.89→1.0 window (-0 → -600). Second half continues across
  // heroExitProgress (300-400vh), reaching -1200 by the time Section 3 has
  // fully risen.
  const p = heroProgress.value
  const ep = heroExitProgress.value
  let ty: number
  if (p < 0.76) ty = 300
  else if (p < 0.89) {
    const t = (p - 0.76) / 0.13
    ty = 300 - t * 300
  } else if (p < 1.0) {
    const t = (p - 0.89) / 0.11
    ty = -t * 600
  } else {
    ty = -600 - ep * 600
  }
  return { transform: `translateY(${ty}px)` }
})

// Repeating dark pulses from center - like ripples in water
function gridDotOpacity(col: number, row: number, maxCol: number, maxRow: number) {
  const cx = col / maxCol - 0.5
  const cy = row / maxRow - 0.5
  const dist = Math.sqrt(cx * cx + cy * cy) * 2 // 0 to ~1

  // Continuous repeating pulses from center
  const speed = 0.15
  const spacing = 0.5
  const cycleLength = spacing * 3
  const t = (pulseTime.value * speed) % cycleLength

  // Create repeating waves
  let minOpacity = 1
  for (let wave = 0; wave < 5; wave++) {
    const wavePos = t + wave * spacing
    const wrappedPos = wavePos % cycleLength
    const diff = Math.abs(dist - wrappedPos)
    const pulse = Math.max(0, 1 - diff * 2)
    minOpacity = Math.min(minOpacity, 1 - pulse)
  }
  return Math.max(0, minOpacity)
}
const section4Merge = ref(0)
const section4ColorShift = ref(1)
const activeSlide4 = ref(0)

// Section 4 mouse-tracking for panel parallax
const s4MouseX = ref(0)
const s4MouseY = ref(0)

// Section 4 slide panel draw-in animations (bidirectional on enter/exit)
const s4Slide1StrokeP = ref(0)
const s4Slide1ImageP = ref(0)
const s4Slide2StrokeP = ref(0)
const s4Slide2ImageP = ref(0)
const s4Slide3StrokeP = ref(0)
const s4Slide3ImageP = ref(0)
const S4_PANEL_PATH_LEN = 1700

// Scroll indicator dots — 3 segments mapped to slide ranges
const SECTION4_DOT_SEGMENTS: Array<[number, number]> = [
  [0.45, 0.6],
  [0.6, 0.78],
  [0.78, 1.0],
]
function section4DotActive(i: number) {
  const p = section4Progress.value
  const [s, e] = SECTION4_DOT_SEGMENTS[i]
  return p >= s && p <= e
}
function section4DotFill(i: number) {
  const p = section4Progress.value
  const [s, e] = SECTION4_DOT_SEGMENTS[i]
  if (p < s || p > e) return 0
  return (p - s) / (e - s)
}
const slide4Title1 = ref<HTMLElement | null>(null)
const slide4Desc1 = ref<HTMLElement | null>(null)
const slide4Title2 = ref<HTMLElement | null>(null)
const slide4Desc2 = ref<HTMLElement | null>(null)
const slide4Title3 = ref<HTMLElement | null>(null)
const slide4Desc3 = ref<HTMLElement | null>(null)

function s4PanelDrawIn(strokeRef: any, imageRef: any) {
  gsap.killTweensOf([strokeRef, imageRef])
  gsap.to(strokeRef, { value: 1, duration: 1.4, ease: 'power2.inOut' })
  gsap.to(imageRef, { value: 1, duration: 0.9, delay: 0.5, ease: 'power2.out' })
}
function s4PanelDrawOut(strokeRef: any, imageRef: any) {
  gsap.killTweensOf([strokeRef, imageRef])
  gsap.to(imageRef, { value: 0, duration: 0.5, ease: 'power2.in' })
  gsap.to(strokeRef, { value: 0, duration: 0.9, delay: 0.25, ease: 'power2.inOut' })
}
watch(activeSlide4, (newVal, oldVal) => {
  if (newVal === 1) s4PanelDrawIn(s4Slide1StrokeP, s4Slide1ImageP)
  else if (oldVal === 1) s4PanelDrawOut(s4Slide1StrokeP, s4Slide1ImageP)
  if (newVal === 2) s4PanelDrawIn(s4Slide2StrokeP, s4Slide2ImageP)
  else if (oldVal === 2) s4PanelDrawOut(s4Slide2StrokeP, s4Slide2ImageP)
  if (newVal === 3) s4PanelDrawIn(s4Slide3StrokeP, s4Slide3ImageP)
  else if (oldVal === 3) s4PanelDrawOut(s4Slide3StrokeP, s4Slide3ImageP)
})

let lastAnimatedSlide4 = 0
function animateSlide4(slideNum: number) {
  if (slideNum === lastAnimatedSlide4) return
  lastAnimatedSlide4 = slideNum
  nextTick(() => {
    let titleEl: HTMLElement | null = null
    let descEl: HTMLElement | null = null
    if (slideNum === 1) {
      titleEl = slide4Title1.value
      descEl = slide4Desc1.value
    } else if (slideNum === 2) {
      titleEl = slide4Title2.value
      descEl = slide4Desc2.value
    } else if (slideNum === 3) {
      titleEl = slide4Title3.value
      descEl = slide4Desc3.value
    }
    const els = [titleEl, descEl].filter(Boolean) as HTMLElement[]
    els.forEach((el) => {
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
  })
}
const activePanel = ref(1)
const activePanelPrev = ref(1)
const section3Progress = ref(0)
const activeSlide5 = ref(1)
const slide5Direction = ref(1)
const slide5Transitioning = ref(false)
const slide5Display = ref(1)
const slide5Label = ref<HTMLElement | null>(null)
const slide5Title = ref<HTMLElement | null>(null)
const slide5Desc = ref<HTMLElement | null>(null)
const slide5Progress = ref(0)
const slide5Smooth = ref(0)
const trapezoidPosition = ref(15)

const videoCdn = 'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com/videos'
const panelVideos: Record<number, string> = {
  2: `${videoCdn}/panel2.mp4`,
  3: `${videoCdn}/panel3.mp4`,
  4: `${videoCdn}/panel4.mp4`,
}

const panelTexts = [
  '9,050 m² Licensed Facility\nWith 19 Operational Units\nAnd 5,330 m² Dedicated\nStorage Infrastructure',
  '240,000 kg TNT-Equivalent\nStorage Capacity Across\nExplosive & Pyrotechnic\nClasses With Indefinite Permits',
  '1,020 m² Available For\nNew Production Lines\nPlus 500 m² Under Construction\nReady For Repurposing',
  "Positioned In Europe's\nFastest-Growing\nDefense Market With\n60-Day Manufacturing\nLicensing Pathway",
]

const gridLogos: Record<number, string> = {
  17: '/logos/nammo.svg',
  18: '/logos/bae.svg',
  19: '/logos/thales.svg',
}

const gridLabels: Record<number, string> = {
  7: 'Pyrotechnic Storage & Manufacturing',
  8: 'Explosive Storage Permit',
  9: 'Disaster Management Permit',
  12: 'Defense Industry Permit',
  13: 'Explosive Disposal License',
  14: 'Mining Authority Clearance',
}

const glowPositions = reactive<Record<number, { x: number; y: number }>>({})

function handleGlowMove(e: MouseEvent, i: number) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  glowPositions[i] = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
}

const hasActiveGlow = computed(() => Object.keys(glowPositions).length > 0)

// Mapa: cell index → { row, col } u gridu (0-indexed)
function cellToGrid(i: number) {
  return { row: Math.floor((i - 1) / 5), col: (i - 1) % 5 }
}

// Svi mogući krstići za srednji 3x3 blok
const allCrossPositions = (() => {
  const points: { x: number; y: number }[] = []
  for (let col = 1; col <= 4; col++) {
    for (let row = 1; row <= 4; row++) {
      points.push({ x: (col / 5) * 100, y: (row / 5) * 100 })
    }
  }
  return points
})()

const activeCrossKeys = computed(() => {
  const keys = new Set<string>()
  for (const key of Object.keys(glowPositions)) {
    const i = Number(key)
    const { row, col } = cellToGrid(i)
    const corners = [
      { x: col, y: row },
      { x: col + 1, y: row },
      { x: col, y: row + 1 },
      { x: col + 1, y: row + 1 },
    ]
    for (const c of corners) {
      keys.add((c.x / 5) * 100 + '-' + (c.y / 5) * 100)
    }
  }
  return keys
})

const slide5Colors = ['bg-[#02d4ff]', 'bg-[#051e2e]', 'bg-[#02d4ff]']
const slide5Titles = [
  'A licensed facility for large-scale <u class="decoration-black decoration-2 underline-offset-4">ammunition manufacturing</u>',
  'Sustained demand driven by NATO <u class="decoration-black decoration-2 underline-offset-4">rearmament</u> and restocking',
  'Built to scale with EU-backed funding and <u class="decoration-black decoration-2 underline-offset-4">expansion capacity</u>',
]
const slide5Subtitles = [
  'Our facility is positioned to manufacture 155mm artillery and 30mm medium-caliber ammunition — the two highest-demand segments in European defense, driven by restocking, NATO rearmament, and shifting mission profiles toward C-UAS and heavy land warfare.',
  'European ammunition demand is undergoing a generational surge. 155mm artillery is growing at 17% CAGR to 2026 with sustained 4% growth thereafter, while 30mm medium-caliber is expanding at 11% CAGR — supported by expanding IFV fleets and air-burst round requirements across NATO.',
  "With 1,020 m² of available construction area, a 500 m² unit ready for repurposing, and access to the EU ASAP Programme's €500M public and €1B private investment pipeline — Shield is positioned to scale production rapidly within Europe's accelerating defense industrial base.",
]

function animateSlideText() {
  nextTick(() => {
    const els = [slide5Label.value, slide5Title.value, slide5Desc.value].filter(Boolean) as HTMLElement[]
    els.forEach((el) => {
      gsap.set(el, { opacity: 1 })
      SplitText.create(el, {
        type: 'words,lines',
        linesClass: 'line',
        autoSplit: true,
        mask: 'lines',
        reduceWhiteSpace: false,
        onSplit: (self: any) => {
          gsap.from(self.lines, {
            duration: 0.6,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: 'expo.out',
          })
        },
      })
    })
  })
}

let indexCleanup: (() => void) | null = null

onMounted(() => {
  // Initial split text animation
  animateSlideText()
  // Hero heading reveal: pre-set lines hidden, trigger when loader is gone
  nextTick(() => {
    if (heroHeadingRef.value) {
      const lines = heroHeadingRef.value.querySelectorAll('.hero-line')
      gsap.set(lines, { yPercent: 100 })
    }
  })
  window.addEventListener('loader-gone', animateHeroHeadingLoop, { once: true })
  animateCapIntroHeading()
  setupCapPanelReveals()

  // Section 4 panel mouse parallax — smooth lerp
  let s4MouseXTarget = 0
  let s4MouseYTarget = 0
  const onS4Mouse = (e: MouseEvent) => {
    s4MouseXTarget = (e.clientX / window.innerWidth) * 2 - 1
    s4MouseYTarget = (e.clientY / window.innerHeight) * 2 - 1
  }
  window.addEventListener('mousemove', onS4Mouse, { passive: true })
  let s4MouseAlive = true
  function s4MouseLerp() {
    if (!s4MouseAlive) return
    s4MouseX.value += (s4MouseXTarget - s4MouseX.value) * 0.08
    s4MouseY.value += (s4MouseYTarget - s4MouseY.value) * 0.08
    requestAnimationFrame(s4MouseLerp)
  }
  s4MouseLerp()
  onUnmounted(() => {
    s4MouseAlive = false
    window.removeEventListener('mousemove', onS4Mouse)
  })

  // Cursor label follows mouse in hero section with easing
  let cursorX = 0,
    cursorY = 0
  let labelX = 0,
    labelY = 0
  let cursorVisible = false

  if (heroSection.value) {
    heroSection.value.addEventListener('mousemove', (e) => {
      if (!heroScrolled.value) {
        cursorX = e.clientX
        cursorY = e.clientY
        cursorVisible = true
      }
    })
    heroSection.value.addEventListener('mouseleave', () => {
      cursorVisible = false
    })
  }

  let alive = true
  function animateCursor() {
    if (!alive) return
    if (cursorLabel.value) {
      labelX += (cursorX - labelX) * 0.07
      labelY += (cursorY - labelY) * 0.07
      cursorLabel.value.style.left = labelX + 'px'
      cursorLabel.value.style.top = labelY + 'px'
      cursorLabel.value.style.opacity = cursorVisible && !heroScrolled.value ? '1' : '0'
    }
    requestAnimationFrame(animateCursor)
  }
  requestAnimationFrame(animateCursor)
  function onHeroScroll() {
    if (window.scrollY > 300 && !heroScrolled.value) heroScrolled.value = true
  }
  window.addEventListener('scroll', onHeroScroll)

  // Grid pulse animation loop - only runs when section 4 is visible
  let pulseStart = performance.now()
  let pulseRunning = false
  function animatePulse() {
    if (!pulseRunning) return
    pulseTime.value = (performance.now() - pulseStart) / 1000
    requestAnimationFrame(animatePulse)
  }
  if (section4.value) {
    const pulseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pulseRunning) {
          pulseRunning = true
          requestAnimationFrame(animatePulse)
        } else if (!entry.isIntersecting) {
          pulseRunning = false
        }
      },
      { rootMargin: '100px' },
    )
    pulseObserver.observe(section4.value)
  }

  // Smooth slide progress interpolation - only runs when section 5 is near
  let slideRunning = false
  function smoothSlide() {
    if (!slideRunning) return
    const diff = slide5Progress.value - slide5Smooth.value
    if (Math.abs(diff) > 0.001) {
      slide5Smooth.value += diff * 0.12
    } else {
      slide5Smooth.value = slide5Progress.value
    }
    requestAnimationFrame(smoothSlide)
  }
  if (section5.value) {
    const slideObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !slideRunning) {
          slideRunning = true
          requestAnimationFrame(smoothSlide)
        } else if (!entry.isIntersecting) {
          slideRunning = false
        }
      },
      { rootMargin: '200px' },
    )
    slideObserver.observe(section5.value)
  }

  // === Canvas frame sequences via Web Worker ===
  const cdnBase = 'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com'
  const cdnFrames = 'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com'

  // Hero frames setup
  const totalHeroFrames = 144
  const heroImages: (HTMLImageElement | null)[] = new Array(totalHeroFrames).fill(null)
  let heroLoaded = false

  // Load frames - try Web Worker, fallback to main thread
  function loadFrames(
    frameCount: number,
    urlFn: (i: number) => string,
    images: (HTMLImageElement | null)[],
    onFirstFrame: (img: HTMLImageElement) => void,
    onReady: () => void,
    onDone: () => void,
    readyThreshold = 50,
  ) {
    let firstDone = false
    let loadedCount = 0
    let readyFired = false

    function onFrame(index: number, img: HTMLImageElement) {
      images[index] = img
      loadedCount++
      if (!firstDone) {
        firstDone = true
        onFirstFrame(img)
      }
      if (!readyFired && loadedCount >= readyThreshold) {
        readyFired = true
        onReady()
      }
    }

    // Main thread fallback - simple batch loading
    function loadMainThread() {
      const batchSize = 15
      let i = 0
      function loadBatch() {
        const batch = []
        for (let b = 0; b < batchSize && i < frameCount; b++, i++) {
          const idx = i
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.onload = () => onFrame(idx, img)
          img.src = urlFn(idx + 1)
          batch.push(img)
        }
        if (i < frameCount) setTimeout(loadBatch, 20)
        else onDone()
      }
      loadBatch()
    }

    // Try Web Worker
    try {
      const worker = new Worker('/frame-loader.worker.js')
      let workerFailed = false

      worker.onerror = () => {
        if (!workerFailed) {
          workerFailed = true
          worker.terminate()
          loadMainThread()
        }
      }

      // Timeout - if no frame arrives in 5s, fallback
      const timeout = setTimeout(() => {
        if (!firstDone && !workerFailed) {
          workerFailed = true
          worker.terminate()
          loadMainThread()
        }
      }, 5000)

      worker.onmessage = (e) => {
        if (workerFailed) return
        if (e.data.type === 'frame') {
          clearTimeout(timeout)
          const img = new Image()
          const url = URL.createObjectURL(e.data.blob)
          img.onload = () => onFrame(e.data.index, img)
          img.src = url
        } else if (e.data.type === 'done') {
          onDone()
          worker.terminate()
        }
      }

      const urls = Array.from({ length: frameCount }, (_, idx) => ({ index: idx, url: urlFn(idx + 1) }))
      worker.postMessage({ urls, batchSize: 8, delayMs: 50 })
    } catch {
      loadMainThread()
    }
  }

  // Cover draw — scales image to fill canvas like CSS object-fit: cover
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

  // Resize canvas to match screen
  function sizeCanvas(canvas: HTMLCanvasElement) {
    const dpr = window.devicePixelRatio || 1
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
    }
  }

  // Draw functions
  function drawHero(frame: number) {
    const canvas = heroCanvas.value
    if (!canvas || !heroLoaded) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    sizeCanvas(canvas)
    let img = heroImages[frame - 1]
    if (!img?.complete) {
      for (let off = 1; off <= 50; off++) {
        const b = heroImages[frame - 1 - off]
        if (b?.complete) {
          img = b
          break
        }
        const a = heroImages[frame - 1 + off]
        if (a?.complete) {
          img = a
          break
        }
      }
    }
    if (!img?.complete) return
    drawCover(canvas, ctx, img)
  }

  // Start hero frame loading
  loadFrames(
    totalHeroFrames,
    (i) => `${cdnBase}/hero-frames-v2/frame_${String(i).padStart(4, '0')}.jpg`,
    heroImages,
    (img) => {
      heroLoaded = true
      drawHero(1)
    },
    () => {
      window.dispatchEvent(new Event('hero-frames-loaded'))
    },
    () => {},
    50,
  )

  // Direct draw in scroll with smooth snap
  let heroLastDrawn = 0
  let scrollTicking = false
  let heroSmoothedProgress = 0
  const heroSnaps: number[] = []
  const snapZone = 0.06

  function getSnappedProgress(raw: number): number {
    for (let i = 0; i < heroSnaps.length; i++) {
      const snap = heroSnaps[i]
      // First snap: only catch from above, not at start
      if (i === 0 && raw < snap) continue
      // Last snap: only catch from below, allow reaching end
      if (i === heroSnaps.length - 1 && raw > snap + snapZone) continue
      if (Math.abs(raw - snap) < snapZone) return snap
    }
    return raw
  }

  // Smooth hero draw loop
  function heroSmoothLoop() {
    if (!alive) return
    const target = getSnappedProgress(heroRawProgress)
    const diff = target - heroSmoothedProgress
    if (Math.abs(diff) > 0.0005) {
      heroSmoothedProgress += diff * 0.15
    } else {
      heroSmoothedProgress = target
    }
    heroProgress.value = heroSmoothedProgress
    const frame = Math.max(1, Math.min(totalHeroFrames, Math.round(heroSmoothedProgress * (totalHeroFrames - 1)) + 1))
    if (frame !== heroLastDrawn) {
      heroLastDrawn = frame
      drawHero(frame)
    }
    requestAnimationFrame(heroSmoothLoop)
  }
  let heroRawProgress = 0
  requestAnimationFrame(heroSmoothLoop)

  function onMainScroll() {
    if (scrollTicking) return
    scrollTicking = true
    requestAnimationFrame(() => {
      scrollTicking = false
      const scrollY = window.scrollY

      // Hero canvas scrub - update raw progress
      if (heroSection.value && heroLoaded) {
        const rectH = heroSection.value.getBoundingClientRect()
        const heightH = heroSection.value.offsetHeight
        const scrolledH = -rectH.top
        // Hero animation completes over 3 viewport heights (indicator 100% at scroll 300vh)
        // Remaining hero scroll (300-400vh) is "overlap phase" where Section 3 slides over pinned hero
        heroRawProgress = Math.max(0, Math.min(1, scrolledH / (window.innerHeight * 3)))
        // Exit/overlap phase: 0 at scroll 300vh, 1 at scroll 400vh — drives bg parallax
        heroExitProgress.value = Math.max(0, Math.min(1, (scrolledH - 3 * window.innerHeight) / window.innerHeight))
        // Trigger char-reveal animations when hero text blocks become visible
        if (!statusAnimated.value && heroRawProgress >= 0.2) {
          statusAnimated.value = true
          if (statusLabelText.value) scrambleElement(statusLabelText.value)
          charRevealBlock([statusLine1.value, statusLine2.value])
        }
        if (!profileAnimated.value && heroRawProgress >= 0.48) {
          profileAnimated.value = true
          if (profileLabelText.value) scrambleElement(profileLabelText.value)
          charRevealBlock([profileBody.value])
        }
        if (!briefingAnimated.value && heroRawProgress >= 0.76) {
          briefingAnimated.value = true
          if (briefingLabelText.value) scrambleElement(briefingLabelText.value)
          charRevealBlock([briefingLine1.value, briefingLine2.value])
        }
      }

      // Capabilities zigzag panels parallax
      const vh = window.innerHeight
      capPanel1ParallaxY.value = computeCapParallax(capPanel1Ref.value, vh)
      capPanel2ParallaxY.value = computeCapParallax(capPanel2Ref.value, vh)
      capPanel3ParallaxY.value = computeCapParallax(capPanel3Ref.value, vh)
      capPanel4ParallaxY.value = computeCapParallax(capPanel4Ref.value, vh)

      const s2 = document.querySelector('section:nth-of-type(2)') as HTMLElement
      if (s2) {
        const rect = s2.getBoundingClientRect()
        parallax2.value = rect.top * -0.15
      }
      const s6 = document.querySelector('section:nth-of-type(6)') as HTMLElement
      if (s6) {
        const rect = s6.getBoundingClientRect()
        parallax6.value = rect.top * -0.15
      }
      if (section9El.value) {
        const rect = section9El.value.getBoundingClientRect()
        parallax9.value = rect.top * -0.15
      }
      // Section 3
      if (section3.value) {
        const rect3 = section3.value.getBoundingClientRect()
        const height3 = section3.value.offsetHeight
        const scrolled3 = -rect3.top
        const progress3 = Math.max(0, Math.min(1, scrolled3 / (height3 - window.innerHeight)))
        const textProgress = Math.min(3.5, progress3 * 3.5)
        const newPanel = Math.min(4, Math.floor(textProgress) + 1)
        if (newPanel !== activePanel.value) {
          activePanelPrev.value = activePanel.value
          activePanel.value = newPanel
        }
        section3Progress.value = textProgress
        trapezoidPosition.value = 15 + Math.min(1, textProgress / 3) * 70
      }

      // Section 4
      if (section4.value) {
        const rect4 = section4.value.getBoundingClientRect()
        const height4 = section4.value.offsetHeight
        const scrolled4 = -rect4.top
        const progress4 = Math.max(0, Math.min(1, scrolled4 / (height4 - window.innerHeight)))
        section4Progress.value = progress4
        section4Merge.value = Math.max(0, Math.min(1, progress4 * 2.0))
        section4ColorShift.value = progress4 > 0.5 ? 0 : 1
        // Active slide for section 4
        // Hysteresis state machine — different thresholds for entering vs leaving a slide
        // Prevents scroll jitter from re-triggering animation at boundaries
        const curSlide4 = activeSlide4.value
        let newSlide4 = curSlide4
        if (curSlide4 === 0 && progress4 >= 0.58) newSlide4 = 1
        else if (curSlide4 === 1 && progress4 >= 0.7) newSlide4 = 2
        else if (curSlide4 === 2 && progress4 >= 0.85) newSlide4 = 3
        else if (curSlide4 === 3 && progress4 < 0.8) newSlide4 = 2
        else if (curSlide4 === 2 && progress4 < 0.65) newSlide4 = 1
        else if (curSlide4 === 1 && progress4 < 0.53) newSlide4 = 0
        if (newSlide4 !== curSlide4) {
          activeSlide4.value = newSlide4
          if (newSlide4 > 0) animateSlide4(newSlide4)
        }
      }

      // Section 8 parallax
      if (section8.value) {
        const rect8 = section8.value.getBoundingClientRect()
        parallax8.value = rect8.top * -0.15
      }

      // Section 5
      if (section5.value) {
        const rect5 = section5.value.getBoundingClientRect()
        const height5 = section5.value.offsetHeight
        const scrolled5 = -rect5.top
        const progress5 = Math.max(0, Math.min(1, scrolled5 / (height5 - window.innerHeight)))
        slide5Progress.value = progress5
        const newSlide = progress5 < 0.2 ? 1 : progress5 < 0.6 ? 2 : 3
        if (newSlide !== activeSlide5.value && !slide5Transitioning.value) {
          slide5Direction.value = newSlide > activeSlide5.value ? 1 : -1
          slide5Transitioning.value = true
          // Phase 1: exit current
          const exitEl = document.querySelector('.slide5-content')
          if (exitEl) exitEl.classList.add('stagger-exit')
          setTimeout(() => {
            // Phase 2: swap content and enter
            activeSlide5.value = newSlide
            slide5Display.value = newSlide
            slide5Transitioning.value = false
            animateSlideText()
          }, 300)
        }
      }
    })
  }
  window.addEventListener('scroll', onMainScroll)

  indexCleanup = () => {
    alive = false
    window.removeEventListener('scroll', onHeroScroll)
    window.removeEventListener('scroll', onMainScroll)
  }
})

onUnmounted(() => {
  indexCleanup?.()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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
  opacity: 0;
  transform: translateY(100%);
}
.num-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.num-down-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
.num-down-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.split-text {
  opacity: 0;
}
.split-text .line {
  will-change: transform;
}
.split-text :deep(u) {
  text-decoration: underline;
  text-decoration-color: black;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
.panel-text {
  background-image: linear-gradient(to right, black, black);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgba(0, 0, 0, 0.1);
}
.btn-notch {
  position: relative;
  isolation: isolate;
  border-radius: 6px;
}
@property --btn-br-x {
  syntax: '<length>';
  initial-value: 16px;
  inherits: false;
}
@property --btn-br-y {
  syntax: '<length>';
  initial-value: 14px;
  inherits: false;
}
@property --btn-tl-x {
  syntax: '<length>';
  initial-value: 0px;
  inherits: false;
}
@property --btn-tl-y {
  syntax: '<length>';
  initial-value: 0px;
  inherits: false;
}
.btn-notch-clip {
  border-radius: 6px;
  clip-path: polygon(
    var(--btn-tl-x) 0,
    100% 0,
    100% calc(100% - var(--btn-br-y)),
    calc(100% - var(--btn-br-x)) 100%,
    0 100%,
    0 var(--btn-tl-y)
  );
  transition:
    --btn-br-x 0.55s cubic-bezier(0.77, 0, 0.175, 1),
    --btn-br-y 0.55s cubic-bezier(0.77, 0, 0.175, 1),
    --btn-tl-x 0.55s cubic-bezier(0.77, 0, 0.175, 1),
    --btn-tl-y 0.55s cubic-bezier(0.77, 0, 0.175, 1);
}
.btn-notch-clip:hover {
  --btn-br-x: 0px;
  --btn-br-y: 0px;
  --btn-tl-x: 16px;
  --btn-tl-y: 14px;
}
@keyframes dotBlink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.dot-blink {
  animation: dotBlink 1.5s ease-in-out infinite;
}
.btn-notch::before,
.btn-notch::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 18px;
  background: var(--btn-mask, white);
  pointer-events: none;
  transition: transform 0.55s cubic-bezier(0.77, 0, 0.175, 1);
  will-change: transform;
}
.btn-notch::before {
  /* TL corner mask — starts collapsed, grows on hover */
  top: -1px;
  left: -1px;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transform: scale3d(0, 0, 1);
  transform-origin: top left;
}
.btn-notch::after {
  /* BR corner mask — starts at full size, shrinks on hover */
  bottom: -1px;
  right: -1px;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  transform: scale3d(0.9999, 0.9999, 1);
  transform-origin: bottom right;
}
.btn-notch:hover::before {
  transform: scale3d(1, 1, 1);
}
.btn-notch:hover::after {
  transform: scale3d(0, 0, 1);
}
.btn-notch:hover::before {
  opacity: 1;
}
.btn-notch:hover::after {
  opacity: 0;
}
</style>
