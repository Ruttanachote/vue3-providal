<template lang="">
  <div class="container">
    <div>
      <div class="header-blue">
        <nav class="navbar navbar-dark navbar-expand-md">
          <div class="container">
            <a class="navbar-brand" href="#">Deda</a>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/main" class="nav-link" href="#"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/test" class="nav-link" href="#"
                  >Heven & Hell</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">more feature..</a>
              </li>
            </ul>
            <div class="" id="navcol-1">
              <form class="mr-auto" target="_self">
                <div class=""></div>
              </form>
              <div class="row">
                <div
                  class="btn btn-connect mx-2 text-white"
                  @click="addToken()"
                >
                  {{ assets }} DEDA  chain ID {{ chainId }}
                </div>

                <div v-if="userAddress">
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
                  connnect wallet
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="container p-5">
          <div class="">
            <div class="row">
              <div class="col-lg-4 col-md-6 l-12 py-3">
                <div class="card bg-second-card-crypto">
                  <div class="p-0">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <img
                          class="avatar"
                          :src="require('/src/assets/images/bitcoin_PNG48.png')"
                        />
                      </div>
                      <h4>$23,523</h4>
                      <span class="">
                        <div
                          class="
                            badge badge-pill badge-cyan
                            font-size-12
                            bg-success
                          "
                        >
                          <i class="fas fa-arrow-up"></i>
                          <span class="font-weight-semibold ml-1">+6.71 %</span>
                        </div>
                        <p class="mb-0 text-left text">BTC</p>
                        <apexchart
                          type="line"
                          height="70"
                          width="100"
                          class="p-0 m-0 text-dark"
                          :options="chartOptions"
                          :series="series"
                        ></apexchart>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 py-3">
                <div class="card bg-second-card-crypto">
                  <div class="p-0">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <img
                          class="avatar px-3"
                          :src="
                            require('/src/assets/images/eth-diamond-purple.png')
                          "
                        />
                      </div>
                      <h4>$3,275</h4>
                      <span class="">
                        <div
                          class="
                            badge badge-pill badge-cyan
                            font-size-12
                            bg-success
                          "
                        >
                          <i class="fas fa-arrow-up"></i>
                          <span class="font-weight-semibold ml-1">+0.70 %</span>
                        </div>
                        <p class="mb-0 text-left text">ETH</p>
                        <apexchart
                          type="line"
                          height="70"
                          width="100"
                          class="p-0 m-0 text-dark"
                          :options="chartOptions"
                          :series="series"
                        ></apexchart>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 py-3">
                <div class="card bg-second-card-crypto">
                  <div class="p-0">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <!-- <img
                          class="avatar"
                          :src="require('/src/assets/images/bitcoin_PNG48.png')"
                        /> -->
                        <h5 class="px-2">Deda</h5>
                      </div>
                      <h4>$23,523</h4>
                      <span class="">
                        <div
                          class="
                            badge badge-pill badge-cyan
                            font-size-12
                            bg-success
                          "
                        >
                          <i class="fas fa-arrow-up"></i>
                          <span class="font-weight-semibold ml-1">6.71%</span>
                        </div>
                        <p class="mb-0 text-left text">Deda</p>
                        <apexchart
                          type="line"
                          height="70"
                          width="100"
                          class="p-0 m-0 text-dark"
                          :options="chartOptions"
                          :series="series"
                        ></apexchart>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-card px-5">
              <div class="">
                <div class="container">
                  <div class="my-5">
                    <div class="text-card-1">Heaven and Hell index</div>
                    <div class="text-card-2">
                      What emotion is driving the Crypto market now?
                    </div>
                  </div>
                  <div class="progress size-progress mx-5 mt-5">
                    <div
                      class="progress-bar color1"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color2"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color3"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color4"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color5"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color6"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color7"
                      role="progressbar"
                      style="width: 14.28%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <!-- <div
                      class="progress-bar color8"
                      role="progressbar"
                      style="width: 10%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color9"
                      role="progressbar"
                      style="width: 10%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar color10"
                      role="progressbar"
                      style="width: 10%"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div> -->
                  </div>
                  <div class="px-4 mx-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      v-model="value"
                      @input="updateSlider"
                      :style="{ backgroundSize: backgroundSize }"
                      disabled
                    />
                    <div class="data">Rate value: {{ value }}</div>
                  </div>
                </div>
              </div>
              <div class="row my-3 mx-5 px-5">
                <div class="col-4">
                  <div>
                    <svg
                      width="100%"
                      height="50%"
                      viewBox="0 0 234 291"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        x="0.772461"
                        y="57.4825"
                        width="100%"
                        height="50%"
                        rx="20"
                        fill="white"
                      />
                      <rect
                        x="84.2949"
                        y="0.724396"
                        width="85.9373"
                        height="115.435"
                        fill="url(#pattern2)"
                      />
                      <defs>
                        <pattern
                          id="pattern2"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image2"
                            transform="translate(-9.82388e-09 -0.127769) scale(0.00458716 0.0031628)"
                          />
                        </pattern>
                        <image
                          id="image2"
                          width="218"
                          height="407"
                          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAGXCAYAAADVrE7dAAAACXBIWXMAAAsTAAALEwEAmpwYAABXpklEQVR4Xu29B5Rc1ZUufGPl0BU6t1oSyoikRBCIYBFNzsHYgOOMx2/Cex7PrHnrX/NmvX9m/W+y08MJg8FjAwYMEhZIIBAgkiQsEALlzjlUzlW37r/PvXWrq7qruqq6cte+uKzurntP+M757g5nn30oCi9EABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABFABBABRAARQAQQAUQAEUAEEAFEABGoNgJiNMSI4QBX7XZg/bkRqPogiZEgS0UjaqmpPB+hVbpY7mbjHWI0Qh9/6blvWc0ml+gY301bWx2ISu0iUFWiieEgPXXk8JXH3njtYYulaXrl1Tf8AqA6Wrtw1VDLRIFjp8eX9fzh+TvYoM8kOieeoS0trhpqITYlBYGqEo2KhfQ6j6NdM9i7SROwu9iA7zkcnTwREOO0WoiotJNjK/ufeuzvGEGgRcfYs7S1DSVbnhBW8raqEU0MuHXCRweuGX7l5W8I/aeXGY36AQ7e0pXsfF3XJVI0Cx+VEKHESXd33389/jcix4dEj+tp2tQUquu+LcLGM9Xok+hzGsRDH9ww+uIzfxP97KNtWp9Xy8YFkRLjDBj4dDXaVHd1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/rkPhJnrk0OX60MBrVaIUpwoS7dcF2GRwLKgmvHEw+gLNbcNdtz35f+0br3yJc7WOr9tNqtw4qAQw4Ezy7/x7b/vYRnB9e5bN8cCXosuFqH4ZHtmO28yRaOAjchwVExrCDgN5tHOux58tHn79c9wlubRXP3B7+sDgRK48CrfUdHvUsdOHrvw06ce/27o6B8vsgf9rcZYkGLjifjHRMRippbFwJ7ygxs/ZG0dbPvSw/9puvCS3YzZPgqTOj+VMUOhYthPx1xTHYd/8qO/D77/9g0tQU9HUzjIEPLnuoh9GOR4yqHSOTq+/NUfWC/b/hJjhfYYm6ZAZcQF6lwA1sn3dUk0gq0Y9PJRx2SHcPKzzX0vPPtt3+efnq0VBD0nCkYW1Eni5ZHjSGTNEhaiqQjLhkIs7xOa7NNL7/vyj+1XbP8d19I1VqqxiowPtQiOse6eJ3/514GD729TCzENFxdMQDiWAdJJnqeE0CWe0zCEV4HX0gc2onf53fc/3nbdzb/mWjp7gWC5RXOpGo3lVASBuiVa0rrxOTUxr6tV8HvN9PDw0iMvvvD1qRPHz4c4Eo4R5cB/YvuAhHCtuuf+R63nbXiH4tUR1mie4G2t06VGWQx42ZjPbRc8zhY6FuU+/u1v/2zq0IGr1GJETdqjAB5muNDau+/7ZdvFl74iqjUhzmCaJmFfsG6IUqzUg1ID5dU90VIxFP1OLup2tUT9Phsdj3Fgs8n9I//PqSOcxT7MW1udlcQdpJw16nW10UJUJbdHblOc5QQenB6q5s6C7MJKth3rKh0Ci4pos2EBr+BMPBZDx2GZoOoqGai8clSm1pjbgCvdOGNJiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAogAIoAIIAKIACKACCACiAAigAggAohA2RH4/wG3wbvFcJ0xygAAAABJRU5ErkJggg=="
                        />
                      </defs>
                      <text
                        x="50%"
                        y="50%"
                        alignment-baseline="middle"
                        text-anchor="middle"
                        fill="black"
                        class="text"
                      >
                        0 - 35
                      </text>
                    </svg>
                  </div>
                </div>
                <div class="col-4">
                  <div>
                    <svg
                      width="100%"
                      height="50%"
                      viewBox="0 0 234 291"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        x="0.766602"
                        y="58.5462"
                        width="100%"
                        height="50%"
                        rx="20"
                        fill="white"
                      />
                      <rect
                        x="84.2949"
                        y="0.724396"
                        width="75.9373"
                        height="115.435"
                        fill="url(#pattern1)"
                      />
                      <defs>
                        <pattern
                          id="pattern1"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image1"
                            transform="translate(-0.155749 -0.263115) scale(0.00631557 0.00354237)"
                          />
                        </pattern>
                        <image
                          id="image1"
                          width="183"
                          height="407"
                          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAGXCAYAAADxtcEdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAuSklEQVR4Xu2dd3QUV57v1UmdW6GVE0hEGQuTDMYIk1kMBjMOuwbbM+PxhJ287+1745l97+z7553zNp0Z2+PxjBmbHYwTGcN4bRzAGIxtosgiSAIUW+puSd3qnN7vdqtQq9VZVdVV1b8+p20hVd3w+X3vr3431L05OfhBAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASSABJAAEkACSAAJIAEkgASQABJAAkgACSABJIAEkAASQAJIAAkgASTAJgERm5lla142m13b2dVd197eWdtj6KkwGY2lZrNZb7VadbYhm8bldsu9Xq+U8JFIJD6ZTOZWqZQ2rUZrLSgoMBUW6ftKS0q6Kyur2mqqq1t1eWqzRCz2ZyvPZOuN4k6WVArXDQ5a9FevXJtz+fLleTdu3Lynq6ur1uFy6kHAWp/Pn+vz+WR+v18KX7HfH5Dk5ATADuRLPmLyn4BYLPKJQcDw9YLg3fB1SaVSq0wmNRcXF7fX1dVera+ffqGhoeFccbG+QwqNIoUiZsWlKG6azNzbZ648c+bsQydPnlzScvNmw5DNXuF2u/O9Ho/K6/PlhmcTCARyRKL00JN7pTKpQyaV2XNzZf1yeW5XdXX1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"
                        />
                      </defs>
                      <text
                        x="50%"
                        y="50%"
                        alignment-baseline="middle"
                        text-anchor="middle"
                        fill="black"
                      >
                        36 - 60
                      </text>
                    </svg>
                  </div>
                </div>

                <div class="col-4">
                  <div>
                    <svg
                      width="100%"
                      height="50%"
                      viewBox="0 0 234 295"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        x="0.760742"
                        y="54.2205"
                        width="100%"
                        height="50%"
                        rx="20"
                        fill="white"
                      />
                      <rect
                        x="74.2949"
                        y="0.724396"
                        width="85.9373"
                        height="115.435"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0"
                            transform="translate(-9.82388e-09 -0.127769) scale(0.00458716 0.0031628)"
                          />
                        </pattern>
                        <image
                          id="image0"
                          width="218"
                          height="407"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                      <text
                        x="50%"
                        y="50%"
                        alignment-baseline="middle"
                        text-anchor="middle"
                        fill="black"
                      >
                        70 - 100
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  const tokenAddress = "0xd00981105e61274c8a5cd5a88fe7e037d935b513";
  const tokenSymbol = "TUT";
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
      chainId: "0x38",
      chainName: "Binance Smart Chain",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://bsc-dataseed.binance.org/"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  ];

  window.ethereum
    .request({ method: "wallet_addEthereumChain", params })
    .then(() => console.log("Success"), handleWalletConnect())
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
  border-radius: 15px;
  border: rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .header-blue {
    padding-bottom: 120px;
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
