<style>
.mainSwiper {
  height: 400px;
  width: 100%;
}
.banner1 {
  background-image: url("../assets/banner/banner1.jpg");
  background-position: center center;
  background-size: cover;
}
.text-shadow {
  text-shadow: 0 0 8px #000000;
}
</style>


<template>
  <v-container fluid class="pa-0">
    <swiper class="mainSwiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="banner1">
        <v-layout align-center justify-center column fill-height>
          <div class="display-1 white--text text-shadow">아이유</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="banner1">
        <v-layout align-center justify-center column fill-height>
          <div class="display-1 white--text text-shadow">블랙핑크</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="banner1">
        <v-layout align-center justify-center column fill-height>
          <div class="display-1 white--text text-shadow">빅뱅</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="banner1">
        <v-layout align-center justify-center column fill-height>
          <div class="display-1 white--text text-shadow">2PM</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="banner1">
        <v-layout align-center justify-center column fill-height>
          <div class="display-1 white--text text-shadow">레드벨벳</div>
        </v-layout>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-container>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>