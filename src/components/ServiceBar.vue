<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>Book Repairment</li>
        <li><span class="icon-return"></span>Return Item</li>
        <li><span class="icon-swap"></span>Swap Item</li>
        <li><span class="icon-post"></span>Free Postage</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss">
@import '@/assets/scss/mixin.scss';
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;

  .container {
    li {
      display: inline-block;
      width: 24.9%;
      /* float: left; */
      text-align: center;
      border-right: 1px solid #E5E5E5;

      &:last-child {
        border-right: none;
      }

      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
      }

      .icon-setting {
        @include bgImg(20px, 20px, '/imgs/icon-setting.png');
      }

      .icon-return {
        @include bgImg(20px, 20px, '/imgs/icon-7day.png');
      }

      .icon-swap {
        @include bgImg(20px, 20px, '/imgs/icon-15day.png');
      }

      .icon-post {
        @include bgImg(20px, 20px, '/imgs/icon-post.png');
      }
    }
  }
}
</style>