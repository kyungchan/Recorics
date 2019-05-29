<template>
  <v-layout justify-center column>
    <v-flex fluid style="width:100%; background: linear-gradient(#FF6F61, #D81B60)" elevation-5>
      <v-container id="artist-list">
        <div class="lyrics-title text-shadow">가수를 선택해보세요.</div>
        <v-layout row wrap justify-center text-xs-center>
          <v-flex
            xs6
            sm6
            md4
            lg4
            xl4
            pa-3
            v-for="(artist, index) in artists"
            :key="index"
            @mouseover="hoverImg(index)"
            @mousedown="selectImg(index)"
            @mouseout="hoverImg(-1)"
          >
            <div
              style="position: relative;"
              v-scroll-to="{ 
                          el: '#scroll',
                          easing: [0.77, 0, 0.175, 1],
                          duration: 1500 
                      }"
            >
              <div :class="{'name-hover': isHovered(index)}" class="artist-name">{{artist.name}}</div>
              <img :class="{'img-hover': isHovered(index)}" class="artist-img" :src="artist.image">
            </div>
          </v-flex>
        </v-layout>

        <div id="scroll"></div>
      </v-container>
    </v-flex>

    <v-layout id="showLyrics" v-if="seletedArtist != -1" pa-0 wrap row justify-center>
      <v-flex pa-3 d-flex xs12 sm12 md6 lg5 xl5 justify-center>
        <v-card>
          <v-card-title primary-title>
            <v-layout column>
              <v-layout pa-3 row align-center>
                <img class="lyrics_img" :src="artists[seletedArtist].image">
                <h1>{{artists[seletedArtist].name}}</h1>
              </v-layout>
              <br>
              <div v-html="lyrics"></div>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex row d-flex pa-3 xs12 sm12 md6 lg5 xl5>
        <v-card>
          <v-card-title primary-title>
            <v-layout pa-3 column>
              <h1 style="margin-bottom: 10px;">가사 생성 근거</h1>
              <img :src="artists[seletedArtist].chart">
              <img :src="artists[seletedArtist].cloud">
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lyrics: "",
      hoverArtist: -1,
      seletedArtist: -1,
      artists: [
        {
          name: "아이유",
          image: require("../assets/lyrics/iu.jpg"),
          chart: require("../assets/lyrics/chart/iu_chart.jpg"),
          cloud: require("../assets/lyrics/chart/iu_cloud.jpg"),
          script: "iu"
        },
        {
          name: "홍진영",
          image: require("../assets/lyrics/hjy.jpg"),
          chart: require("../assets/lyrics/chart/hjy_chart.jpg"),
          cloud: require("../assets/lyrics/chart/hjy_cloud.jpg"),
          script: "hongjinyoung"
        },
        {
          name: "장기하",
          image: require("../assets/lyrics/jgh.jpg"),
          chart: require("../assets/lyrics/chart/jghchart.jpg"),
          cloud: require("../assets/lyrics/chart/jgh_cloud.jpg"),
          script: "janggiha"
        },
        {
          name: "dok2",
          image: require("../assets/lyrics/dok2.jpg"),
          chart: require("../assets/lyrics/chart/dok2_chart.jpg"),
          cloud: require("../assets/lyrics/chart/dok2_cloud.jpg"),
          script: "dok2"
        },
        {
          name: "볼빨간사춘기",
          image: require("../assets/lyrics/bbg.jpg"),
          chart: require("../assets/lyrics/chart/bbg_chart.jpg"),
          cloud: require("../assets/lyrics/chart/bbg_cloud.jpg"),
          script: "bolbbalgan"
        }
      ]
    };
  },
  watch: {},
  methods: {
    selectImg(seletedArtist) {
      this.lyrics = "가사생성중입니다.";
      this.seletedArtist = seletedArtist;
      this.$http
        .get("/api/lyrics/" + this.artists[seletedArtist].script)
        .then(res => {
          this.lyrics = res.data.replace(/(?:\r\n|\r|\n)/g, "<br />");
        });
    },
    isSeleted(seletedArtist) {
      return this.seletedArtist === seletedArtist;
    },
    hoverImg(hoverIndex) {
      this.hoverArtist = hoverIndex;
    },
    isHovered(hoverIndex) {
      return this.hoverArtist === hoverIndex;
    }
  }
};
</script>

<style>
.lyrics_img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
}
#showLyrics {
}

#showLyrics img {
  object-fit: scale-down;
}
.lyrics-show {
  background-color: white;
  height: auto;
  padding-top: 60px;
  transition: height 2s;
}

.lyrics-title {
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 10px;
}

#artist-list {
  max-width: 1260px;
}

.artist-img {
  display: inline-block;
  width: 100%;
  max-width: 240px;
  transition: opacity 0.5s;
  z-index: 0;
  object-fit: cover;
  object-position: bottom;
  border-radius: 50%;
}

.artist-name {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 25px;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0;
  z-index: 1;
  text-shadow: 0px 0px 3px black;
  color: white;
  transition: opacity 0.5s;
}

.artist-seleted {
  border: 2px solid purple;
}

.img-hover {
  opacity: 0.5;
  transition: opacity 0.5s;
}

.name-hover {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
