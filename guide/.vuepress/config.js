module.exports = {
    ga: 'UA-133305122-1',
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