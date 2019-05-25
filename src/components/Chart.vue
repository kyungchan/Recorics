<template>
  <v-container>
    <v-card>
      <v-card-title pa-3>
        <v-layout column wrap>
          <v-layout column align-center>
            <v-flex sm12 md12 lg12 xl12>
              <v-select :items="years" label="연도" v-model="year"></v-select>
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img :src="images[index][0]" id="img-all">
            </v-flex>
          </v-layout>

          <v-layout id="chart" row wrap>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img :src="images[index][1]" id="img-1">
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img :src="images[index][2]" id="img-2">
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img xs6 sm6 md4 lg4 xl4 :src="images[index][3]" id="img-3">
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img xs6 sm6 md4 lg4 xl4 :src="images[index][4]" id="img-4">
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img xs6 sm6 md4 lg4 xl4 :src="images[index][5]" id="img-5">
            </v-flex>
            <v-flex xs6 sm6 md4 lg4 xl4>
              <img xs6 sm6 md4 lg4 xl4 :src="images[index][6]" id="img-6">
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      year: "2009",
      index: 0,
      years: [
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
      images: [
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
  watch: {
    year: function(val) {
      this.index = val - 2017 + 8;
    }
  }
};
</script>

<style>
#chart img {
  width: 100%;
}
</style>
