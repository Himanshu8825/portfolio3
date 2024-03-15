/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#030972",
        "bg-secondary": "#6111E2",
      },
      backgroundImage: (theme) => ({
        about_bg:
          "linear-gradient(to right, rgba(166, 84, 238, 0.473), rgba(178, 101, 221, 0.5), rgba(171, 90, 231, 0.2))",

        work_bg:
          "linear-gradient(to right, rgba(167, 84, 238, 0.2), rgba(175, 94, 225, 0.2), rgba(178, 101, 221, 0.2), rgba(171, 90, 231, 0.2))",
      }),
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
