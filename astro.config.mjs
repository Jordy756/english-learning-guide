// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "English Learning Guide",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
      sidebar: [
        {
          label: "Introducción",
          link: "/",
        },
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
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
