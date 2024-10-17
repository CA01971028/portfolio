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
        html: "#E44D26",         // HTMLイメージカラー
        css: "#1572B6",          // CSSイメージカラー
        javascript: "#F7DF1E",   // JavaScriptイメージカラー
        typescript: "#007ACC",   // TypeScriptイメージカラー
        python: "#306998",       // Pythonイメージカラー
        flask: "#6c757d",        // Flaskのグレー
        react: "#61DAFB",        // Reactイメージカラー
        nextjs: "#000000",       // Next.jsイメージカラー
        bootstrap: "#563D7C",    // Bootstrapイメージカラー
        tailwind: "#38B2AC",     // Tailwind CSSイメージカラー
        mui: "#1976D2",          // Material-UIイメージカラー
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'], 
      },
      
    },
  },
  plugins: [],
};
export default config;
