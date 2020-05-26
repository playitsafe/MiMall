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

  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
/* @import './assets/scss/mixin.scss';
@import './assets/scss/modal.scss'; */
</style>
