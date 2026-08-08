/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — pulled directly from the reference moodboard
        cream: {
          DEFAULT: '#F9F8F6', // pearl white background
          soft: '#FBF9F5',
          deep: '#F3EFE7',
        },
        sand: {
          DEFAULT: '#EAE2D6', // light beige / silk shadow
          dark: '#DCD0BC',
        },
        gold: {
          light: '#E4D3AE',
          DEFAULT: '#C9A66B', // primary gold accent
          deep: '#A87E45',
          ink: '#8A6A3C',
        },
        ink: {
          DEFAULT: '#3A342C', // warm charcoal text
          soft: '#6B6255',
          faint: '#A79D8C',
        },
        blush: '#EBD6CE',
      },
      fontFamily: {
        // Display serif — the "monogram" voice, used sparingly for names
        display: ['"Cormorant Garamond"', 'serif'],
        // Flowing script — stands in for the calligraphic Arabic mark in the refs
        script: ['"Tangerine"', '"Great Vibes"', 'cursive'],
        // Body serif — quiet, readable, warm
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        // Utility — small caps labels, eyebrows, dates
        label: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        pearl: '0 30px 80px -20px rgba(168, 126, 69, 0.25), 0 10px 30px -10px rgba(58, 52, 44, 0.12)',
        'pearl-sm': '0 12px 30px -10px rgba(168, 126, 69, 0.22)',
        seal: 'inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(138,106,60,0.35), 0 8px 20px rgba(138,106,60,0.35)',
      },
      backgroundImage: {
        silk: 'radial-gradient(120% 120% at 20% 10%, #FFFFFF 0%, #F6F1E8 45%, #EAE1D0 100%)',
        'silk-deep': 'radial-gradient(120% 120% at 80% 90%, #F3ECDD 0%, #E8DCC3 60%, #DCCBA8 100%)',
        petal: 'linear-gradient(160deg, #FFFFFF 0%, #F3ECDD 55%, #E7D9BE 100%)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3.5s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        'spin-slow': 'spinSlow 16s linear infinite',
      },
    },
  },
  plugins: [],
}
