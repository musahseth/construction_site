const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/heroBg.jpg')",
        aboutBg: "url('/aboutBg.jpg')",
        serviceBg: "url('/serviceBg.jpg')",
        contactBg: "url('/contactBg.jpg')",
        projectBg: "url('/polygon.png')",
        parallaxBg: "url('/parallax-1.jpg')",
      },
      colors: {
        primary: "var(--primary)",
        "primary-content": "var(--primary-content)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",

        secondary: "var(--secondary)",
        "secondary-content": "var(--secondary-content)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-light": "var(--secondary-light)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",

        copy: "var(--copy)",
        "copy-light": "var(--copy-light)",
        "copy-lighter": "var(--copy-lighter)",

        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",

        "success-content": "var(--success-content)",
        "warning-content": "var(--warning-content)",
        "error-content": "var(--error-content)",
      },
    },
  },
  plugins: [nextui()],
};
