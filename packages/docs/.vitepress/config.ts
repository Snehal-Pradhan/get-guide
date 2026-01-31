import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Building GetGuide",
  description: "Documented the architectural choices and code used to build GetGuide!",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/auth-service' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Auth Service', link: '/auth-service' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
