<template>
  <div class="hello">
    <!-- <yf-button class="btn" @click="click1" :loading="loading">
      <div>456</div>
    </yf-button> -->
    <!-- <ul class="list">
      <yf-lazy v-for="(item, index) in list" :key="index">
        <li>
          <span v-if="item.text">{{ item.text }}</span>
          <img :src="item.src" v-else alt="" />
        </li>
      </yf-lazy>
    </ul> -->
    <yf-longList></yf-longList>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      list: [
        {
          text: "1",
          src: ""
        },
        {
          text: "2",
          src: ""
        },
        {
          text: "3",
          src: ""
        },
        {
          text: "4",
          src: ""
        },
        {
          text: "5",
          src: ""
        },
        {
          text: "6",
          src: ""
        },
        {
          text: "7",
          src: ""
        },
        {
          text: "8",
          src: ""
        },
        {
          text: "9",
          src: ""
        },
        {
          text: "10",
          src: ""
        },
        {
          text: "11",
          src: ""
        },
        {
          text: "12",
          src: ""
        },
        {
          text: "13",
          src: ""
        },
        {
          text: "14",
          src: ""
        },
        {
          text: "16",
          src: ""
        },
        {
          text: "17",
          src: ""
        },
        {
          text: "18",
          src: ""
        },
        {
          text: "19",
          src: ""
        },
        {
          text: "20",
          src: ""
        },
        {
          text: "21",
          src: ""
        },
        {
          text: "22",
          src: ""
        },
        {
          text: "23",
          src: ""
        },
        {
          text: "24",
          src: ""
        },
        {
          text: "25",
          src: ""
        },
        {
          text: "26",
          src: ""
        },
        {
          text: "",
          src:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3737855222,3034476166&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    click1() {
      console.log("1");
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  display: flex;
  flex-direction: column;
  li {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>
