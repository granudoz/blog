// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` é usado pelo sitemap e pelas URLs absolutas de Open Graph.
// Quando o domínio próprio entrar, trocar só aqui.
export default defineConfig({
  site: 'https://granudoz.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});
