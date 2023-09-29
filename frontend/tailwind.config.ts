import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "bright-gray": "#ECECEC",
        "dark-gray": "#7e8286",
        black: "#101820",
      },
    },
  },
  plugins: [],
};
export default config;
