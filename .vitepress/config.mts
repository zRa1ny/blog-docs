import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf';
import SugaratTheme from './user-sugarat-theme'
import viteConifg from './vite.config'
import { fileURLToPath } from 'node:url';
// notepad
// inspiration afflatus
// visual effect
// https://vitepress.dev/reference/site-config
const resolve = (path) => {
  return fileURLToPath(new URL(path, import.meta.url))
}
export default defineConfig({
  extends: SugaratTheme,
  title: "Inspirations",
  description: "",
  srcDir: './src',
  themeConfig: {
    logo: "/assets/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav, 
    sidebar,
    socialLinks: [
      // { icon: 'github', link: '' }
    ]
  },
  vite: viteConifg,
})
