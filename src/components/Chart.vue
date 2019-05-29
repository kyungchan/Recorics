<template>
  <div>
    <swiper class="mainSwiper" :options="mainSwiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(artist, index) in artistImages[position]" :key="index">
        <div class="display-1 white--text">
          <div
            :style=" {
                'text-align': 'center',
                  'width': '100%',
                  'height': '350px',
                  'background-position': 'center center',
                  'background-size': 'cover',
                  'background-image': 'url('+artistImages[position][index][1]+')'
                  } "
          >
            <div style="position: absolute; padding: 5px; backgroundColor: #000000">
              <h5>{{index + 1}}.{{artistImages[position][index][0]}}</h5>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <v-container wrap>
      <v-flex d-flex sm12 md12 lg12 xl12 pa-1>
        <v-layout column wrap align-end>
          <v-select :items="years" label="연도" v-model="year"></v-select>
        </v-layout>
      </v-flex>
      <v-layout id="chart" row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6 pa-1>
          <v-card>
            <v-card-title>
              <h2>가수 영향력 버블 차트</h2>
            </v-card-title>
            <v-container fluid class="pa-0">
              <swiper class="subSwiper" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in chartImages[position]" :key="index">
                  <v-layout align-center justify-center column fill-height>
                    <img id="bubble-chart-img" :src="chartImages[position][index]">
                  </v-layout>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </v-container>

            <v-card-title>
              <v-layout column>
                <div class="subheading">x축(count) : 가수가 차트에 이름을 올린 횟수</div>
                <div class="subheading">y축(title_number) : 가수가 차트에 올린 곡의 개수</div>
                <div class="subheading">원의 크기 : 가수의 랭킹점수의 누적 합</div>
                <div class="subheading">(랭킹점수 = 랭킹의 역수)</div>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6 lg6 xl6 pa-1>
          <v-card>
            <v-card-title>
              <v-layout column>
                <h2>가수 영향력 단어 구름</h2>
                <v-layout justify-center align-center column>
                  <img style="max-width: 600px" :src="cloudImages[position]">
                </v-layout>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      mainSwiperOption: {
        slidesPerView: "3",
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
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
      },
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
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
      },
      year: "2009~2019",
      position: 0,
      years: [
        "2009~2019",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018"
      ],
      artistImages: [
        [
          [
            "소녀시대",
            require("../assets/chart/10years/artist/total/1-소시.jpg")
          ],
          ["싸이", require("../assets/chart/10years/artist/total/2-싸이.jpg")],
          [
            "워너원",
            require("../assets/chart/10years/artist/total/3-워너원.jpg")
          ],
          [
            "아이유",
            require("../assets/chart/10years/artist/total/4-아이유.jpg")
          ],
          ["EXO", require("../assets/chart/10years/artist/total/5-EXO.jpg")],
          [
            "레드벨벳",
            require("../assets/chart/10years/artist/total/6-레벨.jpg")
          ],
          [
            "방탄소년단",
            require("../assets/chart/10years/artist/total/7-BTS.jpg")
          ],
          [
            "볼빨간사춘기",
            require("../assets/chart/10years/artist/total/8-볼빨사.jpg")
          ],
          ["빅뱅", require("../assets/chart/10years/artist/total/9-빅뱅.jpg")],
          [
            "트와이스",
            require("../assets/chart/10years/artist/total/10-트와.jpg")
          ]
        ],
        [
          ["빅뱅", require("../assets/chart/10years/artist/2009/1-빅뱅.jpg")],
          ["2PM", require("../assets/chart/10years/artist/2009/2-2PM.jpg")],
          [
            "다비치",
            require("../assets/chart/10years/artist/2009/3-다비치.jpg")
          ],
          [
            "소녀시대",
            require("../assets/chart/10years/artist/2009/4-소시.jpg")
          ],
          [
            "지드래곤",
            require("../assets/chart/10years/artist/2009/5-지디.jpg")
          ],
          ["카라", require("../assets/chart/10years/artist/2009/6-카라.jpg")],
          [
            "샤이니",
            require("../assets/chart/10years/artist/2009/7-샤이니.jpg")
          ],
          [
            "슈퍼주니어",
            require("../assets/chart/10years/artist/2009/8-슈주.jpg")
          ],
          [
            "애프터스쿨",
            require("../assets/chart/10years/artist/2009/9-앱스.jpg")
          ],
          [
            "브라운아이드걸스",
            require("../assets/chart/10years/artist/2009/10-브아걸.jpg")
          ]
        ],
        [
          ["DOC", require("../assets/chart/10years/artist/2010/1-DOC.jpg")],
          ["거미", require("../assets/chart/10years/artist/2010/2-거미.jpg")],
          ["miss A", require("../assets/chart/10years/artist/2010/3-미쓰.jpg")],
          [
            "비스트",
            require("../assets/chart/10years/artist/2010/4-비스트.jpg")
          ],
          [
            "씨엔블루",
            require("../assets/chart/10years/artist/2010/5-씨엔블루.jpg")
          ],
          [
            "티아라",
            require("../assets/chart/10years/artist/2010/6-티아라.jpg")
          ],
          [
            "브라운아이드소울",
            require("../assets/chart/10years/artist/2010/7-브아솔.jpg")
          ],
          ["포맨", require("../assets/chart/10years/artist/2010/8-포맨.jpg")],
          [
            "소녀시대",
            require("../assets/chart/10years/artist/2010/9-소시.jpg")
          ],
          [
            "포미닛",
            require("../assets/chart/10years/artist/2010/10-포미닛.jpg")
          ]
        ],
        [
          ["10cm", require("../assets/chart/10years/artist/2011/1-10cm.jpg")],
          [
            "김범수",
            require("../assets/chart/10years/artist/2011/2-김범수.jpg")
          ],
          [
            "김연우",
            require("../assets/chart/10years/artist/2011/3-김연우.jpg")
          ],
          ["리쌍", require("../assets/chart/10years/artist/2011/4-리쌍.jpg")],
          [
            "박정현",
            require("../assets/chart/10years/artist/2011/5-박정현.jpg")
          ],
          [
            "백지영",
            require("../assets/chart/10years/artist/2011/6-백지영.jpg")
          ],
          [
            "버스커버스커",
            require("../assets/chart/10years/artist/2011/7-버스커.jpg")
          ],
          [
            "아이유",
            require("../assets/chart/10years/artist/2011/8-아이유.jpg")
          ],
          [
            "원더걸스",
            require("../assets/chart/10years/artist/2011/9-원걸.jpg")
          ],
          [
            "임재범",
            require("../assets/chart/10years/artist/2011/10-임재범.jpg")
          ]
        ],
        [
          [
            "버스커버스커",
            require("../assets/chart/10years/artist/2012/1-버스커.jpg")
          ],
          ["빅뱅", require("../assets/chart/10years/artist/2012/2-빅뱅.jpg")],
          [
            "아이유",
            require("../assets/chart/10years/artist/2012/3-아이유.jpg")
          ],
          ["싸이", require("../assets/chart/10years/artist/2012/4-싸이.jpg")],
          [
            "티아라",
            require("../assets/chart/10years/artist/2012/5-티아라.jpg")
          ],
          [
            "씨스타",
            require("../assets/chart/10years/artist/2012/6-씨스타.jpg")
          ],
          [
            "에일리",
            require("../assets/chart/10years/artist/2012/7-에일리.jpg")
          ],
          [
            "울랄라세션",
            require("../assets/chart/10years/artist/2012/8-울랄라.jpg")
          ],
          [
            "케이윌",
            require("../assets/chart/10years/artist/2012/9-케이윌.jpg")
          ],
          [
            "태티서",
            require("../assets/chart/10years/artist/2012/10-태티서.jpg")
          ]
        ],
        [
          [
            "김예림",
            require("../assets/chart/10years/artist/2013/1-김예림.jpg")
          ],
          [
            "다이나믹듀오",
            require("../assets/chart/10years/artist/2013/2-다듀.jpg")
          ],
          [
            "버스커버스커",
            require("../assets/chart/10years/artist/2013/3-버스커.jpg")
          ],
          [
            "샤이니",
            require("../assets/chart/10years/artist/2013/4-샤이니.jpg")
          ],
          [
            "아이유",
            require("../assets/chart/10years/artist/2013/5-아이유.jpg")
          ],
          [
            "에일리",
            require("../assets/chart/10years/artist/2013/6-에일리.jpg")
          ],
          ["EXO", require("../assets/chart/10years/artist/2013/7-엑소.jpg")],
          [
            "조용필",
            require("../assets/chart/10years/artist/2013/8-조용필.jpg")
          ],
          [
            "지드래곤",
            require("../assets/chart/10years/artist/2013/9-지디.jpg")
          ],
          ["허각", require("../assets/chart/10years/artist/2013/10-허각.jpg")]
        ],
        [
          ["AOA", require("../assets/chart/10years/artist/2014/1-AOA.jpg")],
          [
            "걸스데이",
            require("../assets/chart/10years/artist/2014/2-걸데.jpg")
          ],
          [
            "마마무",
            require("../assets/chart/10years/artist/2014/3-마마무.jpg")
          ],
          [
            "성시경",
            require("../assets/chart/10years/artist/2014/4-성시경.jpg")
          ],
          [
            "아이유",
            require("../assets/chart/10years/artist/2014/5-아이유.jpg")
          ],
          [
            "악동뮤지션",
            require("../assets/chart/10years/artist/2014/6-악뮤.jpg")
          ],
          [
            "에픽하이",
            require("../assets/chart/10years/artist/2014/7-에픽.jpg")
          ],
          [
            "임창정",
            require("../assets/chart/10years/artist/2014/8-임창정.jpg")
          ],
          [
            "크러쉬",
            require("../assets/chart/10years/artist/2014/9-크러쉬.jpg")
          ],
          ["토이", require("../assets/chart/10years/artist/2014/10-토이.jpg")]
        ],
        [
          ["EXID", require("../assets/chart/10years/artist/2015/1-EXID.jpg")],
          [
            "레드벨벳",
            require("../assets/chart/10years/artist/2015/2-레벨.jpg")
          ],
          [
            "박효신",
            require("../assets/chart/10years/artist/2015/3-박효신.jpg")
          ],
          ["혁오", require("../assets/chart/10years/artist/2015/4-혁오.jpg")],
          ["빅뱅", require("../assets/chart/10years/artist/2015/5-빅뱅.jpg")],
          [
            "아이유",
            require("../assets/chart/10years/artist/2015/6-아이유.jpg")
          ],
          [
            "여자친구",
            require("../assets/chart/10years/artist/2015/7-여친.jpg")
          ],
          [
            "자이언티",
            require("../assets/chart/10years/artist/2015/8-자언.jpg")
          ],
          ["지코", require("../assets/chart/10years/artist/2015/9-지코.jpg")],
          [
            "프라이머리",
            require("../assets/chart/10years/artist/2015/10-프라.jpg")
          ]
        ],
        [
          [
            "마마무",
            require("../assets/chart/10years/artist/2016/1-마마무.jpg")
          ],
          [
            "볼빨간사춘기",
            require("../assets/chart/10years/artist/2016/2-볼빨사.jpg")
          ],
          [
            "블랙핑크",
            require("../assets/chart/10years/artist/2016/3-블핑.jpg")
          ],
          [
            "비와이",
            require("../assets/chart/10years/artist/2016/4-비와이.jpg")
          ],
          [
            "M.C the Max",
            require("../assets/chart/10years/artist/2016/5-엠맥.jpg")
          ],
          [
            "여자친구",
            require("../assets/chart/10years/artist/2016/6-여친.jpg")
          ],
          ["태연", require("../assets/chart/10years/artist/2016/7-태연.jpg")],
          [
            "트와이스",
            require("../assets/chart/10years/artist/2016/8-트와.jpg")
          ],
          [
            "하현우",
            require("../assets/chart/10years/artist/2016/9-하현우.jpg")
          ],
          [
            "헤이즈",
            require("../assets/chart/10years/artist/2016/10-헤이즈.jpg")
          ]
        ],
        [
          [
            "잭스키스",
            require("../assets/chart/10years/artist/2017/1-잭키.jpg")
          ],
          [
            "아이유",
            require("../assets/chart/10years/artist/2017/2-아이유.jpg")
          ],
          [
            "볼빨간사춘기",
            require("../assets/chart/10years/artist/2017/3-볼빨사.jpg")
          ],
          [
            "방탄소년단",
            require("../assets/chart/10years/artist/2017/4-방탄.jpg")
          ],
          [
            "워너원",
            require("../assets/chart/10years/artist/2017/5-워너원.jpg")
          ],
          ["EXO", require("../assets/chart/10years/artist/2017/6-엑소.jpg")],
          [
            "하이라이트",
            require("../assets/chart/10years/artist/2017/7-하라.jpg")
          ],
          [
            "한동근",
            require("../assets/chart/10years/artist/2017/8-한동근.jpg")
          ],
          [
            "박재범",
            require("../assets/chart/10years/artist/2017/9-박재범.jpg")
          ],
          [
            "블랙핑크",
            require("../assets/chart/10years/artist/2017/10-블핑.jpg")
          ]
        ],
        [
          ["딘", require("../assets/chart/10years/artist/2018/1-딘.jpg")],
          [
            "레드벨벳",
            require("../assets/chart/10years/artist/2018/2-레벨.jpg")
          ],
          [
            "방탄소년단",
            require("../assets/chart/10years/artist/2018/3-방탄.jpg")
          ],
          [
            "워너원",
            require("../assets/chart/10years/artist/2018/4-워너원.jpg")
          ],
          ["선미", require("../assets/chart/10years/artist/2018/5-선미.jpg")],
          [
            "아이유",
            require("../assets/chart/10years/artist/2018/6-아이유.jpg")
          ],
          [
            "윤종신",
            require("../assets/chart/10years/artist/2018/7-윤종신.jpg")
          ],
          ["종현", require("../assets/chart/10years/artist/2018/8-종현.jpg")],
          [
            "트와이스",
            require("../assets/chart/10years/artist/2018/9-트와.jpg")
          ],
          ["폴킴", require("../assets/chart/10years/artist/2018/10-폴킴.jpg")]
        ],
        [
          ["EXO", require("../assets/chart/10years/artist/2019/1-EXO.jpg")],
          [
            "모모랜드",
            require("../assets/chart/10years/artist/2019/2-모랜.jpg")
          ],
          [
            "방탄소년단",
            require("../assets/chart/10years/artist/2019/3-방탄.jpg")
          ],
          [
            "볼빨간사춘기",
            require("../assets/chart/10years/artist/2019/4-볼빨사.jpg")
          ],
          [
            "아이즈원",
            require("../assets/chart/10years/artist/2019/4-아즈.jpg")
          ],
          ["itzy", require("../assets/chart/10years/artist/2019/5-있지.jpg")],
          ["제니", require("../assets/chart/10years/artist/2019/6-제니.jpg")],
          ["청하", require("../assets/chart/10years/artist/2019/7-청하.jpg")],
          ["태연", require("../assets/chart/10years/artist/2019/8-태연.jpg")],
          [
            "트와이스",
            require("../assets/chart/10years/artist/2019/9-트와.jpg")
          ]
        ]
      ],
      cloudImages: [
        require("../assets/chart/10years/cloud/cloud_total.jpg"),
        require("../assets/chart/10years/cloud/cloud_2009.jpg"),
        require("../assets/chart/10years/cloud/cloud_2010.jpg"),
        require("../assets/chart/10years/cloud/cloud_2011.jpg"),
        require("../assets/chart/10years/cloud/cloud_2012.jpg"),
        require("../assets/chart/10years/cloud/cloud_2013.jpg"),
        require("../assets/chart/10years/cloud/cloud_2014.jpg"),
        require("../assets/chart/10years/cloud/cloud_2015.jpg"),
        require("../assets/chart/10years/cloud/cloud_2016.jpg"),
        require("../assets/chart/10years/cloud/cloud_2017.jpg"),
        require("../assets/chart/10years/cloud/cloud_2018.jpg"),
        require("../assets/chart/10years/cloud/cloud_2019.jpg")
      ],
      chartImages: [
        [
          require("../assets/chart/10years/total/total_all.jpg"),
          require("../assets/chart/10years/total/total_1.jpg"),
          require("../assets/chart/10years/total/total_2.jpg"),
          require("../assets/chart/10years/total/total_3.jpg"),
          require("../assets/chart/10years/total/total_4.jpg"),
          require("../assets/chart/10years/total/total_5.jpg"),
          require("../assets/chart/10years/total/total_6.jpg")
        ],
        [
          require("../assets/chart/10years/2009/2009_all.jpg"),
          require("../assets/chart/10years/2009/2009_1.jpg"),
          require("../assets/chart/10years/2009/2009_2.jpg"),
          require("../assets/chart/10years/2009/2009_3.jpg"),
          require("../assets/chart/10years/2009/2009_4.jpg"),
          require("../assets/chart/10years/2009/2009_5.jpg"),
          require("../assets/chart/10years/2009/2009_6.jpg")
        ],
        [
          require("../assets/chart/10years/2010/2010_all.jpg"),
          require("../assets/chart/10years/2010/2010_1.jpg"),
          require("../assets/chart/10years/2010/2010_2.jpg"),
          require("../assets/chart/10years/2010/2010_3.jpg"),
          require("../assets/chart/10years/2010/2010_4.jpg"),
          require("../assets/chart/10years/2010/2010_5.jpg"),
          require("../assets/chart/10years/2010/2010_6.jpg")
        ],
        [
          require("../assets/chart/10years/2011/2011_all.jpg"),
          require("../assets/chart/10years/2011/2011_1.jpg"),
          require("../assets/chart/10years/2011/2011_2.jpg"),
          require("../assets/chart/10years/2011/2011_3.jpg"),
          require("../assets/chart/10years/2011/2011_4.jpg"),
          require("../assets/chart/10years/2011/2011_5.jpg"),
          require("../assets/chart/10years/2011/2011_6.jpg")
        ],
        [
          require("../assets/chart/10years/2012/2012_all.jpg"),
          require("../assets/chart/10years/2012/2012_1.jpg"),
          require("../assets/chart/10years/2012/2012_2.jpg"),
          require("../assets/chart/10years/2012/2012_3.jpg"),
          require("../assets/chart/10years/2012/2012_4.jpg"),
          require("../assets/chart/10years/2012/2012_5.jpg"),
          require("../assets/chart/10years/2012/2012_6.jpg")
        ],
        [
          require("../assets/chart/10years/2013/2013_all.jpg"),
          require("../assets/chart/10years/2013/2013_1.jpg"),
          require("../assets/chart/10years/2013/2013_2.jpg"),
          require("../assets/chart/10years/2013/2013_3.jpg"),
          require("../assets/chart/10years/2013/2013_4.jpg"),
          require("../assets/chart/10years/2013/2013_5.jpg"),
          require("../assets/chart/10years/2013/2013_6.jpg")
        ],
        [
          require("../assets/chart/10years/2014/2014_all.jpg"),
          require("../assets/chart/10years/2014/2014_1.jpg"),
          require("../assets/chart/10years/2014/2014_2.jpg"),
          require("../assets/chart/10years/2014/2014_3.jpg"),
          require("../assets/chart/10years/2014/2014_4.jpg"),
          require("../assets/chart/10years/2014/2014_5.jpg"),
          require("../assets/chart/10years/2014/2014_6.jpg")
        ],
        [
          require("../assets/chart/10years/2015/2015_all.jpg"),
          require("../assets/chart/10years/2015/2015_1.jpg"),
          require("../assets/chart/10years/2015/2015_2.jpg"),
          require("../assets/chart/10years/2015/2015_3.jpg"),
          require("../assets/chart/10years/2015/2015_4.jpg"),
          require("../assets/chart/10years/2015/2015_5.jpg"),
          require("../assets/chart/10years/2015/2015_6.jpg")
        ],
        [
          require("../assets/chart/10years/2016/2016_all.jpg"),
          require("../assets/chart/10years/2016/2016_1.jpg"),
          require("../assets/chart/10years/2016/2016_2.jpg"),
          require("../assets/chart/10years/2016/2016_3.jpg"),
          require("../assets/chart/10years/2016/2016_4.jpg"),
          require("../assets/chart/10years/2016/2016_5.jpg"),
          require("../assets/chart/10years/2016/2016_6.jpg")
        ],
        [
          require("../assets/chart/10years/2017/2017_all.jpg"),
          require("../assets/chart/10years/2017/2017_1.jpg"),
          require("../assets/chart/10years/2017/2017_2.jpg"),
          require("../assets/chart/10years/2017/2017_3.jpg"),
          require("../assets/chart/10years/2017/2017_4.jpg"),
          require("../assets/chart/10years/2017/2017_5.jpg"),
          require("../assets/chart/10years/2017/2017_6.jpg")
        ],
        [
          require("../assets/chart/10years/2018/2018_all.jpg"),
          require("../assets/chart/10years/2018/2018_1.jpg"),
          require("../assets/chart/10years/2018/2018_2.jpg"),
          require("../assets/chart/10years/2018/2018_3.jpg"),
          require("../assets/chart/10years/2018/2018_4.jpg"),
          require("../assets/chart/10years/2018/2018_5.jpg"),
          require("../assets/chart/10years/2018/2018_6.jpg")
        ]
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {
    year: function(val) {
      if (val == "2009~2019") {
        this.position = 0;
      } else {
        this.position = val - 2008;
      }
    }
  }
};
</script>

<style>
.mainSwiper {
  height: 400px;
  width: 100%;
}
.mainSwiper img {
  width: 100%;
}
.text-shadow {
  text-shadow: 0 0 8px #000000;
}

#bubble-chart-img {
  margin-bottom: 30px;
}

#chart img {
  width: 80%;
}
</style>
