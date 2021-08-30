<template>
  <div>
    <div class="sidebar">
      <!-- <router-link class="brand-logo" to="/index">
        <img src="" alt="" />
        <span>Treemium </span></router-link
      > -->
      <div class="menu " >
        <ul>
          <li :class="active === 1 && 'active'" class="avoid-clicks">
            <router-link to="/index" :class="active === 1 && 'active'" >
              <span><i class="fas fa-tachometer-alt"></i></span>
              <span class="nav-text">Home</span>
            </router-link>
          </li>
          <li :class="active === 2 && 'active'">
            <router-link to="buy-sell" :class="active === 2 && 'active'">
              <span><i class="fas fa-tachometer-alt"></i></span>
              <span class="nav-text">Exchange</span>
            </router-link>
          </li>
          <li :class="active === 3 && 'active'">
            <router-link to="accounts" :class="active === 3 && 'active'">
              <span><i class="fas fa-tachometer-alt"></i></span>
              <span class="nav-text">Account</span>
            </router-link>
          </li>
          <li :class="active === 4 && 'active'">
            <router-link to="settings" :class="active === 4 && 'active'">
              <span><i class="fas fa-tachometer-alt"></i></span>
              <span class="nav-text">Setting</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="widget-card p-5 text-white my-5">
        <h2>Note</h2>
        You need to have token Deda:00
      </div>
      <!-- <div class="sidebar-footer">
        <div class="social">
          <a to="#"><i class="fas fa-tachometer-alt"></i></a>
          <a to="#"><i class="fas fa-tachometer-alt"></i></a>
          <a to="#"><i class="fas fa-tachometer-alt"></i></a>
          <a to="#"><i class="fas fa-tachometer-alt"></i></a>
        </div>
        <div class="copy_right">© {{ new Date().getFullYear() }} Quixlab</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: Number,
  },
  data() {
    return {
      
    }
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ol, ul {
    padding-left: 0px !important;
}

.sidebar {
  background: transparent;
  // position: fixed;
  left: 0;
  height: 100%;
  // width: 240px;
  top: 0;
  z-index: 3;
  // padding: 30px;
}
@media only screen and (max-width: 767px) {
  .sidebar {
    top: auto;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #5e37ff;
    padding: 0px;
  }
}
.sidebar .brand-logo {
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 767px) {
  .sidebar .brand-logo {
    display: none;
  }
}
.sidebar .brand-logo img {
  width: 30px;
  // margin-bottom: 10px;
}
.sidebar .brand-logo span {
  font-weight: 700;
  font-size: 18px;
  color: #1f2641;
}

.menu {
  // margin-top: 30px;
  // padding-top: 50px;
  border-top: 1px solid rgba(55, 55, 89, 0.1);
}
@media only screen and (max-width: 767px) {
  .menu {
    margin-top: 0px;
    padding: 0px;
    border: 0px;
  }
}
@media only screen and (max-width: 767px) {
  .menu ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.menu ul li a {
  padding: 12px 0px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 0px;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .menu ul li a {
    color: #fff;
    opacity: 0.75;
  }
}
.menu ul li a:hover,
.menu ul li a:focus,
.menu ul li a:active {
  color: #5e37ff;
}
@media only screen and (max-width: 767px) {
  .menu ul li a:hover,
  .menu ul li a:focus,
  .menu ul li a:active {
    color: #fff;
    opacity: 1;
  }
}
.menu ul li a.active i {
  color: #5e37ff;
}
@media only screen and (max-width: 767px) {
  .menu ul li a.active i {
    color: #fff;
    opacity: 1;
  }
}
.menu ul li a.active .nav-text {
  color: #5e37ff;
}
@media only screen and (max-width: 767px) {
  .menu ul li a.active .nav-text {
    color: #fff;
    opacity: 1;
  }
}
.menu ul li a i {
  font-size: 24px;
}
.menu ul li a .nav-text {
  margin-left: 18px;
}
@media only screen and (max-width: 575px) {
  .menu ul li a .nav-text {
    display: none;
  }
}

.avoid-clicks {
  pointer-events: none;
}
</style>
