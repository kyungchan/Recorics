<template>
  <v-layout justify-center align-center column>
    <v-parallax height="400" id="explore-banner" dark :src="banner">
      <v-layout pa-0 align-center justify-center column>
        <div pa-0 class="display-1 white--text text-shadow">어렴풋이 기억나는 가사를 검색해보세요.</div>
      </v-layout>
    </v-parallax>

    <v-container pa-3 justify-center>
      <v-layout id="search-form" pa-2 justify-center>
        <v-flex>
          <form v-on:submit.prevent="similarSearch">
            <v-text-field
              v-model="query"
              prepend-inner-icon="search"
              single-line
              solo
              required
              counter
              :rules="textRules"
              maxlength="50"
              label="가사를 입력해보세요."
              hint="아이유, 장기하, 홍진영, 볼빨간사춘기, Dok2의 곡만 가능합니다. 예) 아마 너였을 거야."
              clearable
            ></v-text-field>
          </form>
        </v-flex>
        <v-btn @click="similarSearch()" pa-0>검색</v-btn>
      </v-layout>
      <div id="resultScroll"></div>
      <transition name="fadeHeight" mode="out-in">
        <v-layout v-show="isShow" id="result" row wrap>
          <v-flex xs12 sm12 md6 lg6 xl6 pa-2 d-flex>
            <v-card>
              <v-card-title>
                <v-layout column>
                  <h2>혹시 이 곡을 찾으셨나요?</h2>
                  <br>
                  <h3>가수: {{resultSong}}</h3>
                  <h3>제목: {{resultArtist}}</h3>
                  <h3>가장 유사한 문장: {{resultQuote}}</h3>
                  <h3>가사:</h3>
                  <p v-html="resultLyrics"></p>
                  <br>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 pa-2 d-flex>
            <v-card>
              <v-card-title>
                <h2 style="margin-bottom:25px; width: 100%">다른 유사한 가사</h2>
                <v-data-table
                  style=" width: 100%"
                  hide-actions
                  :headers="headers"
                  :items="resultList"
                  class="elevation-1"
                >
                  <template v-slot:no-data>
                    <v-layout justify-center>유사한 가사를 가진 곡이 없습니다.</v-layout>
                  </template>
                  <template v-slot:items="props">
                    <td>{{ props.item[0] }}</td>
                    <td>{{ props.item[1] }}</td>
                    <td>{{ props.item[3] }}</td>
                  </template>
                </v-data-table>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </transition>
      <v-layout v-if="showProgress" justify-center>
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
var VueScrollTo = require("vue-scrollto");

export default {
  data() {
    return {
      textRules: [
        v => v.length >= 4 || v.length == 0 || "4글자 이상 입력해주세요."
      ],
      showProgress: false,
      banner: require("../assets/similar/similar_banner.jpg"),
      isShow: false,
      headers: [
        {
          text: "가수",
          align: "left",
          value: "artist",
          sortable: false
        },
        {
          text: "제목",
          align: "left",
          value: "title",
          sortable: false
        },
        {
          text: "가사",
          align: "center",
          value: "quote",
          sortable: false
        }
      ],
      result: "",
      resultLyrics: "",
      resultQuote: "",
      resultArtist: "",
      resultSong: "",
      query: "",
      resultList: []
    };
  },
  methods: {
    similarSearch() {
      if (this.query.length >= 4) {
        this.showProgress = true;
        this.isShow = false;
        this.$http.post("/api/similar", { query: this.query }).then(res => {
          VueScrollTo.scrollTo("#resultScroll", 1500, {
            offset: -70,
            easing: [0.77, 0, 0.175, 1]
          });
          this.showProgress = false;
          this.isShow = true;
          this.result = res.data;

          this.resultQuote = this.result["mostSimilar"];
          this.resultLyrics = this.result["wholeLyrics"]
            .replace(/\//gi, "<br />")
            .replace(
              new RegExp(this.resultQuote, "g"),
              '<span style="background-color: rgba(255, 111, 97, 0.3">' +
                this.resultQuote +
                "</span>"
            );
          this.resultSong = this.result["songTitle"];
          this.resultArtist = this.result["artistName"];
          this.resultList = this.result["list"];
        });
      }
    }
  }
};
</script>

<style>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  overflow: hidden;
  transition: all 1s;
  max-height: 2000px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  overflow: hidden;
  max-height: 0px;
}

#result {
  width: 100%;
}
#search-form {
  width: 100%;
}

#explore-banner {
  height: 400px;
  width: 100%;
}

#search-form .v-btn {
  height: 48px;
  margin-top: 0;
}

#search-form .v-text-field {
  width: 100%;
}
</style>
