/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Abril: ['Abril Fatface', 'sans-serif'],
        Ga_Maamli: ['Ga Maamli', 'sans-serif'],
        Spicy_Rice: ['Spicy Rice', 'serif'],
        Pacifico: ['Pacifico', 'cursive'],
        Edu_AU: ['Edu AU VIC WA NT Arrows', 'cursive'],
        Sansita_Swashed: ['Sansita Swashed', 'system-ui'],
        space_mono: ["Space Mono", 'monospace']

      },
    },
  },
  plugins: [],
}