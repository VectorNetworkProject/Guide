module.exports = {
  ga: 'UA-133305122-1',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'VectorNetworkGuide' }],
    ['meta', { name: 'author', content: 'VectorNetworkProject' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://guide.vector-network.tk' }],
    ['meta', { name: 'twitter:image', content: 'https://guide.vector-network.tk/icon.png' }],
    ['meta', { name: 'twitter:site', content: '@Vector_Network_' }],
    ['meta', { name: 'twitter:creator', content: '@InkoHX' }],
    ['meta', { name: 'msapplication-TileColor', content: '#bcbcbc' }],
    ['meta', { name: 'theme-color', content: '#bcbcbc' }],
    ['meta', {property: 'og:title', content: 'VectorNetwork - Guide'}],
    ['meta', {property: 'og:site_name', content: 'VectorNetwork - Guide'}],
    ['meta', {property: 'og:url', content: 'https://guide.vector-network.tk'}],
    ['meta', { property: 'og:image', content: 'https://guide.vector-network.tk/icon.png' }],
    ['meta', { property: 'og:type', content: 'site' }],
    ['link', { rel: 'icon', href: 'https://guide.vector-network.tk/icon.png' }]
  ],
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Vector Network ガイド',
      description: 'ベクトルネットワークのユーザーガイド'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Vector Network Guide',
      description: 'VectorNetwork user guide'
    }
  },
  themeConfig: {
    repo: 'VectorNetworkProject/Guide',
    docsDir: 'guide',
    editLinks: true,
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHubでこのページを編集する。',
        lastUpdated: '最終更新日',
        nav: require('./nav/ja-JP'),
        sidebar: {
          '/guide/': require('./sidebar/Guide')('ガイド'),
          '/elias/': require('./sidebar/Elias')('セットアップ')
        }
      },
      '/en-US/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en-US'),
        sidebar: {
          '/en-US/guide/': require('./sidebar/Guide')('Guide'),
          '/en-US/elias/': require('./sidebar/Elias')('Setup')
        }
      }
    }
  }
}