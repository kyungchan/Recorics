<style>
.mainSwiper { 
  height: 400px;
  width: 100%;
}
.banner1 {
  background-image: url("../../public/img/banner/banner1.jpg");
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
          <div class="display-3 white--text text-shadow">Recorics</div>
          <div class="display-1 white--text font-weight-thin text-shadow">"음악적 영감을 받아보세요."</div>
        </v-layout>
      </swiper-slide>
      <!-- Optional controls -->
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
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
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