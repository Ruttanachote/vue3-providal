<template lang="">
  <div class="container">
    <div>
      <div class="header-blue">
        <nav class="navbar navbar-dark navbar-expand-md">
          <div class="container">
            <a class="navbar-brand" href="#">Deda</a>
            <!-- <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/main" class="nav-link" href="#"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/index" class="nav-link" href="#"
                  >Heven & Hell</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">more feature..</a>
              </li>
            </ul> -->
            <div class="" id="navcol-1">
              <form class="mr-auto" target="_self">
                <div class=""></div>
              </form>
              <div class="row center mx-0">
                <!-- <div
                  class="btn btn-connect mx-2 text-white"
                  @click="addToken()"
                >
                  {{ assets }}
                </div> -->

                <!-- <div v-if="userAddress">
                  <div
                    class="btn btn-connect mx-2 text-white"
                    @click="resetApp"
                  >
                    <div class="text-max">{{ userAddress }}</div>
                  </div>
                </div>
                <div
                  v-else
                  class="btn btn-connect mx-2 text-white"
                  @click="addNetwork()"
                >
                  connnect
                </div> -->

                <!-- <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" class="btn btn-connect text-white">
                    {{ chainId }}
                  </button>
                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-connect text-white dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      @click="addNetwork()"
                    >
                      Connect
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <a class="dropdown-item" href="#">Dropdown link</a>
                      <a class="dropdown-item" href="#">Dropdown link</a>
                    </div>
                  </div>
                </div> -->
                <div class="mx-auto">
                  <b-button-group class="btn-connect mx-2">
                    <b-button class=""> {{ assets }} Deda</b-button>
                  </b-button-group>
                  <b-button-group class="btn-connect">
                    <b-dropdown
                      right
                      split
                      :text="userAddress ? userAddress : 'Connect'"
                    >
                      <b-dropdown-item @click="addToken()"
                        ><div>+ Add BNB chain</div></b-dropdown-item
                      >
                      <b-dropdown-item @click="addNetwork()"
                        ><div>+ Add Deda Token</div></b-dropdown-item
                      >
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <div v-if="userAddress" @click="resetApp()">
                          Disconnect
                        </div>
                        <div v-else @click="handleWalletConnect()">Connect</div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { utils } from "web3";
import useWallet from "../hooks/useWallte";
import { USDT_API } from "../web3/abis";
import { USDT_ADDRESS } from "../web3/config";

import VueApexCharts from "vue3-apexcharts"; // @ is an alias to /src

const {
  onConnect,
  connected,
  web3,
  userAddress,
  chainId,
  networkId,
  resetApp,
  assets,
  getAccountAssets,
} = useWallet();

const handleWalletConnect = async () => {
  await onConnect();
  if (connected) {
    console.log("afterConnectdWallet", connected);
  }
};
const contract = computed(
  () => new web3.value.eth.Contract(USDT_API, USDT_ADDRESS)
);
function approve() {
  return contract.value.methods
    .approve(
      USDT_ADDRESS,
      utils.toHex(utils.toWei("1000000000000000000000000000", "gwei"))
    )
    .send({ from: userAddress.value });
}

const value = computed(() => 90);

const addToken = () => {
  const tokenAddress = "0xa78291314a55da2dc8d592ff16ef54587e10e961";
  const tokenSymbol = "DEDAT1";
  const tokenDecimals = 18;
  const tokenImage = "http://placekitten.com/200/300";

  window.ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20", // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });
};

const addNetwork = () => {
  const params = [
    {
      chainId: "0x61",
      chainName: "Smart Chain - Testnet",
      nativeCurrency: {
        name: "BNB TEST",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com/"],
    },
  ];

  window.ethereum
    .request({ method: "wallet_addEthereumChain", params })
    .then(() => console.log("Success"))
    .catch((error) => console.log("Error", error.message));
};

const series = [
  {
    name: "Sales",
    data: [4, 3, 20, 9, 29, 19, 22, 9],
  },
];
const chartOptions = {
  chart: {
    toolbar: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
    },
    type: "line",
  },

  stroke: {
    width: 2,
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
    ],

    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  title: {
    // text: "Forecast",
    align: "left",
    style: {
      fontSize: "16px",
      color: "#666",
    },
  },
  fill: {
    type: "gradient",
    // gradient: {
    //   shade: "dark",
    //   gradientToColors: ["#FDD835"],
    //   shadeIntensity: 1,
    //   type: "horizontal",
    //   opacityFrom: 1,
    //   opacityTo: 1,
    //   stops: [0, 100, 100, 100],
    // },
  },
  yaxis: {
    labels: { show: false },
    min: -10,
    max: 40,
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    marker: {
      show: true,
    },
  },
};
</script>

<style lang="scss">
.avatar {
  width: 80px;
  height: 80px;
}
.bg-main-card-crypto {
  border-radius: 5px;
  background-color: #7dabf8;
  color: #fff;
  font-family: "Poppins", sans-serif !important;
}

.bg-second-card-crypto {
  border-radius: 5px;
  border: #252b47;
  border-style: solid;
  border-width: 0.1px;
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-family: "Poppins", sans-serif !important;
  box-shadow: rgba(16, 74, 173, 1);
}

.text {
  font-family: "Poppins", sans-serif !important;
}

.card-body {
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1) !important;
}

.color1 {
  background: linear-gradient(0deg, #ed411b, #ed411b),
    linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}

.color2 {
  background: linear-gradient(0deg, #ff9d7e, #ff9d7e),
    linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}
.color3 {
  background: linear-gradient(0deg, #ffbeaa, #ffbeaa),
    linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}
.color4 {
  background: linear-gradient(0deg, #f4f9ff, #f4f9ff),
    linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}
.color5 {
  background: linear-gradient(0deg, #b5d6ff, #b5d6ff),
    linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}
.color6 {
  background: linear-gradient(0deg, #4b92e9, #4b92e9),
    linear-gradient(0deg, #8ebef9, #8ebef9),
    linear-gradient(0deg, #4b92e9, #4b92e9);
}
.color7 {
  background: rgba(16, 74, 173, 1);
}
.color1 {
  background-color: #8bba00;
}
.color1 {
  background-color: #8bba00;
}
.color1 {
  background-color: #8bba00;
}

.size-progress {
  height: 5rem;
}

.text-card-1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: 0.03em;

  color: #111827;
}

.text-card-2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #6b7280;
}

.text-max {
  overflow: hidden;
  max-width: 18ch;
}

.max-text {
  max-width: 8rem !important;
  overflow: hidden !important;
}

.bg-card {
  background: linear-gradient(
    270.48deg,
    #99d2fc 0.42%,
    #d7ecfb 0.43%,
    #cbe9ff 25.79%,
    #eaeffe 48.63%,
    #fbe8f1 67.91%,
    #ffe2e6 97.86%
  );
}
.btn-connect {
  /* button launch app */

  background: linear-gradient(270deg, #e07cf9 -5%, #3bc9f7 120%);
  border-radius: 15px !important;
  border: rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .header-blue {
    // padding-bottom: 120px;
  }
}

.header-blue .navbar {
  background: transparent;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #fff;
  border-radius: 0;
  box-shadow: none;
  border: none;
}

@media (min-width: 768px) {
  .header-blue .navbar {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.header-blue .navbar .navbar-brand {
  font-weight: bold;
  color: inherit;
  font-size: 26px;
}

.header-blue .navbar .navbar-brand:hover {
  color: #f0f0f0;
}

.header-blue .navbar .navbar-collapse {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .header-blue .navbar .navbar-collapse {
    border-color: transparent;
    margin: 0;
  }
}

.header-blue .navbar .navbar-collapse span .login {
  color: #d9d9d9;
  margin-right: 0.5rem;
  text-decoration: none;
}

.header-blue .navbar .navbar-collapse span .login:hover {
  color: #fff;
}

.header-blue .navbar .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}

.header-blue .navbar .navbar-toggler:hover,
.header-blue .navbar-toggler:focus {
  background: none;
}

.header-blue .navbar .navbar-nav a.active,
.header-blue .navbar .navbar-nav > .show .dropdown-item {
  background: none;
  box-shadow: none;
}

@media (min-width: 768px) {
  .header-blue .navbar-nav .nav-link {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
}

@media (min-width: 992px) {
  .header-blue .navbar-nav .nav-link {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
}

.header-blue .navbar .navbar-nav > li > .dropdown-menu {
  margin-top: -5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 2px;
}

.header-blue .navbar .dropdown-menu .dropdown-item:focus,
.header-blue .navbar .dropdown-menu .dropdown-item {
  line-height: 2;
  color: #37434d;
}

.header-blue .navbar .dropdown-menu .dropdown-item:focus,
.header-blue .navbar .dropdown-menu .dropdown-item:hover {
  background: #ebeff1;
}

.header-blue .action-button,
.header-blue .action-button:not(.disabled):active {
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  color: #ebeff1;
  box-shadow: none;
  text-shadow: none;
  padding: 0.3rem 0.8rem;
  background: transparent;
  transition: background-color 0.25s;
  outline: none;
}

.header-blue .action-button:hover {
  color: #fff;
}

.header-blue .navbar .form-inline label {
  color: #d9d9d9;
}

.header-blue .navbar .form-inline .search-field {
  display: inline-block;
  width: 80%;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  border-radius: 0;
  color: #ccc;
  box-shadow: none;
  color: inherit;
  transition: border-bottom-color 0.3s;
}

.header-blue .navbar .form-inline .search-field:focus {
  border-bottom: 1px solid #ccc;
}

.header-blue .hero {
  margin-top: 20px;
  text-align: center;
}

@media (min-width: 768px) {
  .header-blue .hero {
    margin-top: 60px;
    text-align: left;
  }
}

.header-blue .hero h1 {
  color: #fff;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 300;
  line-height: 1.4;
}

@media (min-width: 992px) {
  .header-blue .hero h1 {
    margin-top: 190px;
    margin-bottom: 24px;
    line-height: 1.2;
  }
}

.header-blue .hero p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 300;
}

.header-blue .phone-holder {
  text-align: right;
}

.header-blue div.iphone-mockup {
  position: relative;
  max-width: 300px;
  margin: 20px;
  display: inline-block;
}

.header-blue .iphone-mockup img.device {
  width: 100%;
  height: auto;
}

.header-blue .iphone-mockup .screen {
  position: absolute;
  width: 88%;
  height: 77%;
  top: 12%;
  border-radius: 2px;
  left: 6%;
  border: 1px solid #444;
  background-color: #aaa;
  overflow: hidden;
  // background: url(../../assets/img/screen-content-iphone-6.jpg);
  background-size: cover;
  background-position: center;
}

.header-blue .iphone-mockup .screen:before {
  content: "";
  background-color: #fff;
  position: absolute;
  width: 70%;
  height: 140%;
  top: -12%;
  right: -60%;
  transform: rotate(-19deg);
  opacity: 0.2;
}

.data {
  text-align: center;
  margin-top: 24px;
}
/* Slider CSS */
input[type="range"] {
  -webkit-appearance: none;
  display: block;
  width: 100%;
  margin: 16px 0;
  background: #3e3e3f;
  background-image: -webkit-gradient(
    linear,
    20% 0%,
    20% 100%,
    color-stop(0%, #add8e6),
    color-stop(100%, #add8e6)
  );
  background-image: -webkit-linear-gradient(left, #add8e6 0%, #add8e6 100%);
  background-image: -moz-linear-gradient(left, #add8e6 0%, #add8e6 100%);
  background-image: -o-linear-gradient(to right, #add8e6 0%, #add8e6 100%);
  background-image: linear-gradient(to right, #add8e6 0%, #add8e6 100%);
  background-repeat: no-repeat;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: none;
  border: 4px solid #add8e6;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #3e3e3f;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: none;
  border: 4px solid #add8e6;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input[type="range"]::-ms-fill-upper {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input[type="range"]::-ms-thumb {
  box-shadow: none;
  border: 4px solid #add8e6;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
  height: 4px;
}
input[type="range"]:focus::-ms-fill-lower {
  background: transparent;
}
input[type="range"]:focus::-ms-fill-upper {
  background: transparent;
}
/* End Range Slider */
</style>
