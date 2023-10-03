import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        assets: 'assets',
        // This also doesn't work
        // assets: 'assets/[hash]',
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[hash]/[name][extname]',
                    // This works fine, however
                    // assetFileNames: 'assets/[name].[hash][extname]',
                },
            },
        },
    },
});
