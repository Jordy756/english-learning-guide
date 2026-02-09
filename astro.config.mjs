// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TalkScript",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
      favicon: "/favicon.ico",
      logo: {
        src: "./public/logo.webp",
        alt: "TalkScript Logo",
      },
      components: {
        Head: "./src/components/overrides/Head.astro",
        Sidebar: "./src/components/overrides/Sidebar.astro",
        // Hero: "./src/components/overrides/Hero.astro",
        // PageFrame: "./src/components/overrides/PageFrame.astro",
        // Header: "./src/components/overrides/Header.astro",
      },
      sidebar: [
        {
          label: "Fundamentos Básicos",
          autogenerate: { directory: "basics" },
        },
        {
          label: "Nivel Intermedio",
          autogenerate: { directory: "intermediate" },
        },
        {
          label: "Nivel Avanzado",
          autogenerate: { directory: "advanced" },
        },
        {
          label: "Referencia Rápida",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [
        ion({
          footer: {
            text: "© 2025 TalkScript. All rights reserved.",
          },
          icons: {},
        }),
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "Space Grotesk",
        cssVariable: "--font-space-grotesk",
        provider: fontProviders.google(),
        display: "swap",
        subsets: ["latin"],
        styles: ["normal"],
        weights: [300],
        formats: ["woff2"],
        unicodeRange: ["U+0000-00FF"],
        fallbacks: ["sans-serif"],
      },
      {
        name: "Space Mono",
        cssVariable: "--font-space-mono",
        provider: fontProviders.google(),
        display: "swap",
        subsets: ["latin"],
        styles: ["normal"],
        weights: [400, 700],
        formats: ["woff2"],
        unicodeRange: ["U+0000-00FF"],
        fallbacks: ["monospace"],
      },
    ],
  },
});
