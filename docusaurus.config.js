module.exports = {
  title: 'プログラミング初心者のためのPython講座',
  // tagline: 'The tagline of my site',
  url: 'https://mtoyokura.github.io/',
  baseUrl: '/python-koza/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/python-logo.png',
  organizationName: 'MToyokura',
  projectName: 'python-koza',
  themeConfig: {
    navbar: {
      title: 'プログラミング初心者のためのPython入門',
      logo: {
        alt: 'Python Logo',
        src: 'img/python-logo.png',
      },
    },
    footer: {
      style: 'dark',
      copyright: `<a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a><br/>注があるものを除いて、<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">プログラミング初心者のためのPython入門</span> は<a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a>の下で提供されています。<br/>制作： M. Toyokura and Y. Kiuchi`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          'https://github.com/MToyokura/python-koza/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
