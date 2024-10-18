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
        html: "#E44D26",
        css: "#1572B6",
        javascript: "#F7DF1E",
        typescript: "#007ACC",
        python: "#306998",
        flask: "#6c757d",
        react: "#61DAFB",
        nextjs: "#000000",
        bootstrap: "#563D7C",
        tailwind: "#38B2AC",
        mui: "#1976D2",
        mysql: "#4479A1",
        mongodb: "#47A248",
        aws: "#FF9900",  
        azure: "#0078D4", 
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
