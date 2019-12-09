<template>
  <div class="lazy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yf-lazy",
  data() {
    return {
      innerHTML: null,
      lazyId: this._uid
    };
  },
  created() {},
  mounted() {
    let vm = this;
    console.log("vm", vm);
    vm.innerHTML = vm.$el.innerHTML;
    let div = `<div style="height: ${vm.$el.clientHeight}px;width: ${vm.$el.clientWidth}px;"></div>`;
    vm.$el.innerHTML = div;
    vm.$io = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          console.log("entries", entries);
          if (vm.$el.innerHTML !== vm.innerHTML) {
            vm.$el.innerHTML = vm.innerHTML;
          }
        }
      });
    });
    vm.$io.observe(vm.$el);
  }
};
</script>
