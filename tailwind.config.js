/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        spcfy: {
          "primary": "#ff0000",
          "secondary": "#ffffff",
          "accent": "#40bc27",
          "neutral": "#221E38",
          "base-100": "#ffffff",
          "info": "#A6C7ED",
          "success": "#27DD79",
          "warning": "#F7B226",
          "error": "#E32630",

        },
      },
    ]
  }
}