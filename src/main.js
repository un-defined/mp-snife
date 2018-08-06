import { Fly } from 'flyio/dist/npm/wx';
import Vue from 'vue';
import App from './App';

const fly = new Fly();

// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio';
  return config;
});
// 配置请求基地址
// fly.config.baseURL="https://wendux.github.io/"

Vue.config.productionTip = false;
Vue.prototype.$rq = fly;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/logistics/main',
      'pages/qrCode/main',
      'pages/qCellCore/main',
      'pages/ipAddr/main',
      'pages/shortenUrl/main',
      'pages/exchangeRate/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'SAK',
      navigationBarTextStyle: 'black',
    },
  },
};
