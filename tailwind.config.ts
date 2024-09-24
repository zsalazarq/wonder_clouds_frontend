import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/theme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color-background': '#104D7E', // Color 1
        'color': '#080337', // Color 2
        'text-color03': '#3357ff', // Color 3
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
