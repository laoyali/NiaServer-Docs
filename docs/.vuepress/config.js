import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/1.jpg' }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'NIA服务器文档站',
      description: 'v4.0',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'NIA Server Docs',
      description: 'v4.0',
    }
  },
  theme: defaultTheme({
    repo: 'NIANIANKNIA/NiaServer-Docs',
    docsRepo: 'https://github.com/NIANIANKNIA/NiaServer-Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    locales: {
      '/en-US/': {
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Home',
            link: '/en-US',
          },
          {
            text: 'Links',
            children: [
              {
                text: 'Blog',
                link: 'https://www.mcnia.top'
              }
            ],
          }
        ],
        sidebar: {
          '/en-US/': [
            {
              text: '服务器游玩相关文档',
              collapsible: true,
              children: ['/regulation.md','/guide.md'],
            },
          ]
        }
      },
      '/': {
        editLinkText: '编辑此页',
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者',
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: '其他链接',
            children: [
              {
                text: 'Blog',
                link: 'https://www.mcnia.top'
              }
            ],
          }
        ],
        sidebar: {
          '/': [
            {
              text: '服务器相关文档',
              collapsible: true,
              children: ['/regulation.md','/guide.md','/Illustrated.md','/update.md'],
            },
            {
              text: '如何部署服务器',
              collapsible: true,
              children: [],
            },
            {
              text: '服务器插件使用说明',
              collapsible: true,
              children: ['/plugins/Ntrade.md'],
            },
            {
              text: '开发者&特别鸣谢',
              collapsible: true,
              children: ['/developers.md','/specialThanks.md'],
            },
          ]
        }
      }
    }
  })
})
