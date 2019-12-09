<template>
  <ul
    class="yf-longList"
    :style="`height: ${height * (endIndex + 1) + 10 * (endIndex + 2)}px;`"
  >
    <li
      class="longList-item"
      v-for="(item, index) in showList"
      :key="index"
      :id="index === 0 ? 'top' : index === showList.length - 1 ? 'bottom' : ''"
      :ref="index === 0 ? 'top' : index === showList.length - 1 ? 'bottom' : ''"
      :style="
        `top: ${(height + 10) *
          (index + startIndex)}px;height:${height}px;line-height:${height}px;`
      "
    >
      {{ item.id }}
    </li>
  </ul>
</template>

<script>
import listData from "./data";
export default {
  name: "yf-longList",
  // props: {
  // 	list: {
  // 		type: Array,
  // 		default: () => []
  // 	}
  // },
  data() {
    return {
      startIndex: 0,
      endIndex: 0,
      size: 10,
      height: 100,
      list: listData,
      showList: [],
      maxStartIndex: 0,
      maxEndIndex: 0,
      io: null,
      startEl: null,
      endEl: null
    };
  },
  created() {
    // this.init();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.startIndex = 0;
      this.endIndex = this.size * 2 - 1;
      this.setShowList();
      let listLength = this.list.length;
      this.maxStartIndex = Math.floor((listLength - 1 - this.size) / 10) * 10;
      this.maxEndIndex = listLength - 1;
    },
    ioCallBack(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === "bottom") {
          console.log(1);
          this.endIndex =
            this.endIndex + this.size > this.maxEndIndex
              ? this.maxEndIndex
              : this.endIndex + this.size;
          this.startIndex =
            this.startIndex === this.maxStartIndex
              ? this.maxStartIndex
              : this.endIndex - this.startIndex < this.size
              ? this.startIndex
              : this.startIndex + this.size;
          this.setShowList();
        }

        if (entry.isIntersecting && entry.target.id === "top") {
          console.log(2);
          this.startIndex =
            this.startIndex > 0 ? this.startIndex - this.size : 0;
          this.endIndex =
            this.endIndex === this.maxEndIndex
              ? Math.floor(this.maxEndIndex / 10) * 10
              : this.endIndex - this.size <= this.size
              ? this.endIndex
              : this.endIndex - this.size;
          this.setShowList();
        }
      });
    },
    freshObserve() {
      this.$nextTick(() => {
        console.log("this.$refs", this.$refs);
        if (!this.io) {
          this.io = new IntersectionObserver(this.ioCallBack, {
            threshold: 0.75
          });
        }
        this.io.observe(this.$refs.top[0]);
        this.io.observe(this.$refs.bottom[0]);
      });
    },
    setShowList() {
      this.showList = [...this.list.slice(this.startIndex, this.endIndex + 1)];
      this.freshObserve();
    }
  }
};
</script>

<style lang="scss" scoped>
.yf-longList {
  position: relative;
  margin: 0;
  .longList-item {
    left: 0;
    right: 0;
    position: absolute;
    margin: 10px 0;
    border: 1px solid #000;
    border-radius: 10px;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
