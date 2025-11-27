const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueDevTools = require('vite-plugin-vue-devtools')
const path = require('path')

module.exports = defineConfig({
  base: '/ocio-app/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
