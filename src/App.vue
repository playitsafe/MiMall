<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios';
// import jsonp from 'jsonp';
// import storage from '@/storage';

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // storage.clear('a', 'user');
    // mock 1=>local json file
    /**
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res;
    });
    // mock 2: 3rd party online mock
    this.axios.get('/user/login').then((res) => {
      this.res = res;
    });
    */
    //mock 3 local mock js
    this.axios.get('/user/login').then((res) => {
      this.res = res;
    });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
