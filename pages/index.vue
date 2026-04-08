<template>
  <main>
    <!-- Hero -->
    <section ref="heroSection" class="relative w-full h-[900vh]">
      <div class="sticky top-0 h-screen w-full bg-[#051e2e] flex items-center justify-center overflow-hidden">
        <canvas ref="heroCanvas" class="absolute inset-0 w-full h-full object-cover"></canvas>
      <div class="absolute bottom-0 group cursor-pointer w-[75%] h-[55px] flex items-center justify-center">
        <svg class="absolute w-[calc(100%+50px)] h-full -left-[25px]" viewBox="0 0 850 55">
          <defs>
            <clipPath id="trapezoidClip">
              <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" />
            </clipPath>
          </defs>
          <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" fill="white" />
          <rect x="0" y="0" width="850" height="55" fill="#02d4ff" clip-path="url(#trapezoidClip)" class="translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </svg>
        <span class="relative z-10 text-[#051e2e] text-xl font-semibold uppercase tracking-wider font-mono">Get Started</span>
      </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section
      class="relative flex items-center justify-center h-[50vh] w-full overflow-hidden"
    >
      <div class="max-w-6xl px-6 md:px-8 text-center">
          <h2 class="text-3xl md:text-5xl font-bold leading-snug">Building Europe's next ammunition facility from the ground up — 9,050 m² licensed, NATO-aligned, expansion-ready.</h2>
      </div>
    </section>

    <!-- Section 3 - Pinned panels -->
    <section ref="section3" class="relative w-full border-b border-black/10 h-[350vh]">
      <div class="sticky top-0 h-screen flex flex-col md:flex-row items-center pl-4 pr-4 md:pl-8 md:pr-8 py-12 md:py-0">
        <div class="w-full md:w-2/5 bg-black/5 rounded-2xl flex items-center justify-center h-[60vh] md:h-[87%] relative overflow-hidden">
          <transition name="fade" mode="out-in">
            <div v-if="panelVideos[activePanel]" :key="'vid-'+activePanel" class="absolute inset-0">
              <img :src="`/posters/panel${activePanel}.jpg`" class="absolute inset-0 w-full h-full object-cover" />
              <video :src="panelVideos[activePanel]" muted loop playsinline class="absolute inset-0 w-full h-full object-cover" @loadeddata="($event.target as HTMLVideoElement).play().catch(() => {})" />
            </div>
            <span v-else :key="activePanel" class="text-[5rem] md:text-[8rem] font-bold leading-none text-black/10 select-none">
              {{ activePanel }}
            </span>
          </transition>
          <div class="absolute -right-3 rotate-180 w-[55px] h-[460px] pointer-events-none transition-all duration-300 ease-out" :style="{ top: trapezoidPosition + '%', transform: 'translateY(-50%) rotate(180deg)' }">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 65 200">
              <path d="M0,8 C0,3 3,0 8,0 L55,30 C60,32 65,35 65,40 L65,160 C65,165 60,168 55,170 L8,200 C3,200 0,197 0,192 Z" fill="white" />
            </svg>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex items-start px-6 md:pl-24 md:pr-16 text-left mt-8 md:mt-0 h-[60vh] md:h-[87%] overflow-hidden pt-[22vh]">
          <div class="flex flex-col" :style="{ transform: `translateY(${-section3Progress * 50}vh)` }">
            <div v-for="(text, idx) in panelTexts" :key="idx" class="h-[50vh] flex flex-col justify-center">
              <h2
                class="text-2xl md:text-3xl font-bold leading-tight panel-text whitespace-pre-line"
                :style="{ backgroundSize: `${Math.min(100, Math.max(0, (section3Progress - idx) * 200))}% 100%` }"
              >{{ text }}</h2>
              <span v-if="idx < panelTexts.length - 1" class="text-black/10 text-2xl mt-6 select-none">"</span>
            </div>
          </div>
        </div>
        <!-- Panel number indicator -->
        <div class="absolute right-[12%] md:right-[18%] top-1/2 -translate-y-1/2 z-10">
          <span class="text-sm font-mono text-black/30 flex">0<span class="inline-block h-[1.2em] overflow-hidden relative w-[0.65em]"><transition :name="activePanel > (activePanelPrev || 1) ? 'num-up' : 'num-down'"><span :key="activePanel" class="block">{{ activePanel }}</span></transition></span></span>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section ref="section4" class="relative w-full border-b border-white/10 h-[200vh]">
      <div class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-300" :style="{ backgroundColor: section4ColorShift > 0 ? `rgb(${5 + section4ColorShift * 250}, ${30 + section4ColorShift * 225}, ${46 + section4ColorShift * 209})` : '#051e2e' }">
        <div class="absolute z-10 top-[38%] left-1/2 -translate-x-1/2">
          <span class="text-sm font-mono uppercase tracking-wider transition-colors duration-300" :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'rgba(255,255,255,0.4)' }">Our Mission</span>
        </div>
        <div class="relative z-10 text-5xl md:text-9xl font-bold whitespace-nowrap" :style="{ color: section4ColorShift > 0 ? `rgba(0,0,0,${section4ColorShift})` : 'white', transform: `scale(${1 + section4Merge * 0.5})` }">
          <span class="inline-flex">
            <span>B</span>
            <span class="inline-block overflow-hidden" :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }">uilt</span>
          </span>
          <span class="inline-block" :style="{ width: (1 - section4Merge) * 0.6 + 'em' }"></span>
          <span class="inline-flex">
            <span>T</span>
            <span class="inline-block overflow-hidden" :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }">o</span>
          </span>
          <span class="inline-block" :style="{ width: (1 - section4Merge) * 0.6 + 'em' }"></span>
          <span class="inline-flex">
            <span>D</span>
            <span class="inline-block overflow-hidden" :style="{ maxWidth: (1 - section4Merge) * 5 + 'em', opacity: Math.max(0, 1 - section4Merge * 3) }">efend</span>
          </span>
        </div>
      <svg class="absolute inset-0 w-full h-full">
        <!-- Vertikalne linije (gap oko tačaka) -->
        <template v-for="col in 13" :key="'vc'+col">
          <template v-for="row in 7" :key="'vl'+col+'-'+row">
            <line :x1="((col-1)/12*100)+'%'" :y1="'calc('+((row-1)/7*100)+'% + 14px)'" :x2="((col-1)/12*100)+'%'" :y2="'calc('+(row/7*100)+'% - 14px)'" :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.07 + section4ColorShift * 0.03})` : `rgba(2,212,255,${0.25 * gridDotOpacity(col-1, row-1, 12, 7)})`" stroke-width="1" />
          </template>
        </template>
        <!-- Horizontalne linije (gap oko tačaka) -->
        <template v-for="row in 8" :key="'hr'+row">
          <template v-for="col in 12" :key="'hl'+row+'-'+col">
            <line :x1="'calc('+((col-1)/12*100)+'% + 14px)'" :y1="((row-1)/7*100)+'%'" :x2="'calc('+(col/12*100)+'% - 14px)'" :y2="((row-1)/7*100)+'%'" :stroke="section4ColorShift > 0 ? `rgba(0,0,0,${0.07 + section4ColorShift * 0.03})` : `rgba(2,212,255,${0.25 * gridDotOpacity(col-1, row-1, 12, 7)})`" stroke-width="1" />
          </template>
        </template>
        <!-- Tačkice na presecima -->
        <template v-for="row in 8" :key="'r'+row">
          <circle v-for="col in 13" :key="'d'+row+'-'+col" :cx="((col-1)/12*100)+'%'" :cy="((row-1)/7*100)+'%'" r="3" :fill="section4ColorShift > 0 ? `rgba(0,0,0,${0.3})` : `rgba(2,212,255,${0.7 * gridDotOpacity(col-1, row-1, 12, 7)})`" />
        </template>
      </svg>
      </div>
    </section>

    <!-- Section 5 - Pinned slides -->
    <section ref="section5" class="relative w-full h-[300vh]">
      <div class="sticky top-0 h-screen flex flex-col">
        <div class="h-[70%] relative overflow-hidden">
          <!-- Slide 1 - uvek na dnu -->
          <div class="absolute inset-0 bg-[#02d4ff]" :style="{ transform: `translateY(${-Math.min(1, slide5Smooth * 3) * 25}%)` }">
            <img src="/posters/slide1.jpg" class="absolute inset-0 w-full h-full object-cover" />
            <video v-if="activeSlide5 <= 1" :src="`${videoCdn}/slide1.mp4?v=4`" muted loop playsinline class="absolute inset-0 w-full h-full object-cover" @loadeddata="($event.target as HTMLVideoElement).play().catch(() => {})" />
          </div>
          <!-- Slide 2 - klizi odozgo -->
          <div class="absolute inset-0 bg-[#051e2e] z-[1]" :style="{ transform: `translateY(${Math.max(0, (1 - slide5Smooth * 3)) * 100}%)` }">
            <img src="/posters/slide2.jpg" class="absolute inset-0 w-full h-full object-cover" />
            <video v-if="activeSlide5 >= 1 && activeSlide5 <= 2" :src="`${videoCdn}/slide2.mp4?v=2`" muted loop playsinline class="absolute inset-0 w-full h-full object-cover" @loadeddata="($event.target as HTMLVideoElement).play().catch(() => {})" />
          </div>
          <!-- Slide 3 - klizi odozgo -->
          <div class="absolute inset-0 bg-[#02d4ff] z-[2]" :style="{ transform: `translateY(${Math.max(0, (1 - (slide5Smooth - 0.33) * 3)) * 100}%)` }">
            <img src="/posters/slide3.jpg" class="absolute inset-0 w-full h-full object-cover" />
            <video v-if="activeSlide5 >= 2" :src="`${videoCdn}/slide3.mp4`" muted loop playsinline class="absolute inset-0 w-full h-full object-cover" @loadeddata="($event.target as HTMLVideoElement).play().catch(() => {})" />
          </div>
          <!-- Slide indicator - line + number -->
          <div class="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 h-[40%] flex items-start gap-3">
            <div class="w-[2px] h-full bg-white/20 rounded-full relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full bg-[#02d4ff] rounded-full transition-none" :style="{ height: (slide5Smooth * 100) + '%' }"></div>
            </div>
            <span class="text-sm font-mono text-white/60 absolute -left-8 flex" :style="{ top: (slide5Smooth * 85) + '%' }">0<span class="inline-block h-[1.2em] overflow-hidden relative w-[0.65em]"><transition :name="slide5Direction > 0 ? 'num-up' : 'num-down'"><span :key="activeSlide5" class="block">{{ activeSlide5 }}</span></transition></span></span>
          </div>
        </div>
        <div class="h-[30%] bg-white flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-8 md:py-12 gap-6 overflow-hidden">
          <div :key="'h1-'+slide5Display" class="md:w-2/5">
            <span ref="slide5Label" class="text-sm text-black/30 font-mono uppercase tracking-wider split-text">Capability {{ String(slide5Display).padStart(2, '0') }}</span>
            <h1 ref="slide5Title" class="text-2xl md:text-4xl font-bold mt-2 leading-tight split-text" v-html="slide5Titles[slide5Display - 1]"></h1>
          </div>
          <div :key="'h2-'+slide5Display" class="md:w-1/2">
            <p ref="slide5Desc" class="text-base md:text-lg text-black/60 leading-relaxed split-text">{{ slide5Subtitles[slide5Display - 1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6 -->
    <section class="relative flex items-center justify-center h-[50vh] w-full overflow-hidden">
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none" stroke-width="1.5">
        <defs>
          <filter id="gridGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <!-- Leva linija -->
        <path d="M0,80 L150,80 Q200,80 200,130 L200,450 Q200,500 250,500 L400,500" stroke="rgba(0,0,0,0.07)" stroke-linecap="round" />
        <path d="M0,80 L150,80 Q200,80 200,130 L200,450 Q200,500 250,500 L400,500" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#gridGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M0,80 L150,80 Q200,80 200,130 L200,450 Q200,500 250,500 L400,500" stroke="black" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
        <!-- Desna linija -->
        <path d="M1200,100 L1050,100 Q1000,100 1000,150 L1000,450 Q1000,500 950,500 L800,500" stroke="rgba(0,0,0,0.07)" stroke-linecap="round" />
        <path d="M1200,100 L1050,100 Q1000,100 1000,150 L1000,450 Q1000,500 950,500 L800,500" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#gridGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M1200,100 L1050,100 Q1000,100 1000,150 L1000,450 Q1000,500 950,500 L800,500" stroke="black" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>
        <div class="text-center relative z-10">
          <span class="text-sm text-black/30 font-mono uppercase tracking-wider">Our Partners & Licenses</span>
          <h1 class="text-3xl md:text-5xl font-bold px-6 mt-3">Powering European Defense</h1>
        </div>
    </section>

    <!-- Section 7 -->
    <section class="relative flex items-center justify-center h-screen w-full overflow-hidden">
        <div class="relative grid grid-cols-5 grid-rows-5 w-[110%] h-[110%]">
        <div
          v-for="i in 25"
          :key="i"
          class="flex items-center justify-center border border-black/10 relative"
          @mousemove="(e) => { if ([7,8,9,12,13,14,17,18,19].includes(i)) handleGlowMove(e, i) }"
          @mouseleave="() => { delete glowPositions[i] }"
        >
          <div
            v-if="[7,8,9,12,13,14,17,18,19].includes(i) && glowPositions[i]"
            class="absolute pointer-events-none w-full h-full transition-opacity duration-300"
            :style="{ background: `radial-gradient(circle at ${glowPositions[i].x}% ${glowPositions[i].y}%, rgba(2,212,255,0.3) 0%, transparent 60%)`, boxShadow: 'inset 0 0 30px rgba(2,212,255,0.15)' }"
          ></div>
          <img v-if="gridLogos[i]" :src="gridLogos[i]" :alt="'Partner logo'" class="w-[60%] h-auto select-none relative z-10" />
          <span v-else-if="gridLabels[i]" class="text-[10px] md:text-xs font-semibold text-black/40 select-none relative z-10 text-center px-2 leading-tight">{{ gridLabels[i] }}</span>
          <span v-else class="select-none relative z-10"></span>
        </div>
        <!-- Krstići na presecima glow kocki -->
        <svg
          v-for="(pos, idx) in allCrossPositions"
          :key="'cross-'+idx"
          class="absolute w-3 h-3 pointer-events-none z-20 transition-transform duration-300 ease-out"
          :style="{ left: pos.x + '%', top: pos.y + '%', transform: `translate(-50%, -50%) scale(${activeCrossKeys.has(pos.x+'-'+pos.y) ? 1 : 0})` }"
          viewBox="0 0 12 12"
        >
          <line x1="6" y1="1" x2="6" y2="11" stroke="black" stroke-opacity="0.6" stroke-width="1.5" />
          <line x1="1" y1="6" x2="11" y2="6" stroke="black" stroke-opacity="0.6" stroke-width="1.5" />
        </svg>
      </div>
      <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to right, white 0%, transparent 25%, transparent 75%, white 100%), linear-gradient(to bottom, white 0%, transparent 25%, transparent 75%, white 100%);"></div>
    </section>

    <!-- Section 8 - Video scroll -->
    <div class="h-[15vh]"></div>
    <section ref="section8" class="relative w-full border-b border-white/10 h-[500vh]">
      <div class="sticky top-0 h-screen w-full bg-black flex items-center justify-center overflow-hidden">
        <canvas ref="section8Canvas" class="w-full h-full object-cover"></canvas>
        <!-- Trapezoid gore -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-[55px] pointer-events-none rotate-180">
          <svg class="w-[calc(100%+50px)] h-full -ml-[25px]" viewBox="0 0 850 55">
            <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" fill="white" />
          </svg>
        </div>
        <!-- Trapezoid dole -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-[55px] pointer-events-none">
          <svg class="w-[calc(100%+50px)] h-full -ml-[25px]" viewBox="0 0 850 55">
            <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Section 9 + 10 wrapper with circuit lines -->
    <div class="relative">
      <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 1000" preserveAspectRatio="none" fill="none" stroke-width="1.5">
        <defs>
          <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="rgba(0,0,0,0.08)" />
            <stop offset="70%" stop-color="rgba(0,0,0,0.08)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </linearGradient>
          <linearGradient id="fadeRight" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stop-color="rgba(0,0,0,0.08)" />
            <stop offset="70%" stop-color="rgba(0,0,0,0.08)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0)" />
          </linearGradient>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>

        <!-- Gore levo -->
        <path d="M0,80 L120,80 Q140,80 140,100 L140,280 Q140,300 160,300 L300,300" stroke="url(#fadeLeft)" stroke-linecap="round" />
        <!-- Glow + linija gore levo -->
        <path d="M0,80 L120,80 Q140,80 140,100 L140,280 Q140,300 160,300 L300,300" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#softGlow)" stroke-dasharray="12 588" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M0,80 L120,80 Q140,80 140,100 L140,280 Q140,300 160,300 L300,300" stroke="#051e2e" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 592" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2s" repeatCount="indefinite" />
        </path>

        <!-- Glow + linija gore desno -->
        <path d="M1200,60 L1060,60 Q1040,60 1040,80 L1040,240 Q1040,260 1020,260 L900,260" stroke="url(#fadeRight)" stroke-linecap="round" />
        <path d="M1200,60 L1060,60 Q1040,60 1040,80 L1040,240 Q1040,260 1020,260 L900,260" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#softGlow)" stroke-dasharray="12 588" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M1200,60 L1060,60 Q1040,60 1040,80 L1040,240 Q1040,260 1020,260 L900,260" stroke="#051e2e" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 592" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.5s" repeatCount="indefinite" />
        </path>

        <!-- Glow + linija dole levo -->
        <path d="M0,700 L100,700 Q120,700 120,680 L120,520 Q120,500 140,500 L280,500" stroke="url(#fadeLeft)" stroke-linecap="round" />
        <path d="M0,700 L100,700 Q120,700 120,680 L120,520 Q120,500 140,500 L280,500" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#softGlow)" stroke-dasharray="12 588" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M0,700 L100,700 Q120,700 120,680 L120,520 Q120,500 140,500 L280,500" stroke="#051e2e" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 592" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.2s" repeatCount="indefinite" />
        </path>

        <!-- Glow + linija dole desno -->
        <path d="M1200,750 L1080,750 Q1060,750 1060,730 L1060,550 Q1060,530 1040,530 L920,530" stroke="url(#fadeRight)" stroke-linecap="round" />
        <path d="M1200,750 L1080,750 Q1060,750 1060,730 L1060,550 Q1060,530 1040,530 L920,530" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#softGlow)" stroke-dasharray="12 588" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path d="M1200,750 L1080,750 Q1060,750 1060,730 L1060,550 Q1060,530 1040,530 L920,530" stroke="#051e2e" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 592" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-600" dur="2.8s" repeatCount="indefinite" />
        </path>
      </svg>


      <!-- Section 9 -->
      <section ref="section9El" class="relative flex items-center justify-center h-[50vh] w-full overflow-hidden">
          <div class="text-center relative z-10">
            <span class="text-sm text-black/30 font-mono uppercase tracking-wider">Get In Touch</span>
            <h1 class="text-3xl md:text-5xl font-bold px-6 max-w-5xl mt-3">Ready to scale European ammunition production? Let's talk.</h1>
          </div>
      </section>

      <!-- Section 10 - Contact -->
      <section class="relative flex items-center justify-center w-full py-24 md:py-32 px-6">
        <div class="w-full max-w-2xl">
          <div class="flex flex-col items-center mb-12">
            <div class="flex gap-2 mb-4">
              <span class="w-3 h-3 rounded-full bg-[#02d4ff]"></span>
              <span class="w-3 h-3 rounded-full bg-black/15"></span>
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-center">Tell us a bit about you:</h2>
          </div>
          <form class="space-y-10">
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">Full Name *</label>
              <input type="text" placeholder="John Doe" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors" />
            </div>
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">Role or position *</label>
              <input type="text" placeholder="Project manager" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors" />
            </div>
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">Phone number</label>
              <input type="tel" placeholder="(323) 555-0147" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors" />
            </div>
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">Email *</label>
              <input type="email" placeholder="name@email.com" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors" />
            </div>
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">Company name *</label>
              <input type="text" placeholder="Acme" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors" />
            </div>
            <div>
              <label class="block text-base font-semibold text-[#051e2e] mb-2">How Can We Help? *</label>
              <div class="relative">
                <select class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none appearance-none focus:border-[#02d4ff] transition-colors">
                  <option value="">Select options</option>
                  <option value="general">General inquiry</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                </select>
                <span class="absolute right-0 bottom-3 text-black/30">↓</span>
              </div>
            </div>
            <button type="submit" class="relative overflow-hidden w-full bg-black/5 text-black/30 py-5 text-sm font-semibold uppercase tracking-widest font-mono group rounded-lg mt-4">
              <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span class="relative z-10 group-hover:text-[#051e2e] transition-colors duration-300">Save & Continue</span>
            </button>
          </form>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="relative flex flex-col min-h-screen w-full bg-[#051e2e] text-white overflow-hidden">
      <!-- Trapezoid vrh -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-[55px] pointer-events-none rotate-180">
        <svg class="w-[calc(100%+50px)] h-full -ml-[25px]" viewBox="0 0 850 55">
          <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" fill="white" />
        </svg>
      </div>

      <!-- Circuit linije -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none" stroke-width="1.5">
        <defs>
          <filter id="footerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <!-- Linija 1 - gore levo: dole, skreni levo, skreni dole, krivina do levog ruba -->
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#footerGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>

        <!-- Linija 2 - gore desno: dole, skreni desno, skreni dole, skreni do desnog ruba -->
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#footerGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>

        <!-- Linija 3 - dole desno: dijagonala, skreni levo, skreni dole -->
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#footerGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>

        <!-- Linija 4 - dole levo: horizontala, krivina, dijagonala dole -->
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#footerGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
      </svg>

      <!-- Gornji deo - heading + CTA -->
      <div class="flex flex-col items-center text-center px-6 pt-32 md:pt-40">
        <h2 class="text-4xl md:text-7xl font-bold mb-10 max-w-3xl leading-tight">The future of defense starts here.</h2>
        <a href="#" class="relative overflow-hidden bg-white/10 text-white/60 px-12 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest font-mono group">
          <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span class="relative z-10 group-hover:text-[#051e2e] transition-colors duration-300">Request A Briefing</span>
        </a>
      </div>

      <!-- Donji deo - logo + linkovi -->
      <div class="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pb-8 pt-16 gap-12 mt-auto">
        <div>
          <h3 class="text-3xl font-bold mb-8">Shield</h3>
          <p class="text-white/40 text-sm mb-1">Defense Manufacturing</p>
          <p class="text-white/40 text-sm mb-1">Ammunition Production</p>
          <p class="text-white/40 text-sm">NATO Aligned</p>
        </div>
        <div class="flex gap-16 md:gap-24">
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Capabilities</h3>
            <ul class="space-y-3 text-white/60">
              <li>155mm Artillery</li>
              <li>30mm Medium Caliber</li>
              <li>Pyrotechnics</li>
              <li>Storage & Logistics</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4 text-white/40 uppercase text-sm tracking-wider">Company</h3>
            <ul class="space-y-3 text-white/60">
              <li>About</li>
              <li>Resources</li>
              <li>Contact</li>
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
      <div class="px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4 md:gap-0">
        <p>&copy; 2026 Shield. All rights reserved.</p>
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

useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const heroSection = ref<HTMLElement | null>(null)
const heroCanvas = ref<HTMLCanvasElement | null>(null)

const section3 = ref<HTMLElement | null>(null)
const section4 = ref<HTMLElement | null>(null)
const section5 = ref<HTMLElement | null>(null)
const section8 = ref<HTMLElement | null>(null)
const section8Canvas = ref<HTMLCanvasElement | null>(null)
const parallax2 = ref(0)
const parallax6 = ref(0)
const parallax9 = ref(0)
const section9El = ref<HTMLElement | null>(null)
const section4Progress = ref(0)
const pulseTime = ref(0)

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
const section4ColorShift = ref(0)
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

const videoCdn = 'https://filipsstojanovic-hub.github.io/shield-cdn/videos'
const panelVideos: Record<number, string> = {
  1: `${videoCdn}/panel1.mp4`,
  2: `${videoCdn}/panel2.mp4`,
  3: `${videoCdn}/panel3.mp4`,
  4: `${videoCdn}/panel4.mp4`,
}

const panelTexts = [
  '9,050 m² Licensed Facility\nWith 19 Operational Units\nAnd 5,330 m² Dedicated\nStorage Infrastructure',
  '240 Tons TNT-Equivalent\nStorage Capacity Across\nExplosive & Pyrotechnic\nClasses With Indefinite Permits',
  '1,020 m² Available For\nNew Production Lines\nPlus 500 m² Under Construction\nReady For Repurposing',
  'Positioned In Europe\'s\nFastest-Growing\nDefense Market With\n60-Day Manufacturing\nLicensing Pathway',
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
  'With 1,020 m² of available construction area, a 500 m² unit ready for repurposing, and access to the EU ASAP Programme\'s €500M public and €1B private investment pipeline — Shield is positioned to scale production rapidly within Europe\'s accelerating defense industrial base.',
]

function animateSlideText() {
  nextTick(() => {
    const els = [slide5Label.value, slide5Title.value, slide5Desc.value].filter(Boolean) as HTMLElement[]
    els.forEach(el => {
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
        }
      })
    })
  })
}

onMounted(() => {
  // Initial split text animation
  animateSlideText()

  // Grid pulse animation loop
  let pulseStart = performance.now()
  function animatePulse() {
    pulseTime.value = (performance.now() - pulseStart) / 1000
    requestAnimationFrame(animatePulse)
  }
  requestAnimationFrame(animatePulse)

  // Smooth slide progress interpolation
  function smoothSlide() {
    const diff = slide5Progress.value - slide5Smooth.value
    if (Math.abs(diff) > 0.001) {
      slide5Smooth.value += diff * 0.12
    } else {
      slide5Smooth.value = slide5Progress.value
    }
    requestAnimationFrame(smoothSlide)
  }
  requestAnimationFrame(smoothSlide)

  // === Canvas frame sequences via Web Worker ===
  const cdnBase = 'https://filipsstojanovic-hub.github.io/shield-cdn'
  const cdnFrames = 'https://cdn.jsdelivr.net/gh/filipsstojanovic-hub/shield-cdn@master'

  // Hero frames setup
  const totalHeroFrames = 158
  const heroImages: (HTMLImageElement | null)[] = new Array(totalHeroFrames).fill(null)
  let heroLoaded = false
  let heroCanvasW = 0
  let heroCanvasH = 0
  const heroTargetFrame = ref(1)

  // Section 8 frames setup
  const totalS8Frames = 121
  const s8Images: (HTMLImageElement | null)[] = new Array(totalS8Frames).fill(null)
  let s8Loaded = false
  let s8CanvasW = 0
  let s8CanvasH = 0
  const s8TargetFrame = ref(1)

  // spliceNth - distribute indices evenly for fast preview
  function spliceNth(total: number): number[] {
    const indices: number[] = [1] // always load first frame first
    const steps = [2, 4, 8, 16, 32]
    const added = new Set([1])
    for (const step of steps) {
      for (let i = 1; i <= total; i += Math.max(1, Math.floor(total / step))) {
        if (!added.has(i)) { indices.push(i); added.add(i) }
      }
    }
    for (let i = 1; i <= total; i++) {
      if (!added.has(i)) indices.push(i)
    }
    return indices
  }

  // Load frames via Web Worker
  function loadFramesWithWorker(
    frameCount: number,
    urlFn: (i: number) => string,
    images: (HTMLImageElement | null)[],
    onFirstFrame: (img: HTMLImageElement) => void,
    onDone: () => void
  ) {
    const worker = new Worker('/frame-loader.worker.js')
    const urls = Array.from({ length: frameCount }, (_, i) => ({ index: i, url: urlFn(i + 1) }))
    let firstDone = false

    worker.onmessage = (e) => {
      if (e.data.type === 'frame') {
        const img = new Image()
        const url = URL.createObjectURL(e.data.blob)
        img.onload = () => {
          images[e.data.index] = img
          if (!firstDone) {
            firstDone = true
            onFirstFrame(img)
          }
        }
        img.src = url
      } else if (e.data.type === 'done') {
        onDone()
        worker.terminate()
      }
    }

    worker.postMessage({ urls, batchSize: 8, delayMs: 50 })
  }

  // Draw functions
  function drawHero(frame: number) {
    const canvas = heroCanvas.value
    if (!canvas || !heroLoaded) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let img = heroImages[frame - 1]
    if (!img?.complete) {
      for (let off = 1; off <= 10; off++) {
        const b = heroImages[frame - 1 - off]
        if (b?.complete) { img = b; break }
        const a = heroImages[frame - 1 + off]
        if (a?.complete) { img = a; break }
      }
    }
    if (!img?.complete) return
    if (heroCanvasW) { canvas.width = heroCanvasW; canvas.height = heroCanvasH }
    ctx.drawImage(img, 0, 0)
  }

  function drawS8(frame: number) {
    const canvas = section8Canvas.value
    if (!canvas || !s8Loaded) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = s8Images[frame - 1]
    if (!img?.complete) return
    if (s8CanvasW) { canvas.width = s8CanvasW; canvas.height = s8CanvasH }
    ctx.drawImage(img, 0, 0)
  }

  // Start hero frame loading
  loadFramesWithWorker(
    totalHeroFrames,
    (i) => `${cdnBase}/hero-frames/frame_${String(i).padStart(4, '0')}.jpg`,
    heroImages,
    (img) => {
      heroLoaded = true
      heroCanvasW = img.naturalWidth
      heroCanvasH = img.naturalHeight
      drawHero(1)
      window.dispatchEvent(new Event('hero-frames-loaded'))
    },
    () => {}
  )

  // Start section 8 frame loading — lazy, only when near viewport
  let s8LoadStarted = false
  const s8Observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !s8LoadStarted) {
      s8LoadStarted = true
      s8Observer.disconnect()
      loadFramesWithWorker(
        totalS8Frames,
        (i) => `${cdnFrames}/frames/frame_${String(i).padStart(4, '0')}.jpg`,
        s8Images,
        (img) => {
          s8Loaded = true
          s8CanvasW = img.naturalWidth
          s8CanvasH = img.naturalHeight
          drawS8(1)
        },
        () => {}
      )
    }
  }, { rootMargin: '500px' })
  if (section8.value) s8Observer.observe(section8.value)

  // Smooth canvas draw loops
  let heroCurrentFrame = 1
  let heroLastDrawn = 0
  let s8CurrentFrame = 1
  let s8LastDrawn = 0

  function animLoop() {
    // Hero smooth draw
    const hDiff = heroTargetFrame.value - heroCurrentFrame
    if (Math.abs(hDiff) > 0.1) heroCurrentFrame += hDiff * 0.5
    else heroCurrentFrame = heroTargetFrame.value
    const hRound = Math.round(heroCurrentFrame)
    if (hRound !== heroLastDrawn) { heroLastDrawn = hRound; drawHero(hRound) }

    // Section 8 smooth draw
    const sDiff = s8TargetFrame.value - s8CurrentFrame
    if (Math.abs(sDiff) > 0.1) s8CurrentFrame += sDiff * 0.5
    else s8CurrentFrame = s8TargetFrame.value
    const sRound = Math.round(s8CurrentFrame)
    if (sRound !== s8LastDrawn) { s8LastDrawn = sRound; drawS8(sRound) }

    requestAnimationFrame(animLoop)
  }
  requestAnimationFrame(animLoop)

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY

    // Hero canvas scrub
    if (heroSection.value) {
      const rectH = heroSection.value.getBoundingClientRect()
      const heightH = heroSection.value.offsetHeight
      const scrolledH = -rectH.top
      const progressH = Math.max(0, Math.min(1, scrolledH / (heightH - window.innerHeight)))
      heroTargetFrame.value = Math.max(1, Math.min(totalHeroFrames, Math.floor(progressH * (totalHeroFrames - 1)) + 1))
    }

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
      section4Merge.value = Math.max(0, Math.min(1, progress4 * 1.43))
      section4ColorShift.value = progress4 > 0.7 ? 1 : 0
    }

    // Section 8 canvas scrub
    if (section8.value) {
      const rect8 = section8.value.getBoundingClientRect()
      const height8 = section8.value.offsetHeight
      const scrolled8 = -rect8.top
      const progress8 = Math.max(0, Math.min(1, scrolled8 / (height8 - window.innerHeight)))
      s8TargetFrame.value = Math.max(1, Math.min(totalS8Frames, Math.floor(progress8 * (totalS8Frames - 1)) + 1))
    }

    // Section 5
    if (section5.value) {
      const rect5 = section5.value.getBoundingClientRect()
      const height5 = section5.value.offsetHeight
      const scrolled5 = -rect5.top
      const progress5 = Math.max(0, Math.min(1, scrolled5 / (height5 - window.innerHeight)))
      slide5Progress.value = progress5
      const newSlide = Math.min(3, Math.floor(progress5 * 3) + 1)
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
  transition: transform 0.45s cubic-bezier(.19,1,.22,1), opacity 0.3s ease;
}
.num-up-leave-active,
.num-down-leave-active {
  position: absolute;
  transition: transform 0.35s cubic-bezier(.55,.06,.68,.19), opacity 0.25s ease;
}
.num-up-enter-from { opacity: 0; transform: translateY(100%); }
.num-up-leave-to { opacity: 0; transform: translateY(-100%); }
.num-down-enter-from { opacity: 0; transform: translateY(-100%); }
.num-down-leave-to { opacity: 0; transform: translateY(100%); }
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
</style>
