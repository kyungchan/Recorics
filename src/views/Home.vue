<template>
<div>
  <Banner />
  <Home />
</div>
</template>

<script>
  import Home from '../components/Home'
  import Banner from '../components/Banner'

  export default {
    components: {
      Home,
      Banner
    }
  }
</script>
