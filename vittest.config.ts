import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// configuration
export default defineConfig({
    plugins: [ vue(), vueJsx() ],
    test: {
        include: [ '**/*.test.js' ],
        exclude: [ '**/node_modules/**' ],
        globals: true,
        environment: 'jsdom',
        watch: false,
        root: './',
    }
});
