<template>
  <div>
    <!-- <ConnectWallte /> -->

    <router-view />
  </div>
</template>
<script>
// import ConnectWallte from "./components/ConnectWallte.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "equal-vue/dist/style.css";

export default {
  components: {
    // ConnectWallte,
  },
};
</script>
<style lang="scss">
// @import "~@/assets/scss/vendors/bootstrap-vue/index";

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  font-family: "Poppins", sans-serif !important;
  // color: #fff !important;
}

body {
  background: #152334;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
