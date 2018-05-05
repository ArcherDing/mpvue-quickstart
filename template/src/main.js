import Vue from 'vue';
import store from '@/store';
import App from '@/App';
import MpvueRouterPatch from 'mpvue-router-patch';

Vue.config.productionTip = false;
Vue.use(MpvueRouterPatch);

const app = new Vue({
  store,
  ...App
});
app.$mount();

export default {
  config: {
    pages: ['^pages/home/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#E15856',
      navigationBarTitleText: '微信小程序',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      color: '#989898',
      selectedColor: '#E15856',
      backgroundColor: '#FFFFFF',
      list: [
        {
          pagePath: 'pages/home/main',
          text: '首页',
          iconPath: 'static/images/home.png',
          selectedIconPath: 'static/images/home_selected.png'
        },
        {
          pagePath: 'pages/myself/main',
          text: '我的',
          iconPath: 'static/images/myself.png',
          selectedIconPath: 'static/images/myself_selected.png'
        }
      ]
    }
  }
};
