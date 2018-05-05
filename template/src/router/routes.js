module.exports = [
  {
    alias: '/',
    path: '/pages/home/main',
    name: 'home_main',
    config: {
      enablePullDownRefresh: true
    }
  },
  {
    path: '/pages/myself/main',
    name: 'myself_main',
    config: {
      navigationBarTitleText: '我的',
      enablePullDownRefresh: true
    }
  }
];
