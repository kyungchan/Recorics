<template>
  <v-layout justify-center align-center column>
    <v-layout id="explore-banner" pa-0 align-center justify-center column fill-height>
      <div pa-0 class="display-1 white--text text-shadow">어렴풋 기억나는 가사를 검색해보세요.</div>
    </v-layout>
    <v-container pa-3>
      <v-layout id="search-form" pa-2 justify-center>
        <v-flex xs12 sm12 md12 lg12>
          <v-text-field
            v-model="query"
            prepend-inner-icon="search"
            single-line
            solo
            label="가사를 입력해보세요."
            hint="예) 푸른 바다"
            clearable
          ></v-text-field>
        </v-flex>
        <v-btn @click="similarSearch()" pa-0>검색</v-btn>
      </v-layout>
      {{message}}
      <v-layout v-if="isShow != 0" id="result" column fluid pa-2>
        <v-card>
          <v-card-title>
            <v-layout column>
              <h3>혹시 이곡을 찾으셨나요?</h3>
              <br>
              제목: {{resultSong}}
              <br>
              가수: {{resultArtist}}
              <br>
              가사: {{resultQuote}}
              <br>
            </v-layout>
          </v-card-title>
        </v-card>
        <v-data-table hide-actions :headers="headers" :items="list" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.artist }}</td>
            <td>{{ props.item.quote }}</td>
            <td class="text-xs-right">{{ props.item.similarity }}</td>
          </template>
        </v-data-table>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      isShow: 0,
      headers: [
        {
          text: "제목",
          align: "left",
          sortable: true,
          value: "title"
        },
        {
          text: "가수",
          align: "left",
          sortable: true,
          value: "artist"
        },
        {
          text: "가사",
          align: "center",
          sortable: true,
          value: "quote"
        },
        {
          text: "유사도",
          align: "righ",
          sortable: true,
          value: "similartiy"
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
        this.resultQuote = resultSet[0];
        this.resultSong = resultSet[1];
        this.resultArtist = resultSet[2];
        this.resultList = resultSet[3]
          .substring(2, resultSet[3].length - 2)
          .replace(/\[/gi, "")
          .replace(/'/gi, "")
          .split("],");
        for (var i in this.resultList) {
          var item = this.resultList[i].split(",");
          this.result = item;
          this.list.push({
            artist: item[0].trimLeft(),
            title: item[1].trimLeft(),
            similarity: item[2].trimLeft(),
            quote: item[3].trimLeft()
          });
        }
      });
    }
  }
};
</script>

<style>
#result {
  max-width: 1260px;
  width: 100%;
}

#explore-banner {
  background-image: url("../assets/similar/similar_banner.jpg");
  background-position: center center;
  background-size: cover;
  height: 400px;
  width: 100%;
}

#search-form {
  width: 100%;
  max-width: 1260px;
}

#search-form .v-btn {
  height: 48px;
  margin-top: 0;
}

#search-form .v-text-field {
  width: 100%;
}
</style>
