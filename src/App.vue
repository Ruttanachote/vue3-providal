<template>
  <div id="app">
    <div id="preloader" v-show="isLoading">
      <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
      </div>
    </div>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  
    <Navbar>
      <router-view />
    </Navbar>

    <div class="animation-area">
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "equal-vue/dist/style.css";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      isLoading: true,
      time: 100,
      show: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  font-family: "Poppins", sans-serif !important;
  // color: #fff !important;
}

body {
  background: #152334 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
#preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // background-color: #7dabf8;
  z-index: 999999999;
}

.sk-three-bounce {
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #1e324b;
}

.sk-three-bounce .sk-child {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #7dabf8;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}

.sk-three-bounce .sk-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.sk-three-bounce .sk-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}


.box-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box-area li {
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  bottom: -150px;
  background: rgba(161, 161, 161, 0.034);
  animation: animate var(--animationSpeed) infinite linear;
  
  @keyframes animate {
    0% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 1; }
    100% { 
      transform: translateY(-1200px) rotate(360deg); 
      opacity: 1; }
  }
}

.box-area li:nth-child(1){
  left: 86%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.box-area li:nth-child(2){
  left: 12%;
  width: 30px;
  height: 30px;
  animation-delay: 1.5s;
  animation-duration: 8s;
}

.box-area li:nth-child(3){
  left: 70%;
  width: 100px;
  height: 100px;
  animation-delay: 5.5s;
}

.box-area li:nth-child(4){
  left: 42%;
  width: 110px;
  height: 110px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.box-area li:nth-child(5){
  left: 65%;
  width: 40px;
  height: 40px;
  animation-delay: 0.5s;
  animation-duration: 8s;
}

.box-area li:nth-child(6){
  left: 15%;
  width: 110px;
  height: 110px;
  animation-delay: 3.5s;
  animation-duration: 15s;
}
:root {
  --animationSpeed: 30s;
}
</style>
