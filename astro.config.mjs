import { defineConfig } from 'astro/config';

export default defineConfig({
  // Deine restliche Astro-Konfiguration...
  
  server: {
    allowedHosts: ['x0000.de'] // Schaltet den Host für Astros internen Server frei
  },
  vite: {
    preview: {
      allowedHosts: ['x0000.de'] // Schaltet den Host für Vites Preview-Server frei
    }
  }
});
