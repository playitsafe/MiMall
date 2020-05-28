<template>
  <div class="prod-nav" :class="{'is_fixed': isFixed}">
    <div class="container">
      <div class="prod-title">
        MiPhone 8
      </div>
      <div class="prod-param">
        <a href="javascropt:;">Brief</a><span>|</span>
        <a href="javascropt:;">Parameter</a><span>|</span>
        <a href="javascropt:;">Reviews</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prod-nav',
  data () {
    return {
      isFixed: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },

  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },

  destroyed () {
    // 冒泡销毁
    window.removeEventListener('scroll', this.initHeight,false);
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';

  .prod-nav {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #E5E5E5;
    background-color: #ffffff;

    &.is_fixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px #cccccc;
    }

    .container {
      @include flex();
      
      .prod-title {
        font-size: $fontH;
        color: $colorB;
        font-weight: bold;
      }

      .prod-param {
        font-size: $fontJ;

        span {
          margin: 0 10px;
          color: $colorC;
        }

        a {
          color: $colorC;
        }
      }
    }

  }
</style>