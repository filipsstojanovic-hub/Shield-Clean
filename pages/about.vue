<template>
  <main class="min-h-screen w-full bg-white">
    <!-- Hero intro -->
    <section class="relative flex items-center justify-center min-h-[60vh] w-full pt-32 pb-12 px-6">
      <div class="w-full max-w-5xl text-center">
        <span class="text-sm font-mono uppercase tracking-[0.3em] text-black/40">// Who We Are</span>
        <h1 class="text-5xl md:text-7xl font-bold text-[#051e2e] mt-6 leading-[1.05] tracking-tight">
          The team behind EuroShield.
        </h1>
        <p class="text-lg md:text-xl text-black/50 mt-8 max-w-2xl mx-auto leading-relaxed">
          A dedicated group of defense, manufacturing, and logistics specialists building Europe's next ammunition hub.
        </p>
      </div>
    </section>

    <!-- Team grid (placeholder) -->
    <section class="relative w-full bg-white pb-32 px-6 md:px-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div v-for="member in team" :key="member.name" class="group">
          <div class="relative aspect-[4/5] bg-[#051e2e]/5 overflow-hidden rounded-sm">
            <div
              class="absolute inset-0 flex items-center justify-center text-[#051e2e]/20 text-xs font-mono uppercase tracking-[0.2em]"
            >
              [ Photo ]
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl md:text-3xl font-bold text-[#051e2e] leading-tight">{{ member.name }}</h3>
            <p class="text-sm font-mono uppercase tracking-[0.2em] text-[#02d4ff] mt-2">{{ member.role }}</p>
            <p class="text-base text-black/50 mt-4 leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative flex flex-col min-h-screen w-full bg-[#051e2e] text-white overflow-hidden">
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
const { navigateWithCurtain } = useCurtainNav()
const { scrambleText } = useScramble()

useHead({
  title: 'EuroShield · About Us',
  bodyAttrs: {
    class: 'bg-white text-black',
  },
})

const team = [
  {
    name: 'Name Placeholder',
    role: 'Chief Executive Officer',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
  {
    name: 'Name Placeholder',
    role: 'Chief Operations Officer',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
  {
    name: 'Name Placeholder',
    role: 'Head of Manufacturing',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
  {
    name: 'Name Placeholder',
    role: 'Head of Logistics',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
  {
    name: 'Name Placeholder',
    role: 'Head of Compliance',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
  {
    name: 'Name Placeholder',
    role: 'Head of Partnerships',
    bio: 'Short bio placeholder. Background in defense, ammunition, or related field.',
  },
]
</script>
