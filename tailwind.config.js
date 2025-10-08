/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#e6eaf0',
          100: '#ccd5e1',
          200: '#99abc3',
          300: '#6681a5',
          400: '#335786',
          500: '#0C193C', // Main royal blue
          600: '#0a1533',
          700: '#08112a',
          800: '#060e22',
          900: '#040a19',
        },
        accent: {
          light: '#f0f7ff',
          DEFAULT: '#e0f0ff',
          dark: '#c0e0ff',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        'glow': '0 0 15px rgba(12, 25, 60, 0.3)',
        'glow-light': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [require("daisyui")],
}
