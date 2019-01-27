module.exports = {
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
        docsDir: 'docs',
        editLinks: true,
        locales: {
            '/': {
                label: '日本語',
                selectText: '言語',
                editLinkText: 'GitHubでこのページを編集する。',
                lastUpdated: '最終更新日',
                nav: require('./nav/ja-JP'),
                serviceWorker: {
                    updatePopup: {
                        message: '新しいコンテンツが利用可能です。',
                        buttonText: '更新する。'
                    }
                }
            },
            '/en-US/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en-US'),
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                }
            }
        }
    }
}