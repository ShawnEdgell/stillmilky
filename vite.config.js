// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chakra-ui-vendor': ['@chakra-ui/react', '@chakra-ui/icons'],
          // Add more vendor packages here if needed
        }
      }
    }
  }
});
