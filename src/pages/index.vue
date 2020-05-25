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

      </div>
      <div class="banner">

      </div>
      <div class="product-box">

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
      ]
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
}
</style>