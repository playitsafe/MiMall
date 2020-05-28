import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
// import env from './env'
import store from './store'

import App from './App.vue'

// mock 开关
const mock = false;
// import是预编译加载，require执行时才加载,拦截请求转发至mock
// 如果用import，会一律拦截转发至mock,所以浏览器看不到XHR请求
if (mock) {
  require('./mock/api');
}

// 根据前端跨域方式作调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同请求地址
// axios.defaults.baseURL = env.baseURL;
//api error interceptor
axios.interceptors.response.use(function(responese){
  // get return value of axios api
  // 接口规范
  // {
  //   status:0, //0-success | 10-not login 
  //   data: [],
  //   msg: ''
  // }
  let res = responese.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login';
    }
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
