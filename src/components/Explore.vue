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
        <v-flex xs12 sm12 md6 lg6 xl6 pa-2>
          <v-card>
            <v-card-title>
              <v-layout column>
                <h3>혹시 이곡을 찾으셨나요?</h3>
                <br>
                가수: {{resultSong}}
                <br>
                제목: {{resultArtist}}
                <br>가사:
                <br>
                <p v-html="resultQuote"></p>
                <br>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6 pa-2>
          <v-data-table hide-actions :headers="headers" :items="list" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.artist }}</td>
              <td>{{ props.item.title }}</td>
              <td>{{ props.item.quote }}</td>
            </template>
          </v-data-table>
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
        var resultSet = this.result.split("|");
        this.resultQuote = resultSet[0].replace(/\//gi, "<br />");
        this.resultSong = resultSet[1];
        this.resultArtist = resultSet[2];
        this.resultList = resultSet[3]
          .substring(2, resultSet[3].length - 2)
          .replace(/\[/gi, "")
          .replace(/'/gi, "")
          .split("],");
        this.list.c;
        for (var i in this.resultList) {
          var item = this.resultList[i].split(",");
          this.result = item;
          if (i == this.resultList.length - 1) {
            item[3] = item[3].substring(0, item[3].length - 1);
          }
          this.list.push({
            artist: item[0].trimLeft(),
            title: item[1].trimLeft(),
            similarity: item[2].trimLeft() * 100.0,
            quote: item[3]
          });
        }
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
