// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
