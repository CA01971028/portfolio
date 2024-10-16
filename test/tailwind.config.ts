import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: '#F7E7D1',
        accent: '#FF8E72',
        secondary: '#735D58',
      },
      spacing: {
        '60p': '60%',
      },
    },
  },
  plugins: [],
};
export default config;
