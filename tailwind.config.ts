/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
    },
  },
  plugins: [],
};
