import { resolve } from "path";

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'pages/projects.html'),
                music: resolve(__dirname, 'pages/music.html'),
                startups: resolve(__dirname, 'pages/startups.html')
            }
        }
    }
});
