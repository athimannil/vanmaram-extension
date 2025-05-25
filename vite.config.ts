/// <reference types="node" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync } from 'fs';
import { viteStaticCopy } from 'vite-plugin-static-copy';

function manifestPlugin() {
  return {
    name: 'copy-manifest',
    closeBundle() {
      const mode =
        process.env.MODE ||
        process.env.npm_lifecycle_event?.split(':')[1] ||
        'chrome';
      const manifestSrc = resolve(__dirname, `manifest/manifest.${mode}.json`);
      const manifestDest = resolve(__dirname, `dist/${mode}/manifest.json`);
      mkdirSync(resolve(__dirname, `dist/${mode}`), { recursive: true });
      copyFileSync(manifestSrc, manifestDest);
    },
  };
}

export default defineConfig(({ mode }) => ({
  root: 'src',
  build: {
    outDir: `../dist/${mode}`,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/popup.html'),
      },
    },
  },
  plugins: [
    manifestPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'public/icons'),
          dest: '.',
        },
        {
          src: resolve(__dirname, 'public/home-logo.png'),
          dest: '.',
        },
      ],
    }),
  ],
}));
