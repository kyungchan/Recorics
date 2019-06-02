<template>
  <v-container style="maxWidth: 1260px;">
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" pa-4>
        <h1>Music</h1>
      </v-flex>
      <v-flex xs12 sm4 pa-2>
        <v-card>
          <v-card-title primary-title>
            <v-layout column>
              <div class="headline">차트분석</div>
              <br>
              <div class="first">빅데이터 분석으로 생각지도 못한것을 발견을 해보세요.</div>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to="/chart" flat color="primary">더 알아보기</v-btn>
              </v-card-actions>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 pa-2>
        <v-card>
          <v-card-title primary-title>
            <v-layout column>
              <div class="headline">가사검색</div>
              <br>
              <div class="first">어렴풋이 기억나는 가사를 검색해보세요.<br>Recorics가 가장 유사한 가사를 찾아줍니다.</div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to="/explore" flat color="primary">더 알아보기</v-btn>
              </v-card-actions>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 pa-2>
        <v-card>
          <v-card-title primary-title>
            <v-layout column>
              <div class="headline">가사생성</div><br>
              <div class="first">새로운 음악적 영감을 느껴보세요.<br>Recorics가 원하는 가수의 스타일로 가사를 만들어줍니다.</div>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat to="/lyrics" color="primary">더 알아보기</v-btn>
              </v-card-actions>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.first {
  height: 100px;
}
</style>
