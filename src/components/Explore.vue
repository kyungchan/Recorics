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
          <v-text-field
            v-model="query"
            prepend-inner-icon="search"
            single-line
            solo
            label="가사를 입력해보세요."
            hint="예) 아마 너였을 거야."
            clearable
          ></v-text-field>
        </v-flex>
        <v-btn @click="similarSearch()" pa-0>검색</v-btn>
      </v-layout>
      {{message}}
      <v-layout v-if="isShow != 0" id="result" row wrap>
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
              <v-data-table style=" width: 100%" hide-actions :headers="headers" :items="resultList" class="elevation-1">
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
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      banner: require("../assets/similar/similar_banner.jpg"),
      isShow: 0,
      headers: [
        {
          text: "가수",
          align: "left",
          sortable: true,
          value: "artist"
        },
        {
          text: "제목",
          align: "left",
          sortable: true,
          value: "title"
        },
        {
          text: "가사",
          align: "center",
          sortable: true,
          value: "quote"
        }
      ],
      message: "",
      list: [],
      result: "",
      resultLyrics: "",
      resultQuote: "",
      resultArtist: "",
      resultSong: "",
      query: "",
      resultList: ""
    };
  },
  methods: {
    similarSearch() {
      this.message = "검색중입니다.";
      this.$http.post("/api/similar", { query: this.query }).then(res => {
        this.message = "";
        this.isShow = 1;
        this.result = res.data;
        this.resultLyrics = this.result["wholeLyrics"].replace(/\//ig, "<br />");
        this.resultQuote = this.result["mostSimilar"];
        this.resultSong = this.result["songTitle"];
        this.resultArtist = this.result["artistName"];
        this.resultList = this.result["list"];
      });
    }
  }
};
</script>

<style>
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
