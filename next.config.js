const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',

  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Register custom components here
    // Here, we're registering a component called 'youtube' that uses our custom YouTubeComponent
    components: {
      youtube: './pages/components/Youtube.js',
    },
  },
})

module.exports = withNextra();

