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
        dmsans: ["DM Sans", "sans-serif"], // 👈 Custom font
      },
    },
  },
  plugins: [],
};
