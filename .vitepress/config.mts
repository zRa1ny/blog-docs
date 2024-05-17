import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
// notepad
// inspiration afflatus
// visual effect
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Inspirations",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/avatar.png",
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
  }
})
