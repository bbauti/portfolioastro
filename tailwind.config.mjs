/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'project-outline': 'rgba(0, 0, 0, 0.05) 0px -3px 0px 0px inset, rgb(255, 255, 255) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.06) 0px 4px 2px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 24px 4px inset, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
        'project-outline-dark': 'rgba(255, 255, 255, 0.1) 0px -3px 0px 0px inset, rgba(0, 0, 0, 0.5) 0px 0px 0px 2px inset, rgba(255, 255, 255, 0.15) 0px 4px 2px 0px inset, rgba(255, 255, 255, 0.1) 0px 0px 24px 4px inset, rgba(255, 255, 255, 0.2) 0px 1px 3px 0px',
      },
    },
  },
  plugins: [],
};
