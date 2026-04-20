<template>
  <main>
    <section class="relative flex items-center justify-center min-h-screen w-full bg-white pt-32 pb-20 px-6">
      <div class="w-full max-w-2xl">
        <div class="flex flex-col items-center mb-12">
          <span class="text-sm text-black/30 font-mono uppercase tracking-wider">Get In Touch</span>
          <h1 class="text-4xl md:text-6xl font-bold text-[#051e2e] text-center mt-4">Let's talk.</h1>
          <p class="text-lg text-black/40 mt-4 text-center max-w-md">Ready to scale European ammunition production? Reach out and our team will get back to you.</p>
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
                <option value="partnership">Partnership</option>
                <option value="procurement">Procurement</option>
              </select>
              <span class="absolute right-0 bottom-3 text-black/30">&#8595;</span>
            </div>
          </div>
          <div>
            <label class="block text-base font-semibold text-[#051e2e] mb-2">Message</label>
            <textarea placeholder="Tell us more..." rows="4" class="w-full bg-transparent border-b border-black/10 pb-3 text-lg text-black/40 outline-none focus:border-[#02d4ff] transition-colors resize-none"></textarea>
          </div>
          <button type="submit" class="relative overflow-hidden w-full bg-black/5 text-black/30 py-5 text-sm font-semibold uppercase tracking-widest font-mono group rounded-lg mt-4">
            <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
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
          <path d="M0,55 C15,55 25,53 32,46 L48,6 C49,2 52,0 56,0 L794,0 C798,0 801,2 802,6 L818,46 C825,53 835,55 850,55 L802,55 L48,55 Z" fill="white" />
        </svg>
      </div>

      <!-- Circuit linije -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none" stroke-width="1.5">
        <defs>
          <filter id="contactFooterGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#contactFooterGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M480,0 L480,70 Q480,120 430,120 L170,120 Q120,120 120,170 L120,365 Q120,440 72,382 L0,296" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#contactFooterGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path d="M720,0 L720,134 Q720,184 770,184 L1030,184 Q1080,184 1080,234 L1080,310 Q1080,360 1130,360 L1200,360" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.5s" repeatCount="indefinite" />
        </path>
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#contactFooterGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path d="M1200,640 L1094,534 Q1080,520 1060,520 L830,520 Q780,520 780,570 L780,800" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.8s" repeatCount="indefinite" />
        </path>
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="rgba(255,255,255,0.15)" stroke-linecap="round" />
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="#02d4ff" stroke-width="25" stroke-linecap="round" opacity="0.6" filter="url(#contactFooterGlow)" stroke-dasharray="12 1188" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M0,520 L240,520 Q360,520 282,611 L120,800" stroke="white" stroke-width="1" stroke-linecap="round" stroke-dasharray="8 1192" stroke-dashoffset="0">
          <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="2.5s" repeatCount="indefinite" />
        </path>
      </svg>

      <!-- Heading + CTA -->
      <div class="flex flex-col items-center text-center px-6 pt-32 md:pt-40">
        <h2 class="text-4xl md:text-7xl font-bold mb-10 max-w-3xl leading-tight">The future of defense starts here.</h2>
        <NuxtLink to="/contact" class="relative overflow-hidden bg-white/10 text-white/60 px-12 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest font-mono group">
          <span class="absolute inset-0 bg-[#02d4ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span class="relative z-10 group-hover:text-[#051e2e] transition-colors duration-300">Request A Briefing</span>
        </NuxtLink>
      </div>

      <!-- Logo + linkovi -->
      <div class="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pb-8 pt-16 gap-12 mt-auto">
        <div>
          <h3 class="text-3xl font-bold mb-8">Shield</h3>
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
              <li><NuxtLink to="/about" class="hover:text-[#02d4ff] transition-colors">About</NuxtLink></li>
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
useHead({
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})
</script>
