<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">

        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">Phone SIM Card</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(subItem, i) in item" :key="i">
                    <a :href="subItem ? '/#/product'+subItem.id : ''">
                      <img :src="subItem ? subItem.img : '/imgs/item-box-1.png'" alt="">
                      {{subItem ? subItem.name : 'DefaultPhone'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">TV SmartBox </a>
              <div class="children1"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Laptop Tablet</a>
              <div class="children1"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Home Appliance</a>
              <div class="children1"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Outdoors</a>
              <div class="children11"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Smart Router</a>
              <div class="children1"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Bags</a>
              <div class="children1"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Accessories</a>
              <div class="children1"></div>
            </li>
          </ul>
        </div>

        <Swiper class="swiper" :options="swiperOption">
          <SwiperSlide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img">
            </a>
          </SwiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </Swiper>
        
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,i) in adsList" :key="i">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="javascript:;">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>Mobile</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href=""><img src="/imgs/mix-alpha.jpg"></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span class="new-pro">New Arrival</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price">${{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: false,
        autoplay: true,
        effect : 'coverflow',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      // 6 * 4 grid
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: 'MiPhone CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: 'MiPhone 8'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'RedMi K20'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '4G Zone'
          },
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: []
    }
  },
  
  mounted () {
    this.init();
  },

  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      }).then(res => {
        this.phoneList = [res.list.slice(0,4), res.list.slice(4,8)]
      });
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';

.index {
  .swiper-box {
    position: relative;

    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }

      .swiper-button-prev {
        left: 274px;
      }
    }

    .nav-menu {
      /* box-sizing: border-box; */
      background-color: rgba(0,0,0,.3);
      position: absolute;
      width: 264px;
      height: 451px;
      top: 0;
      left: 0;
      z-index: 5;
      padding: 26px 0;

      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          /* position: relative; */

          &:hover {
            background-color: $colorA;

            .children {
              display: block;
            }
          }

          a {
            color: #ffffff;
            padding-left: 30px;
            font-size: 14px;
            display: block;
            position: relative;

            &::after {
              position: absolute;
              right: 15px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              top: 50%;
              transform: translateY(-50%);
            }
          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;

                a {
                  color: $colorB;

                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }

              }

            }
          }
        }
      }

    }

  }

  .ads-box {
    /* display: flex;
    justify-content: space-between; */
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;

          &:last-child {
            margin-bottom: 0;
          }

          .item {
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;

            span {
              display: inline-block;
              width: 77px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: #ffffff;

              &.new-pro {
                background-color: #7ECF68;
              }
              &.kill-pro {
                background-color: #E82626;
              }
            }

            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }

            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: 14px;
                font-weight: bold;
              }

              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }

              .price {
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;

                &::after {
                  content: '';
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }

  }
}
</style>