import type { Config } from 'tailwindcss'

export default {
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sofia Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
