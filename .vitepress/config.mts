import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
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
    nav: nav, // 把定义的nav给替换进来
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: viteConifg,
})
