// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://bccomponents.in', // Update with actual domain
    integrations: [
        tailwind(),
        sitemap(),
    ],
    // Enable prefetch for faster navigation
    prefetch: true,
    // Build options for Vercel
    output: 'static',
    build: {
        inlineStylesheets: 'auto',
    },
});
