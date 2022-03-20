module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#D32250",
      secondary: {
        400: "#242E4A",
        600: "rgb(36 46 74 / 30%)",
      },
      tertiary: "#F3995A",
      gary: {
        50: "#F8F3F3",
        400: "#E9EEF7",
      },
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xxs: ["0.625rem", "0.75rem"],
      xs: [".75rem", "1.125rem"],
      sm: [".875rem", "1rem"],
      base: ["1rem", "1.25rem"],
      lg: ["1.25rem", "1.5rem"],
      xl: ["1.5rem", "1.75rem"],
      "2xl": ["1.75rem", "2rem"],
      "3xl": ["2rem", "2.25rem"],
    },
    extend: {},
  },
  plugins: [],
};
