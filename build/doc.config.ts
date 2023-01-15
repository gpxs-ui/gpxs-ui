import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/GPXS-UI',
  build: {
    outDir: 'docs',
  },
});
