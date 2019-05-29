<template>
  <v-layout column wrap>
    <v-flex xm12 md12 lg12 x12>
      <v-layout id="pamphlet-banner" align-center justify-center column fill-height>
        <a class="white--text text-shadow" style="font-size:100px;">Recorics</a>
        <a class="white--text text-shadow" style="font-size: 50px;">"음악적 영감을 받아보세요."</a>
      </v-layout>
    </v-flex>

    <!-- 1번째줄 -->

    <v-layout row wrap pa-3>
      <v-flex md6 lg6 xl6 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="margin-bottom:20px">프로젝트 개요</div>
            <div class="title">
              Recorics는 대부분의 음원 서비스가 곡 제목, 가수 이름 등의 정보 위주인 것에서 탈피하여, 차별화된 기능을 제공하는 새로운 음원 플랫폼이다.
              음원의 가사에 주목한 프로젝트이자 머신러닝 기반의 기능을 제공하는것으로 새로운 사용자 경험을 제공한다.
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md6 lg6 xl6 pa-2>
        <v-card>
          <v-card-title>
            <div class="display-1" style="width: 100%; margin-bottom:20px">프로젝트 배경 및 목표</div>
            <div class="title">
              배경 - 음악은 현대인들의 생활에 깊숙하게 녹아들어 있다.
              <br>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;양질의 서비스를 제공하는 음원 서비스들의 출현에 따라 1인 음원 소비량도 지속적으로 증가하고 있다.
              <br>
              <br>목표 - 차별화된 기능을 제공하는 것을 통해, 수많은 음원 서비스들 사이에서 독자적인 입지를 확보한다.
              <br>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;본 프로젝트는 기존에 없었던 새로운 음원 플랫폼으로써 음원 시장의 새로운 영역을 개척하는 것을 목표로 한다.
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 2번째줄 -->

    <v-layout row wrap pa-3>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="margin-bottom:20px">차트분석 (K-MEANS)</div>
            <div class="title">
              <img src="../assets/pamphlet/kmeans.jpg" style="width: 100%">
              <div style="width:100%; text-align: center;">그림1. K-means 알고리즘 클러스터링 예시</div>
              <br>1. 데이터 크롤링
              <br>&nbsp; 1-1) 차트 데이터 크롤링
              <br>&nbsp; &nbsp; &nbsp; : 네이버 뮤직에서 연도별 TOP100 차트를 수집
              <br>&nbsp; &nbsp; &nbsp; 연, 월, 주, 가수, 곡 제목, 순위를 수집하여 엑셀에 저장
              <br>&nbsp; 1-2) 가사 데이터 크롤링
              <br>&nbsp; &nbsp; &nbsp; : 네이버 뮤직에서 특정 가수의 전곡 가사를 수집
              <br>&nbsp; &nbsp; &nbsp; 가수, 곡 제목, 트랙 아이디로 구분하며, 가사는 문장별로 나누어서 엑셀에 저장
              <br>
              <br>2. 데이터 전처리
              <br>&nbsp; 2-1) 차트 분석을 위해 차트에 가수가 이름을 올린 횟수, 올린 곡의 수, 흥행력을 구한 후 별도의 엑셀 열에 저장
              <br>&nbsp; 2-2) 가사 생성을 위해 특수문자, 곡의 형식([VERSE], [INTRO])을 제거하는 전처리
              <br>

              <br>3. 데이터 분류
              <br>&nbsp; 가수가 이름을 올린 횟수, 올린 곡의 수, 흥행력 이 세가지 특징으로 K-MEANS 알고리즘을 사용하여 가수를 6개의 군집으로 분류
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-layout column>
          <v-card style="margin-bottom:20px">
            <v-card-title>
              <div class="display-1" style="margin-bottom:20px">가사 유사도 검색 (N-gram)</div>
              <div class="title">
                N-gram이란 문장에서 ‘이웃한 N개의 문자’를 의미
                <br>서로 다른 2개의 문장을 비교하여 출현하는 단어의 종류와 빈도를 구함
                <br>논문 도용, 소스코드의 무단 복제, 가사 유사도 분석에 응용
                <br>
                <br>[A] 오늘 잠실에서 맛있는 스테이크를 먹었다.
                <br>[B] 잠실에서 먹었던 오늘의 스테이크는 맛있었다.
                <br>
                <br>[2-gram] 76% 유사
                <br>[‘오늘’, ‘잠실’, ‘실에’, ‘에서’, ‘서 ‘, ‘ 맛’, ‘맛있’, ‘는 ‘, ‘ 스’, ‘스테’, ‘테이’, ‘이크’, ‘ 먹’, ‘먹었’, ‘었다’, ‘다.’]
                <br>
                <br>[3-gram] 45% 유사
                <br>[‘잠실에’, ‘실에서’, ‘에서 ’, ‘ 맛있’, ‘ 스테‘, ‘스테이’, ‘테이크’, ‘ 먹었‘, ‘었다.’]
                <br>
                <br>전체 문장에서 일치하는 단어의 종류와 빈도의 비율을 계산하는 것으로 유사도를 계산
              </div>
            </v-card-title>
          </v-card>
          <v-card>
            <v-card-title>
              <div class="display-1" style="width: 100%; margin-bottom:20px">가사생성 (마르코프 체인)</div>

              <div class="title">
                [걱정들 마세요 매우 좋아합니다.]
                <br>
                <br>1. 문장을 형태소 분석(Konlpy)하여 품사별로 나눔 (명사, 동사 등)
                <br>
                <br>2. 각 요소의 전후관계를 알 수 있게 3개의 요소 씩 묶어 사전에 등록
                <br>&nbsp; &nbsp; &nbsp; 걱정들|마세요|매우
                <br>&nbsp; &nbsp; &nbsp; 마세요|매우|좋아
                <br>&nbsp; &nbsp; &nbsp; 매우|좋아|합니다
                <br>&nbsp; &nbsp; &nbsp; 좋아|합니다|.
                <br>
                <br>3. 사전을 참고해 특정 단어에 대해 이어질 수 있는 단어를 확률적으로 선택
                <br>&nbsp; &nbsp; &nbsp; 걱정:
                <br>&nbsp; &nbsp; &nbsp; 들:
                <br>
                &nbsp; &nbsp; &nbsp; {마, 이제}
                <br>&nbsp; &nbsp; &nbsp; 마세요:
                <br>
                &nbsp; &nbsp; &nbsp; {설마, 그게}
                <br>&nbsp; &nbsp; &nbsp; 마라:
                <br>
                &nbsp; &nbsp; &nbsp; {괜찮다, 전혀}
                <br>
                <br>4. 앞 단어와 이어질 수 있는 단어가 선택되면 그를 기반으로 문장을 구성
                <br>&nbsp; &nbsp; &nbsp; 걱정 마라 전혀
                <br>
                <br>
                <br>
              </div>
            </v-card-title>
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="width: 100%; margin-bottom:20px">웹 서비스 구조</div>

            <div class="title">
              <img src="../assets/pamphlet/webstructure.jpg" style="width: 100%">
              <div style="width:100%; text-align: center;">
                그림2. 전체 구조
                <br>
              </div>
              <img src="../assets/pamphlet/router.jpg" style="width: 100%">
              <div style="width:100%; text-align: center;">
                <br>그림3. 라우팅구조
              </div>
              <br>1. Single Page Appliacation (SPA)
              <br>&nbsp; 하나의 페이지에서 페이지 이동 없이 화면 전환
              <br>
              <br>2. Client Side Rendering (CSR)
              <br>&nbsp; 모든 리소스를 Client에서 한번에 받아 Client측에서 Page Rendering 진행
              <br>
              <br>3. Responsive Web
              <br>&nbsp; 다양한 해상도에 알맞게 요소들의 크기 자동으로 조정, 위치 재배치
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 3번째줄 -->

    <v-layout row wrap pa-3>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="width: 100%; margin-bottom:20px">차트분석 기능</div>
            <div class="title">
              <img src="../assets/pamphlet/chart.jpg" style="width: 100%; margin: 0;">
              <div style="width:100%; text-align: center;">
                그림4. 차트분석 기능 페이지
                <br>
              </div>
              <br>
              <br>· 10년치 탑100 차트 데이터를 분석
              <br>· 차트 점유율 / 단기간 흥행력 등을 가시적으로 표현
              <br>· 가수들을 머신러닝을 통해 6개의 군집으로 분류
              <br>· 분석 결과를 통해 유용한 정보 제공
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="width: 100%; margin-bottom:20px">가사검색 기능</div>
            <div class="title">
              <img src="../assets/pamphlet/similar.jpg" style="width: 100%">
              <div style="width:100%; text-align: center;">그림5. 가사검색 페이지</div>
              <br>
              <br>· 사용자가 입력한 문장과의 유사도를 측정하여 노래를 검색
              <br>· 검색한 노래의 유사도를 기준으로 비슷한 노래를 추천
              <br>· 유사도 분석 알고리즘을 통한 가사 분석
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md4 lg4 xl4 pa-2 d-flex>
        <v-card>
          <v-card-title>
            <div class="display-1" style="width: 100%; margin-bottom:20px">가사생성 기능</div>
            <div class="title">
              <img src="../assets/pamphlet/lyrics.jpg" style="width: 100%">
              <div style="width:100%; text-align: center;">
                그림6. 가사생성 기능 페이지
                <br>
              </div>
              <br>
              <br>· 특정 가수의 곡 가사를 형태소 분석
              <br>· 분석 결과를 바탕으로 해당 가수의 작사 스타일 학습
              <br>· 사용자가 선택한 가수의 스타일에 맞는 가사 생성
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- 4번째줄 -->

    <v-layout row wrap pa-3>
      <v-flex md12 lg12 xl12 pa-2 column>
        <v-card>
          <v-card-title>
            <v-layout row>
              <v-layout column>
                <div
                  class="display-1"
                  style="margin-bottom:20px; width:100%;"
                >프로젝트로 얻을 수 있는 미래 효과 및 결론</div>
                <div class="title">
                  가사에 초점을 맞췄으며, 머신러닝 기반의 기능을 제공하는 본 서비스는
                  <br>사용자에게 전혀 새로운 경험을 제공한다.
                  <br>머신러닝이 분석한 차트 분석 결과를 통해 역사 속에서 의외의 결과를 얻고,
                  <br>노랫말에 대한 희미한 기억만으로도 곡을 찾고,
                  <br>비슷한 문장을 가진 곡을 추천 받고,
                  <br>특정 가수 스타일의 가사를 매번 생성하는 것을 통해 다른 차원의 음악적 영감을 얻는다.
                  <br>
                  <br>본 프로젝트는 음악을 소비하는 방식에 커다란 변화를 가져다 줄 것이다.
                </div>
              </v-layout>

              <img
                src="../assets/pamphlet/streamingmarket.jpg"
                style=" margin-right:50px; height:310px"
              >
              <img
                src="../assets/pamphlet/streaminggrowth.jpg"
                style="height:310px; margin-right:200px"
              >
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#pamphlet-banner {
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/similar/similar_banner.jpg");
}
</style>
