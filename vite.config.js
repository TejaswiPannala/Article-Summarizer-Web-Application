// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// Vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Article-Summarizer-Web-Application/",
  css: {
    postcss: './postcss.config.cjs', // point to the new .cjs file
  }
})

