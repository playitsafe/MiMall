<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">

        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">Phone SIM Card</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">TV SmartBox </a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Laptop Tablet</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Home Appliance</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Outdoors</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Smart Router</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Bags</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">Accessories</a>
              <div class="children"></div>
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
        loop: true,
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
          &:hover {
            background-color: $colorA;
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
        }
      }

    }

  }
}
</style>