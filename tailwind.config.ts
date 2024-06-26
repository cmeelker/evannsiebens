import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      base: [
        "1.875rem", // 30 px
        {
          lineHeight: "1.875rem",
          letterSpacing: "[-0.06rem]",
        },
      ],
      lg: [
        "3.125rem", // 50px
        {
          lineHeight: "3.125rem",
          letterSpacing: "[-0.06rem]",
        },
      ],
      md: [
        "2.825rem",
        {
          lineHeight: "2.825rem",
          letterSpacing: "[-0.06rem]",
        },
      ],
      sm: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "[-0.06rem]",
        },
      ],
      xs: [
        "1rem",
        {
          lineHeight: "1rem",
          letterSpacing: "[-0.06rem]",
        },
      ],
    },
    extend: {
      colors: {
        "bright-gray": "#ECECEC",
        "dark-gray": "#7e8286",
        black: "#000000",
        mirage: "#101820",
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        xs: "400px",
      },
      flex: {
        carousel: "0 0 auto",
      },
    },
  },
  plugins: [],
};
export default config;
