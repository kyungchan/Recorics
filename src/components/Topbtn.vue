<template>
  <transition appear name="pop">
    <v-btn
      fab
      id="topBtn"
      color="secondary"
      v-scroll-to="{ 
                          el: '#top',
                          easing: [0.77, 0, 0.175, 1],
                          duration: 1500 
                      }"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.5s;
}
.pop-enter, .pop-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}

#topBtn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;
}
</style>
