import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-montserrat)"],
      },
      colors: {
        appBg: "#F7FBF1",
        btn: "#3C6939",
        outline: "#3C6939",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const components = {
        ".h1": {
          "@apply text-4xl md:text-5xl font-bold md:text-balance leading-tight md:leading-snug mb-6":
            {},
        },
        ".h2": {
          "@apply text-2xl md:text-3xl font-bold md:text-balance leading-tight md:leading-snug mb-5":
            {},
        },
        ".h3": {
          "@apply text-xl md:text-2xl font-bold md:text-balance leading-tight md:leading-snug mb-3":
            {},
        },
        ".body-1": {
          "@apply md:text-xl": {},
        },
        ".ol": {
          "@apply flex flex-col gap-y-3 list-decimal ml-6 text-sm md:text-[.9rem]": {},
        },
        ".ul": {
          "@apply flex flex-col gap-y-3 list-disc ml-6 text-sm md:text-[.9rem]": {},
        },
      }
      addComponents(components)
    }),
  ],
}
export default config
