import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://tsubakiya-yuji.github.io/',
	outDir: './docs',
	base: '/tsubakiya-yuji',
	integrations: [tailwind()],
});
