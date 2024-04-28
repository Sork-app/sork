/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FFBD59",

          "secondary": "#FFDE59",

          "accent": "#fb7185",

          "neutral": "#FFBD59",

          "base-100": "#323232",

          "base-200": "#383838",

          "info": "#00ffff",

          "success": "#4ade80",

          "warning": "#fdba74",

          "error": "#ef4444",
        },
      },
    ]
  },
}
