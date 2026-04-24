export default defineNuxtConfig({
  compatibilityDate: '2025-03-27',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  app: {
    head: {
      title: 'EuroShield',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        // Preconnect so DNS/TLS to Google's font hosts is resolved before the stylesheet request fires.
        // Saves ~150-300ms on cold loads. `crossorigin` required on gstatic to match font fetch credentials.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;500;600;700;900&display=swap',
        },
      ],
    },
  },
})
