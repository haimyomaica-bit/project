import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project/', // Add this line - should match GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
