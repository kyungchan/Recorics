<template>
  <div>
    <Banner/>
    <Home/>
    <Topbtn/>
  </div>
</template>

<script>
import Home from "../components/Home";
import Banner from "../components/Banner";
import Topbtn from "../components/Topbtn";
export default {
  components: {
    Home,
    Banner,
    Topbtn
  }
};
</script>
