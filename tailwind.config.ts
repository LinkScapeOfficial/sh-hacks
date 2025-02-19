import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        text: {
          DEFAULT: "#0a0a0b",
          50: "#f2f2f3",
          100: "#e4e4e7",
          200: "#c9c9cf",
          300: "#afafb6",
          400: "#94949e",
          500: "#797986",
          600: "#61616b",
          700: "#494950",
          800: "#303036",
          900: "#18181b",
          950: "#0c0c0d",
        },
        background: {
          DEFAULT: "#f6f8fa",
          50: "#eff2f6",
          100: "#dee6ed",
          200: "#bdccdb",
          300: "#9cb2c9",
          400: "#7b99b7",
          500: "#5b7fa4",
          600: "#486684",
          700: "#364c63",
          800: "#243342",
          900: "#121921",
          950: "#090d10",
        },
        primary: {
          DEFAULT: "#4a7db8",
          50: "#edf2f8",
          100: "#dae5f1",
          200: "#b6cbe2",
          300: "#91b0d4",
          400: "#6c96c6",
          500: "#477cb8",
          600: "#396393",
          700: "#2b4a6e",
          800: "#1d3249",
          900: "#0e1925",
          950: "#070c12",
        },
        secondary: {
          DEFAULT: "#93bae6",
          50: "#eaf2fa",
          100: "#d6e4f5",
          200: "#accaec",
          300: "#83afe2",
          400: "#5a95d8",
          500: "#307acf",
          600: "#2762a5",
          700: "#1d497c",
          800: "#133153",
          900: "#0a1829",
          950: "#050c15",
        },
        accent: {
          DEFAULT: "#5da1ee",
          50: "#e8f2fd",
          100: "#d1e4fa",
          200: "#a3c9f5",
          300: "#75aef0",
          400: "#4693ec",
          500: "#1879e7",
          600: "#1360b9",
          700: "#0f488a",
          800: "#0a305c",
          900: "#05182e",
          950: "#020c17",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      inter: "var(--font-inter)",
      helvetica: "var(--font-helvetica)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
