<template>
  <div>
    <div style="background: linear-gradient(#9C27B0, #D81B60)">
      <v-container class="artist-list">
        <div class="lyrics-title">가수를 선택해보세요.</div>
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
                          el: '#showLyrics',
                          easing: [0.77, 0, 0.175, 1],
                          duration: 1500 
                      }"
            >
              <div :class="{'name-hover': isHovered(index)}" class="artist-name">{{artist.name}}</div>
              <img :class="{'img-hover': isHovered(index)}" class="artist-img" :src="artist.image">
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div style id="showLyrics">{{lyrics}}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lyrics: "ddd",
      hoverArtist: -1,
      seletedArtist: -1,
      artists: [
        {
          name: "아이유",
          image: require("../../public/img/artist/iu.jpg"),
          script: "iu"
        },
        {
          name: "홍진영",
          image: require("../../public/img/artist/hjy.jpg"),
          script: "hongjinyoung"
        },
        {
          name: "장기하",
          image: require("../../public/img/artist/jgh.jpg"),
          script: "janggiha"
        },
        {
          name: "dok2",
          image: require("../../public/img/artist/dok2.jpg"),
          script: "dok2"
        },
        {
          name: "볼빨간사춘기",
          image: require("../../public/img/artist/bbg.jpg"),
          script: "bolbbalgan"
        }
      ]
    };
  },
  watch: {},
  methods: {
    selectImg(seletedArtist) {
      this.lyrics = "";
      this.seletedArtist = seletedArtist;
      this.$http
        .get("/api/lyrics/" + this.artists[seletedArtist].script)
        .then(res => {
          this.lyrics = res.data;
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
.lyrics-show {
  max-width: 1000px;
  height: auto;
  max-width: 1200px;
  padding-top: 60px;
  transition: height 2s;
}

.lyrics-title {
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 10px;
}

.artist-list {
  max-width: 1200px;
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
