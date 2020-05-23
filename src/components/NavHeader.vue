<template>
  <div class="header">
    <!-- topbar-menu -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">Mi Mall</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">Mi Community</a>
          <a href="javascript:;">Cloud Service</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">Login</a>
          <a href="javascript:;">Register</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>My Cart
          </a>
        </div>
      </div>
    </div>
    <!-- nav-header -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>Mi Phone</span>
            <div class="children">

            </div>
          </div>
          <div class="item-menu">
            <span>RedMi Phone</span>
            <div class="children">
              
            </div>
          </div>
          <div class="item-menu">
            <span>Mi Television</span>
            <div class="children">
              
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;

    .container {
      /* width: 1226px;
      margin-left: auto;
      margin-right: auto; */
      @include flex();

      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;

        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          /* display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;*/
          margin-right: 4px; 
        }
      }
    }
  }

  .nav-header {
    .container {
      height: 112px;
      @include flex();

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;

        a {
          display: inline-block;
          width: 55px;
          height: 55px;
          overflow: hidden;
          white-space: nowrap;

          &::before {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-logo.png');
            /* display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: contain; */
            transition: margin .2s ease;
          }

          &::after {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-home.png');
            /* display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: contain; */
          }

          &:hover::before {
            margin-left: -55px;
            transition: margin .2s ease;
          }
        }
      }

      .header-menu {
        display: inline-block;
        width: 643px;
        /* padding-left: 209px; */
        
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover {

          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;

          input {
            border: none;
            border-right: 1px solid #E0E0E0;
            width: 264;
            height: 50px;
            padding-left: 14px;
          }

          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            /* display: inline-block;
            width: 18px;
            height: 18px;
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain; */
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>