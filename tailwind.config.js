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
        heroBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1714695391/Nyande-constructions/ppp/WhatsApp_Image_2024-04-28_at_16.44.44_4cde2b2e_crcyzn.jpg')",
        aboutBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1713715559/Nyande-constructions/WhatsApp_Image_2024-04-01_at_07.21.39_457712df_miyayy.jpg')",
        serviceBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1713715502/Nyande-constructions/pro-2/IMG-20240331-WA0021_mdseo7.jpg')",
        contactBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1713715516/Nyande-constructions/pro-4/WhatsApp_Image_2024-03-31_at_18.00.01_aaceccfc_fyacpa.jpg')",
        projectBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1714696925/Nyande-constructions/public/polygon_cwvxxi.png')",
        parallaxBg:
          "url('https://res.cloudinary.com/djqosl8kp/image/upload/v1714696926/Nyande-constructions/public/parallax-1_vjbttq.jpg')",
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
