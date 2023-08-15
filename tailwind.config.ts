import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        large_Ns: "1920px",
        extraBig_Ns:"1600px",
        big_Ns: "1440px",
        md_Ns: "425px",
        smd_Ns: "375px",
        sm_Ns: "320px",
        xs_Ns: "300px",
      },
      colors: {
        primary: "#25252E",
        secondary: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
