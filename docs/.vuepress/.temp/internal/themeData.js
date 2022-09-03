export const themeData = JSON.parse("{\"repo\":\"NIANIANKNIA/NiaServer-Docs\",\"docsRepo\":\"https://github.com/NIANIANKNIA/NiaServer-Docs\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/edit/:branch/:path\",\"locales\":{\"/en-US/\":{\"selectLanguageName\":\"English\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/en-US\"},{\"text\":\"Links\",\"children\":[{\"text\":\"Blog\",\"link\":\"https://www.mcnia.top\"}]}],\"sidebar\":{\"/en-US/\":[{\"text\":\"服务器游玩相关文档\",\"collapsible\":true,\"children\":[\"/regulation.md\",\"/guide.md\"]}]}},\"/\":{\"editLinkText\":\"编辑此页\",\"lastUpdatedText\":\"最近更新时间\",\"contributorsText\":\"贡献者\",\"selectLanguageName\":\"简体中文\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"其他链接\",\"children\":[{\"text\":\"Blog\",\"link\":\"https://www.mcnia.top\"}]}],\"sidebar\":{\"/\":[{\"text\":\"服务器相关文档\",\"collapsible\":true,\"children\":[\"/regulation.md\",\"/guide.md\",\"/Illustrated.md\",\"/update.md\"]},{\"text\":\"如何部署服务器\",\"collapsible\":true,\"children\":[]},{\"text\":\"服务器插件使用说明\",\"collapsible\":true,\"children\":[\"/plugins/Ntrade.md\"]},{\"text\":\"开发者&特别鸣谢\",\"collapsible\":true,\"children\":[\"/developers.md\",\"/specialThanks.md\"]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
