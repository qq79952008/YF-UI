<template>
  <div class="yf-button" @click="onClick">
    <yf-icon name="load" color="#fff" v-if="loading"></yf-icon>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "yf-button",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    btnClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
