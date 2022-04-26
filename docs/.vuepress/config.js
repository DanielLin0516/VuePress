module.exports = {
  title: 'Qing网关',
  description: 'Qing网关',
  head: [
    ['link',
      { rel: 'icon', href: '/布局.png' }
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  themeConfig: {
    logo: '/布局.png',  //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },

      //格式二：添加下拉菜单，link指向的文件路径
      { text: '功能演示', link: '/actions/introduction.md' },

      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/dwanda' },
    ]
  },
  sidebar: {
    '/pages/folder1/': [
      {
        title: '测试菜单1',   // 一级菜单名称
        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        children: [
          ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ['test3.md', '子菜单2']
        ]
      },
      {
        title: '测试菜单2',
        collapsable: false,
        children: [
          ['test2.md', '子菜单1']
        ]
      }
    ],

    //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
  }


}