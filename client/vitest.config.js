/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server:{
        proxy:{
            "/api":{
                target: "http://localhost:8080",
                changeOrigin: true,
                secure: false,
            }
        }
    },
    test: {
        framework: 'vitest',
        globals: true,
        environment: 'jsdom',
    }
})