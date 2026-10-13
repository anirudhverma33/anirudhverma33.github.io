import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow from the repository name,
// so renaming the repository (or adding a custom domain) needs no code change.
const base = process.env.BASE_PATH || '/';

// The site used to live at /portfolio/; keep those links (CV, READMEs) working now it is at the root.
const oldPaths = ['', 'research/', 'research/machine-learning/', 'papers/', 'about/', 'research/mhv-quantum-walks/', 'research/pr-box-simulation/', 'research/four-qubit-qrng/', 'research/entangled-photon-source/', 'research/monitored-fermions/'];
const redirects = base === '/' ? Object.fromEntries(oldPaths.map((p) => [`/portfolio/${p}`, `/${p}`])) : {};

export default defineConfig({
  site: process.env.SITE_URL || 'https://anirudhverma33.github.io',
  base,
  redirects,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  integrations: [react()],
});
