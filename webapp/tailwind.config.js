/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground-rgb))',
        primary: {
          DEFAULT: 'rgb(var(--primary-color-rgb))',
          hover: 'rgb(var(--primary-hover-color-rgb))',
          muted: 'rgb(var(--primary-muted-color-rgb))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-color-rgb))',
          hover: 'rgb(var(--secondary-hover-color-rgb))',
          muted: 'rgb(var(--secondary-muted-color-rgb))',
        },
      },
      spacing: {
        'btn-padding-x': 'var(--btn-padding-x)',
        'btn-padding-y': 'var(--btn-padding-y)',
      },
      height: {
        'primary-menu': 'var(--primary-menu-height)',
        'secondary-menu': 'var(--secondary-menu-height)',
        'secondary-menu-mobile': 'var(--secondary-menu-mobile-height)'
      },
    },
  },
  plugins: [],
};
