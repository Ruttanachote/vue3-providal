<template>
  <section>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :autoplay="10000"
      :wrapAround="true"
    >
      <Slide v-for="c in coinsList" :key="c.symbol">
        <div class="carousel__item">
          <div class="widget-card">
            <div class="widget-title">
              <h5>{{ c.token }} &#8776; {{ c.asset }}</h5>
              <p :class=" c.sign === '+' ? 'text-success' : 'text-danger'">
                {{ c.sign }} {{ c.percent }}%
                <span
                  ><i> {{ c.arrow }} </i></span
                >
              </p>
            </div>
            <div class="widget-info">
              <h3>$ {{ c.close }}</h3>
              <apexchart
                type="line"
                height="80"
                width="90"
                class="p-0 m-0 text-dark card-apex"
                :options="chartOptions"
                :series="setSeries(c)"
              ></apexchart>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3.5,
        snapAlign: "start",
      },
      1280: {
        itemsToShow: 4,
        snapAlign: "start",
      }
    },
    series: [
      {
        name: "Sales",
        data: [4, 3, 20, 9, 29, 19, 22, 9],
      },
    ],
    chartOptions: {
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
        type: "numeric",
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
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
      },
    },
    endpoint: "wss://stream.binance.com:9443/ws/!ticker@arr",
    iconbase:
      "https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/",
    cache: {}, // coins data cache
    coins: [], // live coin list from api
    asset: "USDT", // filter by base asset pair
    search: "", // filter by search string
    sort: "assetVolume", // sort by param
    order: "desc", // sort order ( asc, desc )
    limit: 50, // limit list
    status: 0, // socket status ( 0: closed, 1: open, 2: active, -1: error )
    sock: null, // socket inst
    cx: 0,
    cy: 0,
  }),
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
    setSeries(chart){
      return [
        {
          name: "Sales",
          data: chart.history.slice(-20),
        },
    ];
    },
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
      this.asset = String(asset || "USDT");
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
});
</script>

<style lang="scss" scoped>
.carousel__item {
  /* min-height: 200px; */
  width: 100%;
  /* background-color: var(--carousel-color-primary); */
  /* color: var(--carousel-color-white); */
  /* font-size: 20px; */
  /* border-radius: 8px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;

  z-index: 9999;
}



.menu {
  text-align: left;
}

.widget-card {
  background: #1f2937;
  mix-blend-mode: normal;
  border: 1px solid #312f62;
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(55, 55, 89, 0.08);

  .widget-stat {
    min-width: 180px;
    // padding  : 20px 0;

    h5 {
      // color: $body-color;
    }

    i {
      font-size: 24px;
      // color: #fff;
    }
  }

  .widget-title,
  .widget-info {
    display: flex;
    justify-content: space-between;

    h5 {
      color: #8691b4;
    }
    h3 {
      color: #fff;
    }
  }
}

</style>
