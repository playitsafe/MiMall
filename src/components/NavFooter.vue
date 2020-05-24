<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>Mi Mall</p>
    </div>
    <div class="footer-link">
      <a href="http://test.aaronjs.ml" target="_blank">Aaron JS</a><span>|</span>
      <a href="http://test.aaronjs.ml" target="_blank">MIUI</a><span>|</span>
      <a href="http://test.aaronjs.ml" target="_blank">Privacy Policy</a><span>|</span>
      <a href="http://test.aaronjs.ml" target="_blank">Node JS | Vue JS | React JS</a>
    </div>
    <div class="copyright">
      Copyright ©2020 <span class="domain">aaronjs.ml All Rights</span> Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';

.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;

    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    margin-bottom: 13px;

    a {
      color: #999999;
      display: inline-block;
      margin: 0 10px;
    }

  }

  .copyright {
    .domain {
      color: $colorA
    }
  }
}
</style>