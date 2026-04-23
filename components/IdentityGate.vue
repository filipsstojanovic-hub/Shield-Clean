<template>
  <transition name="gate-fade">
    <div
      v-if="!passed"
      class="fixed inset-0 z-[10000] text-white overflow-hidden flex items-center pointer-events-none"
    >
      <!-- Identity step (left) -->
      <transition name="slide-in-left">
        <div
          v-if="showIdentity"
          class="relative z-10 w-full md:w-[38%] px-8 md:px-12 flex flex-col items-start pointer-events-auto"
        >
          <div v-if="!identityActivated" class="flex flex-col items-start">
            <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/50 mb-3">
              [ Step 01 / 02 ] — Clearance
            </div>
            <button
              @click="activateIdentity"
              class="text-5xl md:text-7xl font-mono font-semibold uppercase tracking-[0.12em] cursor-pointer hover:text-white/80 transition-colors leading-none"
            >
              Identity
            </button>
            <div class="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              &gt; Click to initiate verification
            </div>
          </div>
          <div v-else class="w-full max-w-md">
            <div class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-1">[ Step 01 / 02 ]</div>
            <div class="text-xs font-mono uppercase tracking-[0.25em] text-white/80 mb-4">
              &gt; Identity — Input Required
            </div>
            <div class="relative" :class="{ 'animate-shake': identityShake }">
              <input
                ref="identityInputRef"
                v-model="identityValue"
                :disabled="identityLocked"
                @keydown.enter="confirmIdentity"
                type="text"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                data-lpignore="true"
                data-1p-ignore="true"
                data-form-type="other"
                name="gate-no-save-1"
                class="w-full bg-transparent text-3xl md:text-4xl font-mono uppercase tracking-wide text-white py-4 pl-6 pr-4 outline-none placeholder-white/30 disabled:text-white/40"
                placeholder=""
              />
              <!-- L-shaped animated border (vertical left + horizontal bottom) -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path
                  :d="`M 1 0 L 1 ${inputHeight - 1} L ${inputWidth - 1} ${inputHeight - 1}`"
                  fill="none"
                  :stroke="identityError ? '#ff4444' : 'white'"
                  stroke-width="1.5"
                  :stroke-dasharray="GATE_PATH_LEN"
                  :stroke-dashoffset="GATE_PATH_LEN - identityLineP * GATE_PATH_LEN"
                  style="transition: stroke 0.3s"
                />
              </svg>
            </div>
            <button
              v-if="identityLineP >= 1 && !identityLocked"
              @click="confirmIdentity"
              class="mt-4 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              [ Confirm ↵ ]
            </button>
            <div v-if="identityError" class="mt-4 text-xs font-mono uppercase tracking-widest text-[#ff4444]">
              Incorrect. Try again.
            </div>
          </div>
        </div>
      </transition>

      <!-- Password step (right) -->
      <transition name="slide-in-right">
        <div
          v-if="showPassword"
          class="relative z-10 w-full md:w-[38%] md:ml-auto px-8 md:px-12 flex flex-col items-end pointer-events-auto"
        >
          <div v-if="!passwordActivated" class="flex flex-col items-end">
            <div class="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/50 mb-3 text-right">
              [ Step 02 / 02 ] — Cipher
            </div>
            <button
              @click="activatePassword"
              class="text-5xl md:text-7xl font-mono font-semibold uppercase tracking-[0.12em] cursor-pointer hover:text-white/80 transition-colors leading-none"
            >
              Password
            </button>
            <div class="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40 text-right">
              &gt; Click to initiate verification
            </div>
          </div>
          <div v-else class="w-full max-w-md">
            <div class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-1 text-right">
              [ Step 02 / 02 ]
            </div>
            <div class="text-xs font-mono uppercase tracking-[0.25em] text-white/80 mb-4 text-right">
              &gt; Password — Input Required
            </div>
            <div class="relative" :class="{ 'animate-shake': passwordShake }">
              <input
                ref="passwordInputRef"
                v-model="passwordValue"
                :disabled="passwordLocked"
                @keydown.enter="confirmPassword"
                type="text"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                data-lpignore="true"
                data-1p-ignore="true"
                data-form-type="other"
                name="gate-no-save-2"
                class="w-full bg-transparent text-3xl md:text-4xl font-mono uppercase tracking-wide text-white py-4 pl-4 pr-6 outline-none text-right placeholder-white/30 disabled:text-white/40 password-mask"
                placeholder=""
              />
              <!-- Mirrored L-shape: vertical right + horizontal bottom -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path
                  :d="`M ${inputWidth - 1} 0 L ${inputWidth - 1} ${inputHeight - 1} L 1 ${inputHeight - 1}`"
                  fill="none"
                  :stroke="passwordError ? '#ff4444' : 'white'"
                  stroke-width="1.5"
                  :stroke-dasharray="GATE_PATH_LEN"
                  :stroke-dashoffset="GATE_PATH_LEN - passwordLineP * GATE_PATH_LEN"
                  style="transition: stroke 0.3s"
                />
              </svg>
            </div>
            <button
              v-if="passwordLineP >= 1 && !passwordLocked"
              @click="confirmPassword"
              class="block ml-auto mt-4 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              [ Confirm ↵ ]
            </button>
            <div
              v-if="passwordError"
              class="mt-4 text-xs font-mono uppercase tracking-widest text-[#ff4444] text-right"
            >
              Incorrect. Try again.
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const props = defineProps<{ waitForLoader?: boolean }>()
const emit = defineEmits<{ passed: [] }>()

const IDENTITY_ANSWER = 'EuroShield'
const PASSWORD_ANSWER = 'EuroDefence'
const GATE_PATH_LEN = 2000
const inputWidth = 448
const inputHeight = 80

const PRELOAD_IMAGES = [
  '/posters/zz-panel1.webp',
  '/posters/zz-panel1r.webp',
  '/posters/zz-panel2.webp',
  '/posters/zz-panel2r.webp',
  '/posters/zz-panel3.webp',
  '/posters/zz-panel3r.webp',
  '/posters/cap1.webp',
  '/posters/cap2.webp',
  '/posters/cap3.webp',
  '/posters/cap4.webp',
  '/posters/panel1.jpg',
]
const PRELOAD_VIDEOS = [
  'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com/videos/panel1.mp4',
  'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com/videos/panel2.mp4',
  'https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com/videos/panel3.mp4',
]
function kickoffBackgroundPreload() {
  // Fire off parallel image fetches (browser caches them)
  PRELOAD_IMAGES.forEach((src) => {
    const img = new Image()
    img.src = src
  })
  // Preload video via <link rel=preload as=video>
  PRELOAD_VIDEOS.forEach((url) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'video'
    link.href = url
    document.head.appendChild(link)
  })
}

const passed = ref(false)
const showIdentity = ref(false)
const showPassword = ref(false)

const identityActivated = ref(false)
const identityValue = ref('')
const identityLineP = ref(0)
const identityShake = ref(false)
const identityError = ref(false)
const identityLocked = ref(false)
const identityInputRef = ref<HTMLInputElement | null>(null)

const passwordActivated = ref(false)
const passwordValue = ref('')
const passwordLineP = ref(0)
const passwordShake = ref(false)
const passwordError = ref(false)
const passwordLocked = ref(false)
const passwordInputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  const revealIdentity = () => {
    kickoffBackgroundPreload()
    setTimeout(() => {
      showIdentity.value = true
    }, 200)
  }

  if (props.waitForLoader) {
    // HudLoader emits 'loader-ready' when animation + frames are done (stays visible)
    window.addEventListener('loader-ready', revealIdentity, { once: true })
  } else {
    // No loader on this route — reveal immediately
    setTimeout(revealIdentity, 300)
  }
})

function activateIdentity() {
  identityActivated.value = true
  nextTick(() => {
    gsap.to(identityLineP, { value: 1, duration: 1.0, ease: 'power2.inOut' })
    setTimeout(() => identityInputRef.value?.focus(), 1100)
  })
}

function confirmIdentity() {
  if (identityLocked.value) return
  if (identityValue.value.trim() === IDENTITY_ANSWER) {
    identityError.value = false
    identityLocked.value = true
    // Transition to password
    setTimeout(() => {
      showPassword.value = true
    }, 600)
  } else {
    identityError.value = true
    identityShake.value = true
    setTimeout(() => {
      identityShake.value = false
    }, 500)
  }
}

function activatePassword() {
  passwordActivated.value = true
  nextTick(() => {
    gsap.to(passwordLineP, { value: 1, duration: 1.0, ease: 'power2.inOut' })
    setTimeout(() => passwordInputRef.value?.focus(), 1100)
  })
}

function confirmPassword() {
  if (passwordLocked.value) return
  if (passwordValue.value.trim() === PASSWORD_ANSWER) {
    passwordError.value = false
    passwordLocked.value = true
    // Step 1: small breath, then slide texts out (left + right)
    setTimeout(() => {
      showIdentity.value = false
      showPassword.value = false
    }, 400)
    // Step 2: after texts have slid off-screen (~700ms), trigger loader fade
    setTimeout(() => {
      window.dispatchEvent(new Event('loader-fade'))
    }, 1200)
    // Step 3: after loader fade completes (~600ms), unmount gate
    setTimeout(() => {
      passed.value = true
      emit('passed')
    }, 2000)
  } else {
    passwordError.value = true
    passwordShake.value = true
    setTimeout(() => {
      passwordShake.value = false
    }, 500)
  }
}
</script>

<style scoped>
.gate-fade-leave-active {
  transition: opacity 0.7s ease-out;
}
.gate-fade-leave-to {
  opacity: 0;
}

/* Visually mask password chars as dots without using type="password" (avoids browser save) */
.password-mask {
  -webkit-text-security: disc;
  text-security: disc;
}

.slide-in-left-enter-active {
  transition:
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.9s;
}
.slide-in-left-enter-from {
  transform: translateX(-120%);
  opacity: 0;
}
.slide-in-left-leave-active {
  transition:
    transform 0.7s cubic-bezier(0.7, 0, 0.84, 0),
    opacity 0.7s;
}
.slide-in-left-leave-to {
  transform: translateX(-120%);
  opacity: 0;
}

.slide-in-right-enter-active {
  transition:
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.9s;
}
.slide-in-right-enter-from {
  transform: translateX(120%);
  opacity: 0;
}
.slide-in-right-leave-active {
  transition:
    transform 0.7s cubic-bezier(0.7, 0, 0.84, 0),
    opacity 0.7s;
}
.slide-in-right-leave-to {
  transform: translateX(120%);
  opacity: 0;
}

.animate-shake {
  animation: shake 0.5s;
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-12px);
  }
  30% {
    transform: translateX(12px);
  }
  45% {
    transform: translateX(-8px);
  }
  60% {
    transform: translateX(8px);
  }
  75% {
    transform: translateX(-4px);
  }
  90% {
    transform: translateX(4px);
  }
}
</style>
