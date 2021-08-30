<template>
  <div class="container">
    <div id="app" v-cloak>
      <!-- fixed header -->
      <header class="cryptocryptoheader-wrap">
        <div
          class="
            cryptoheader-row
            cryptoflex-row cryptoflex-middle cryptoflex-space
          "
        >
          <div class="cryptoif-small">
            <div class="cryptoform-input cryptodark">
              <div class="cryptopush-right">🔎</div>
              <input
                type="text"
                v-model="search"
                placeholder="Search token..."
              />
            </div>
          </div>
          <div class="cryptotext-primary cryptoif-medium">
            <h1 class="cryptotext-nowrap cryptotext-condense cryptoshadow-text">
              Cryptocurrency Market
            </h1>
          </div>
          <div class="cryptoflex-row cryptoflex-middle">
            <div class="cryptodropdown">
              <div class="cryptoform-input cryptotext-nowrap cryptoshadow-box">
                ▼ {{ limit }}
              </div>
              <ul>
                <li @click="setLimit(0)">
                  <span class="cryptotext-faded">Show:</span> All
                </li>
                <li @click="setLimit(10)">
                  <span class="cryptotext-faded">Show:</span> 10
                </li>
                <li @click="setLimit(20)">
                  <span class="cryptotext-faded">Show:</span> 20
                </li>
                <li @click="setLimit(50)">
                  <span class="cryptotext-faded">Show:</span> 50
                </li>
                <li @click="setLimit(100)">
                  <span class="cryptotext-faded">Show:</span> 100
                </li>
              </ul>
            </div>
            <div class="cryptodropdown">
              <div class="cryptoform-input cryptotext-nowrap cryptoshadow-box">
                ▼ {{ sortLabel }}
              </div>
              <ul>
                <li @click="sortBy('token', 'asc')">
                  <span class="cryptotext-faded">Sort:</span> Token
                </li>
                <li @click="sortBy('close', 'desc')">
                  <span class="cryptotext-faded">Sort:</span> Price
                </li>
                <li @click="sortBy('assetVolume', 'desc')">
                  <span class="cryptotext-faded">Sort:</span> Volume
                </li>
                <li @click="sortBy('percent', 'desc')">
                  <span class="cryptotext-faded">Sort:</span> Percent
                </li>
                <li @click="sortBy('change', 'desc')">
                  <span class="cryptotext-faded">Sort:</span> Change
                </li>
                <li @click="sortBy('trades', 'desc')">
                  <span class="cryptotext-faded">Sort:</span> Trades
                </li>
              </ul>
            </div>
            <div class="cryptodropdown">
              <div class="cryptoform-input cryptotext-nowrap cryptoshadow-box">
                ▼ {{ asset }}
              </div>
              <ul>
                <li @click="filterAsset('BTC')">
                  <span class="cryptotext-faded">Asset:</span> BTC
                </li>
                <li @click="filterAsset('ETH')">
                  <span class="cryptotext-faded">Asset:</span> ETH
                </li>
                <li @click="filterAsset('BNB')">
                  <span class="cryptotext-faded">Asset:</span> BNB
                </li>
                <li @click="filterAsset('USDT')">
                  <span class="cryptotext-faded">Asset:</span> USDT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <!-- price list grid -->
      <main class="cryptomain-wrap">
        <div class="cryptomain-grid-list">
          <div
            class="cryptomain-grid-item"
            v-for="c in coinsList"
            :key="c.symbol"
            :class="c.style"
          >
            <div class="cryptomain-grid-chart">
              <linechart
                :width="190"
                :height="50"
                :values="c.history"
              ></linechart>
            </div>

            <div
              class="
                cryptomain-grid-info
                cryptoflex-row cryptoflex-top cryptoflex-stretch
              "
            >
              <div class="cryptopush-right">
                <img
                  :src="c.icon"
                  :alt="c.pair"
                  onerror="this.src='https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/xtz_.png'"
                />
              </div>
              <div class="cryptoflex-1 cryptoshadow-text">
                <div class="cryptoflex-row cryptoflex-top cryptoflex-space">
                  <div class="cryptotext-left cryptotext-clip cryptopush-right">
                    <h1 class="cryptotext-primary cryptotext-clip">
                      {{ c.token
                      }}<small
                        class="cryptotext-faded cryptotext-small text-condense"
                        >/{{ c.asset }}</small
                      >
                    </h1>
                    <h2 class="cryptotext-bright cryptotext-clip">
                      {{ c.close }}
                    </h2>
                  </div>
                  <div class="cryptotext-right">
                    <div class="cryptocolor cryptotext-big cryptotext-clip">
                      {{ c.arrow }} {{ c.sign }}{{ c.percent }}%
                    </div>
                    <div class="cryptotext-clip">
                      {{ c.sign }}{{ c.change }}
                      <small class="cryptotext-faded">24h</small>
                    </div>
                    <div class="cryptotext-clip">
                      {{ c.assetVolume }}
                      <small class="cryptotext-faded">Vol</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--      <div class="cryptomain-grid-chart">
        <linechart :width="600" :height="40" :values="c.history"></linechart>
      </div>-->
          </div>
        </div>
      </main>

      <!-- socket loader -->
      <div class="cryptoloader-wrap" :class="{ visible: loaderVisible }">
        <div class="cryptoloader-content">
          <div v-if="status === 0">
            <i>📡</i> <br />
            Connecting to Socket API ...
          </div>
          <div v-else-if="status === 1">
            <i>💬</i> <br />
            Waiting for data from Socket API ...
          </div>
          <div v-else-if="status === 2">
            <i>😃</i> <br />
            Connected to the Socket API
          </div>
          <div v-else-if="status === -1">
            <i>😡</i> <br />
            Error connecting to the Socket API
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import linechart from "@/components/Linechart.vue";
export default {
  components: {
    linechart,
  },
  data() {
    return {
      endpoint: "wss://stream.binance.com:9443/ws/!ticker@arr",
      iconbase:
        "https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/",
      cache: {}, // coins data cache
      coins: [], // live coin list from api
      asset: "BTC", // filter by base asset pair
      search: "", // filter by search string
      sort: "assetVolume", // sort by param
      order: "desc", // sort order ( asc, desc )
      limit: 50, // limit list
      status: 0, // socket status ( 0: closed, 1: open, 2: active, -1: error )
      sock: null, // socket inst
      cx: 0,
      cy: 0,
    };
  },
  computed: {
    coinsList() {
      let list = this.coins.slice();
      let search = this.search
        // eslint-disable-next-line no-useless-escape
        .replace(/[^\s\w\-\.]+/g, "")
        .replace(/[\r\s\t\n]+/g, " ")
        .trim();

      if (this.asset) {
        list = list.filter((i) => i.asset === this.asset);
      }
      if (search && search.length > 1) {
        let reg = new RegExp("^(" + search + ")", "i");
        list = list.filter((i) => reg.test(i.token));
      }
      if (this.sort) {
        list = this.sortList(list, this.sort, this.order);
      }
      if (this.limit) {
        list = list.slice(0, this.limit);
      }
      return list;
    },

    // show socket connection loader
    loaderVisible() {
      return this.status === 2 ? false : true;
    },

    // sort-by label for buttons, etc
    sortLabel() {
      switch (this.sort) {
        case "token":
          return "Token";
        case "percent":
          return "Percent";
        case "close":
          return "Price";
        case "change":
          return "Change";
        case "assetVolume":
          return "Volume";
        case "tokenVolume":
          return "Volume";
        case "trades":
          return "Trades";
        default:
          return "Default";
      }
    },
  },
  methods: {
    // apply sorting and toggle order

    sortBy(key, order) {
      if (this.sort !== key) {
        this.order = order || "asc";
      } else {
        this.order = this.order === "asc" ? "desc" : "asc";
      }
      this.sort = key;
    },

    // filter by asset
    filterAsset(asset) {
      this.asset = String(asset || "BTC");
    },

    // set list limit
    setLimit(limit) {
      this.limit = parseInt(limit) || 0;
    },

    // on socket connected
    onSockOpen(e) {
      this.status = 1; // open
      console.info(
        "WebSocketInfo:",
        "Connection open (" + this.endpoint + ")."
      );
    },

    // on socket closed
    onSockClose(e) {
      this.status = 0; // closed
      console.info(
        "WebSocketInfo:",
        "Connection closed (" + this.endpoint + ")."
      );
      setTimeout(this.sockInit, 10000); // try again
    },

    // on socket error
    onSockError(err) {
      this.status = -1; // error
      console.error("WebSocketError:", err.message || err);
      setTimeout(this.sockInit, 10000); // try again
    },

    // process data from socket
    onSockData(e) {
      let list = JSON.parse(e.data) || [];

      for (let item of list) {
        // cleanup data for each coin
        let c = this.getCoinData(item);
        // keep to up 100 previous close prices in hostiry for each coin
        // eslint-disable-next-line no-prototype-builtins
        c.history = this.cache.hasOwnProperty(c.symbol)
          ? this.cache[c.symbol].history
          : this.fakeHistory(c.close);
        if (c.history.length > 100)
          c.history = c.history.slice(c.history.length - 100);
        c.history.push(c.close);
        // add coin data to cache
        this.cache[c.symbol] = c;
      }
      // convert cache object to final prices list for each symbol
      this.coins = Object.keys(this.cache).map((s) => this.cache[s]);
      this.status = 2; // active
    },

    // start socket connection
    sockInit() {
      if (this.status > 0) return;
      try {
        this.status = 0; // closed
        this.sock = new WebSocket(this.endpoint);
        this.sock.addEventListener("open", this.onSockOpen);
        this.sock.addEventListener("close", this.onSockClose);
        this.sock.addEventListener("error", this.onSockError);
        this.sock.addEventListener("message", this.onSockData);
      } catch (err) {
        console.error("WebSocketError:", err.message || err);
        this.status = -1; // error
        this.sock = null;
      }
    },

    // start socket connection
    sockClose() {
      if (this.sock) {
        this.sock.close();
      }
    },

    // come up with some fake history prices to fill in the initial line chart
    fakeHistory(close) {
      let num = close * 0.0001; // faction of current price
      let min = -Math.abs(num);
      let max = Math.abs(num);
      let out = [];

      for (let i = 0; i < 50; ++i) {
        let rand = Math.random() * (max - min) + min;
        out.push(close + rand);
      }
      return out;
    },

    // finalize data for each coin from socket
    getCoinData(item) {
      let reg = /^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/;
      let symbol = String(item.s)
        // eslint-disable-next-line no-useless-escape
        .replace(/[^\w\-]+/g, "")
        .toUpperCase();
      let token = symbol.replace(reg, "$1");
      let asset = symbol.replace(reg, "$2");
      let name = token;
      let pair = token + "/" + asset;
      let icon = this.iconbase + token.toLowerCase() + "_.png";
      let open = parseFloat(item.o);
      let high = parseFloat(item.h);
      let low = parseFloat(item.l);
      let close = parseFloat(item.c);
      let change = parseFloat(item.p);
      let percent = parseFloat(item.P);
      let trades = parseInt(item.n);
      let tokenVolume = Math.round(item.v);
      let assetVolume = Math.round(item.q);
      let sign = percent >= 0 ? "+" : "";
      let arrow = percent >= 0 ? "▲" : "▼";
      let info = [
        pair,
        close.toFixed(8),
        "(",
        arrow,
        sign + percent.toFixed(2) + "%",
        "|",
        sign + change.toFixed(8),
        ")",
      ].join(" ");
      let style = "";

      if (percent > 0) style = "gain";
      if (percent < 0) style = "loss";

      return {
        symbol,
        token,
        asset,
        name,
        pair,
        icon,
        open,
        high,
        low,
        close,
        change,
        percent,
        trades,
        tokenVolume,
        assetVolume,
        sign,
        arrow,
        style,
        info,
      };
    },

    // sort an array by key and order
    sortList(list, key, order) {
      return list.sort((a, b) => {
        let _a = a[key];
        let _b = b[key];

        if (_a && _b) {
          _a = typeof _a === "string" ? _a.toUpperCase() : _a;
          _b = typeof _b === "string" ? _b.toUpperCase() : _b;

          if (order === "asc") {
            if (_a < _b) return -1;
            if (_a > _b) return 1;
          }
          if (order === "desc") {
            if (_a > _b) return -1;
            if (_a < _b) return 1;
          }
        }
        return 0;
      });
    },
  },
  mounted() {
    this.sockInit();
  },
  beforeUnmount() {
    this.sockClose();
  },
};
</script>

<style lang="scss">
/* CSS Document */



 .cryptoif-small {
	 display: none;
}
 @media only screen and (min-width : 420px) {
	 .cryptoif-small {
		 display: initial;
	}
}
 .cryptoif-medium {
	 display: none;
}
 @media only screen and (min-width : 720px) {
	 .cryptoif-medium {
		 display: initial;
	}
}
 .cryptoif-large {
	 display: none;
}
 @media only screen and (min-width : 1200px) {
	 .cryptoif-large {
		 display: initial;
	}
}
 .cryptohidden, [hidden], [v-cloak] {
	 display: none;
}
 .cryptodisabled, [disabled] {
	 pointer-events: none;
	 opacity: 0.5;
}
 .cryptocard {
	 padding: 1em;
	 background-color: #1e2126;
	 border-radius: 3px;
	 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
 .cryptopush-top {
	 margin-top: 1em;
}
 .cryptopush-right {
	 margin-right: 1em;
}
 .cryptopush-bottom {
	 margin-bottom: 1em;
}
 .cryptopush-left {
	 margin-left: 1em;
}
 .cryptopush-all {
	 margin: 1em;
}
 .cryptopad-top {
	 padding-top: 1em;
}
 .cryptopad-right {
	 padding-right: 1em;
}
 .cryptopad-bottom {
	 padding-bottom: 1em;
}
 .cryptopad-left {
	 padding-left: 1em;
}
 .cryptopad-all {
	 padding: 1em;
}
 .cryptoborder-top {
	 border-top: 2px solid rgba(255, 255, 255, 0.04);
}
 .cryptoborder-right {
	 border-right: 2px solid rgba(255, 255, 255, 0.04);
}
 .cryptoborder-bottom {
	 border-bottom: 2px solid rgba(255, 255, 255, 0.04);
}
 .cryptoborder-left {
	 border-left: 2px solid rgba(255, 255, 255, 0.04);
}
 .cryptoflex-row {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: nowrap;
}
 .cryptoflex-wrap {
	 flex-wrap: wrap;
}
 .cryptoflex-left {
	 justify-content: flex-start;
}
 .cryptoflex-center {
	 justify-content: center;
}
 .cryptoflex-right {
	 justify-content: flex-end;
}
 .cryptoflex-space {
	 justify-content: space-between;
}
 .cryptoflex-around {
	 justify-content: space-around;
}
 .cryptoflex-top {
	 align-items: flex-start;
}
 .cryptoflex-middle {
	 align-items: center;
}
 .cryptoflex-bottom {
	 align-items: flex-end;
}
 .cryptoflex-1 {
	 flex: 1;
}
 .cryptoflex-2 {
	 flex: 2;
}
 .cryptoflex-3 {
	 flex: 3;
}
 .cryptoflex-4 {
	 flex: 4;
}
 .cryptoflex-5 {
	 flex: 5;
}
 .cryptotext-left {
	 text-align: left;
}
 .cryptotext-right {
	 text-align: right;
}
 .cryptotext-center {
	 text-align: center;
}
 .cryptotext-justify {
	 text-align: justify;
}
 .cryptotext-uppercase {
	 text-transform: uppercase;
}
 .cryptotext-lowercase {
	 text-transform: lowercase;
}
 .cryptotext-capitalize {
	 text-transform: capitalize;
}
 .cryptotext-underline {
	 text-decoration: underline;
}
 .cryptotext-striked {
	 text-decoration: line-through;
}
 .cryptotext-italic {
	 font-style: italic;
}
 .cryptotext-bold {
	 font-weight: bold;
}
 .cryptotext-nowrap {
	 white-space: nowrap;
}
 .cryptotext-clip {
	 overflow: hidden;
	 white-space: nowrap;
	 text-overflow: ellipsis;
}
 .cryptotext-primary {
	 color: orange;
	 font-size:18px;
	  margin-block-start: 0.1em;
    margin-block-end: 0.1em;
		text-shadow:none;
}
 .cryptotext-secondary {
	 color: #20acea;
}
 .cryptotext-grey {
	 color: #5c6776;
	 
}
 .cryptotext-bright {
	 color:#34b5eb;
	 /*color: #f0f0f0;
	 color: #1567d8; */
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
	text-shadow:none;
	 
}
 .cryptotext-faded {
	 color: #004eb9;
	 opacity: 0.3;
}
 .cryptotext-big {
	 font-size: 120%;
	 line-height: 1.212em;
}
 .cryptotext-small {
	 font-size: 70%;
	 line-height: 1.14em;
}
 .cryptotext-condense {
	 letter-spacing: -1px;
}
 .cryptoshadow-box {
	 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
 .cryptoshadow-text {
text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3),
             1px 0px 0px rgba(0, 0, 0, 0.3);
}
 .cryptoform-input {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: nowrap;
	 align-items: center;
	 padding: 0.7em 1em;
	 color: #f0f0f0;
	 background-color: #393e48;
	 border-radius: 100px;
}
 .cryptoform-input.dark {
	 background-color: #000;
}
 .cryptoform-input > input {
	 width: auto;
}
 @keyframes dropdownShow {
	 0% {
		 transform: translateY(30px);
		 opacity: 0;
	}
	 100% {
		 transform: translateY(0);
		 opacity: 1;
	}
}
 .cryptodropdown {
	 display: block;
	 position: relative;
	 cursor: pointer;
}
 .cryptodropdown > ul {
	 z-index:999;
	 display: none;
	 list-style: none;
	 position: absolute;
	 transition: none;
	 animation: dropdownShow 300ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
	 right: 0;
	 top: 50%;
	 min-width: 200px;
	 max-width: 400px;
	 padding: 0.5em 0;
	 background-color: #272a31;
	 border-radius: 3px;
	 box-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
}
 .cryptodropdown > ul > li {
	 display: block;
	 padding: 0.5em 1em;
	 background-color: rgba(0, 0, 0, 0);
	 color: #f0f0f0;
	 cursor: pointer;
}
 .cryptodropdown > ul > li + li {
	 border-top: 2px solid rgba(255, 255, 255, 0.04);
}
 .cryptodropdown > ul > li:hover {
	 background-color: rgba(0, 0, 0, 0.1);
}
 .cryptodropdown:hover > ul, .cryptodropdown:active > ul {
	 display: block;
}
 .cryptoheader-wrap {
	 position: fixed;
	 left: 0;
	 top: 0;
	 width: 100%;
	 background-color: #1e2126;
	 background-image: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
	 box-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
	 z-index: 999;
}
 .cryptoheader-wrap .cryptoheader-row {
	 height: 4em;
	 padding: 1em;
}
 .cryptoheader-wrap .cryptoheader-row .cryptodropdown {
	 margin-left: 0.4em;
}
 .cryptomain-wrap {
	 position: relative;
	 padding: 1px;
}
 .cryptomain-wrap .cryptomain-grid-list {
/*	 */ display: grid;
	 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	 grid-gap: 0.7em;
}
 @media only screen and (min-width : 420px) {
	 .cryptomain-wrap .cryptomain-grid-list {
		 grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}
}


 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item .cryptomain-grid-chart {
    background-color:#f3f3f3;
    position: absolute;
    width: 100%;
    height: 100%; 
	z-index: -2;
}

 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item {
	 background-color: transparent;
	 position:relative;
	 border-radius: 4px 4px 4px 4px;
     -moz-border-radius: 4px 4px 4px 4px;
     -webkit-border-radius: 4px 4px 4px 4px;
	 border-left: solid 7px #1567d8;
	 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	     overflow: hidden;

}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptogain {
	 background-color: #222a22;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptogain polyline.cryptocolor {
	 stroke: #32cd32;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptogain circle.cryptocolor {
	 fill: #32cd32;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptogain .cryptocolor {
	 color: #32cd32;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptoloss {
	 background-color: #331a1f;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptoloss polyline.cryptocolor {
	 stroke: #dc143c;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptoloss circle.cryptocolor {
	 fill: #dc143c;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item.cryptoloss .cryptocolor {
	 color: #dc143c;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item .cryptomain-grid-info {
	 padding: 0.7em 1em;
}
 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item .cryptomain-grid-info img {
	 width: auto;
	 height: 16px;
}
 @media only screen and (min-width : 420px) {
	 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item .cryptomain-grid-info img {
		 height: 20px;
	}
}
 @media only screen and (min-width : 720px) {
	 .cryptomain-wrap .cryptomain-grid-list .cryptomain-grid-item .cryptomain-grid-info img {
		 height: 32px;
	}
}

 .cryptoloader-wrap {
	 display: none;
	 flex-direction: row;
	 justify-content: center;
	 align-items: center;
	 position: relative;
	 left: 0;
	 top: 0;
	 width: 100%;
	 height: 100%;
	 background-color: rgba(0, 0, 0, 0.8);
	 text-align: center;
	 z-index: 9999;
}
 .cryptoloader-wrap.cryptovisible {
	 display: flex;
}
 .cryptoloader-wrap .cryptoloader-content {
	 padding: 1em 2em;
	 background-color: #1e2126;
	 border-radius: 3px;
	 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
 .cryptoloader-wrap .cryptoloader-content i {
	 font-style: normal;
	 font-size: 600%;
	 line-height: normal;
}
</style>
