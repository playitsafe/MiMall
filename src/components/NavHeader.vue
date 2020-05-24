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
              <ul>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
                <li class="product">
                  <!-- open new window -->
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Mi Phone CC9</div>
                    <div class="pro-price">$300</div>
                  </a>
                </li>
              </ul>
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
  name: 'nav-header',
  data() {
    return {
      userName: 'Aaron',
      phoneList: []
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

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
      position: relative;

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
            color: $colorA;

            /* onhover display height */
            .children {
              height: 220px;
              opacity: 1;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
            }
          }

          .children {
            text-align: center;
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: #E5E5E5 1px solid;
            height: 0px;
            overflow: hidden;
            opacity: 0;
            transition: height .5s;
            /* z-index: 10;
            background-color: #ffffff; */

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              position: relative;

              &::before {
              content: '';
              position: absolute;
              top: 28px;
              right: 0;
              border: .5px solid $colorF;
              height: 100px;
              width: 0;
              }

              &:last-child::before {
                display: none;
              }

              a {
                display: inline-block;
              }

              .pro-img {
                height: 137px;
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }

              .pro-price {
                color: $colorA;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
            }
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