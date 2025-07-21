import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Plaque Allemagne",
        short_name: "Plaque DE",
        description: "Localise l'origine d'une plaque minéralogique allemande",
        theme_color: "#e9ecef",
        background_color: "#e9ecef",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
})
