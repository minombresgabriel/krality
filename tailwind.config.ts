import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kralityGreen: {
          DEFAULT: "#3A7D44",
          light: "#6BBF77",
          dark: "#1A5A6A"
        },
        kralityEarth: {
          DEFAULT: "#8B5A2F",
          light: "#E9C46A",
          dark: "#5E3A1F"
        },
        kralitySky: {
          DEFAULT: "#0A2E38",
          light: "#1A5A6A"
        },
        kralityYellow: "#E9C46A",
        kralityPink: "#F26699",
        kralityPurple: "#4429A6",
        kralityBlue: "#2A2F8C",
        kralityGray: "#D7D7D9"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grow-horizontal': 'growHorizontal 2s ease-out forwards',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
        'gradient-x': 'gradientX 5s ease infinite',
        'harvest-float': 'harvestFloat 12s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        harvestFloat: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-30px) translateX(20px)' },
          '50%': { transform: 'translateY(0) translateX(40px)' },
          '75%': { transform: 'translateY(30px) translateX(20px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        growHorizontal: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        scrollDot: {
          '0%': { top: '4px', opacity: '1' },
          '100%': { top: '24px', opacity: '0' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      backgroundImage: {
        'digital-farm': "url('/digital-farm.svg')",
        'noise-texture': "url('/noise.png')",
        'grain-texture': "url('/grain.png')"
      },
      boxShadow: {
        'glow-green': '0 0 25px rgba(110, 231, 183, 0.7)',
        'glow-yellow': '0 0 30px rgba(242, 203, 87, 0.5)',
        'neon-border': '0 0 10px 2px rgba(110, 231, 183, 0.5)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px #3A7D44',
          'text-stroke': '1px #3A7D44',
        },
        '.text-stroke-light': {
          '-webkit-text-stroke': '1px #6BBF77',
          'text-stroke': '1px #6BBF77',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
      };
      addUtilities(newUtilities);
    })
  ],
};

export default config;