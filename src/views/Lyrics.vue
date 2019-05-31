<template>
  <div>
    <Lyrics/>
    <Topbtn/>
  </div>
</template>

<script>
import Lyrics from "../components/Lyrics";
import Topbtn from "../components/Topbtn";
export default {
  props: ["artist"],
  components: {
    Lyrics,
    Topbtn
  }
};
</script>

<style>
</style>
