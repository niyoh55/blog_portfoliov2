module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        orangutan_orange: "url('../img/orangutan_square.jpg')",
        bg_1: "url('../img/elden-ring-video-game-photography-hd-wallpaper-preview.jpg')",
      },
    },
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
      montserrat: ["Montserrat"],
      gilda: ["Gilda Display"],
    },
  },
  plugins: [],
};
