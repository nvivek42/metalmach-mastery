import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chili: {
          600: '#FDFBD4',
          500: '#BDB96A',
          400: '#FDFBD4',
        },
        blue: {
          600: '#42EAFF',
          500: '#4272FF',
          400: '#42EAFF',
        },
        green: {
          600: '#89F336',
          500: '#38A711',
          400: '#89F336',
        },
      },
      animation: {
        "subtle-zoom": "subtle-zoom 20s ease-out forwards",
        "water-reflection": "water-reflection 10s ease-in-out infinite",
      },
      keyframes: {
        "subtle-zoom": {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "water-reflection": {
          "0%, 100%": {
            background: "linear-gradient(0deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
          },
          "50%": {
            background: "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}

export default config