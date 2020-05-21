import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

// 根据前端跨域方式作调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
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
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
