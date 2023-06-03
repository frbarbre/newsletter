/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        "news-darkgray": "hsl(234, 29%, 20%)",
        "news-charcoal": "hsl(235, 18%, 26%)",
        "news-gray": "hsl(231, 7%, 60%)",
        "news-white": "hsl(0, 0%, 100%)",
        "primary-opaque": "rgba(255, 98, 87, 0.4)",
        "primary-friend": "hsl(346, 100%, 66%)",
        "primary-shadow": "rgba(255, 98, 87, 0.7)",
      },
    },
    fontSize: {
      body: "16px",
    },
  },
  plugins: [],
};
