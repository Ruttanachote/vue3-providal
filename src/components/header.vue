<template>
  <div class="home container">
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-logo">Deda.</a>
        <ul class="nav-menu" :class="[mobileButton ? 'active' : '']">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="mobileButton = !mobileButton"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="mobileButton = !mobileButton"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="mobileButton = !mobileButton"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="mobileButton = !mobileButton"
              >Contact</a
            >
          </li>
        </ul>
        <div
          class="hamburger"
          @click="mobileButton = !mobileButton"
          :class="[mobileButton ? 'active' : '']"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const mobileButton = ref(false);
    // expose to template
    return {
      mobileButton,
    };
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.header {
  border-bottom: 1px solid #e2e8f0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link {
  font-size: 1.6rem;
  font-weight: 400;
  color: #475569;
}

.nav-link:hover {
  color: #482ff7;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #482ff7;
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>
