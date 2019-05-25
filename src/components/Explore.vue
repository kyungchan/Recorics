<template>
  <v-container fluid pa-0>
    <v-layout id="explore-banner" pa-0 align-center justify-center column fill-height>
      <div pa-0 class="display-1 white--text text-shadow">어렴풋 기억나는 가사를 검색해보세요.</div>
    </v-layout>
    <v-layout id="search-form" align-start justify-center pa-5 row fill-height>
      <v-flex xs12 sm8 md6 lg6>
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
    {{result}}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      query: ""
    };
  },
  methods: {
    similarSearch() {
      this.$http.post("/api/similar", { query: this.query }).then(res => {
        this.result = res.data;
      });
    }
  }
};
</script>

<style>
#explore-banner {
  background-image: url("../assets/similar/similar_banner.jpg");
  background-position: center center;
  background-size: cover;
  height: 400px;
  width: 100%;
}

#search-form .v-btn {
  height: 48px;
  margin-top: 0;
}
</style>
