import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  image: {
    domains: ["termotronic.com"]
  },
  site: "https://termotronic.com",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  vite: {
    assetsInclude: ['**/*.{png,jpg,gif,mp4}'],
    resolve: {
      alias: {
        '@lib': '/src/lib',
        '@utils': '/src/utils',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@content': '/src/content'
      }
    }
  }
});