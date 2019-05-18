
<template>
  <v-app>
    <v-toolbar app color="primary" class="hidden-sm-and-down">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up white--text"></v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title to="/" :style="'margin: 30px;'" class="white--text hidden-sm-and-down">Recorics</v-toolbar-title>
      </router-link>
      <v-toolbar-items class="hidden-sm-and-down headline">
        <v-btn flat to="" class="subheading white--text">차트</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down headline">
        <v-btn flat class="subheading white--text">노래추천</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down headline">
        <v-btn flat class="subheading white--text">가사생성</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down headline">
        <v-btn flat to="" class="subheading white--text">도움말</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar app color="primary" class="hidden-md-and-up">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up white--text"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-toolbar-title class="white--text">Recorics</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div style="width:46px;"></div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-toolbar flat color="primary">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title white--text">Recorics</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-0">
        <v-list-tile v-for="item in drawerItems" :key="item.title" :to="item.url">
          <!-- <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>-->
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>

    <v-footer dark height="auto">
      <v-container align-content-center justify-center>
        <v-card flat tile color="grey darken-4">
          <v-card-text class="white--text"></v-card-text>
          <span class="subheading">Recorics</span>
          <br>
          <span class="grey--text">캡스톤 프로젝트
            <br>팀장: 박신우
            <br>팀원: 김경찬, 김한빈, 임상윤
            <br>
            <br>
          </span>
          <v-divider></v-divider>

          <v-card-text class="white--text text-xs-right">
            &copy;2019 —
            <strong>Recorics</strong>
          </v-card-text>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawerItems: [
        { title: "홈", url: "/" },
        { title: "차트", url: "" },
        { title: "노래추천", url: "" },
        { title: "가사생성", url: "" },
        { title: "도움말", url: "" },
      ],
      drawer: false
    };
  }
};
</script>
