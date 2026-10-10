// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL: dominio final. Mientras sea una propuesta, se puede pasar otro al construir.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://ticketiando.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
  // 'class': el estilo con alcance del padre también llega a los componentes hijos que reciben class (Icono, Logo, Cuenta…)
  scopedStyleStrategy: 'class',
});
