<template>
  <div class="hello">
    <yf-button class="btn" @click="click1" :loading="loading">
      <div>456</div>
    </yf-button>
    <yf-icon name="load" size="20px"></yf-icon>
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
      loading: false
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
</style>
