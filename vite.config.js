import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import sveld from 'vite-plugin-sveld';

export default defineConfig({
  plugins: [sveltekit(), sveld()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
