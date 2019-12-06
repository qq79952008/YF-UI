<template>
  <div
    class="yf-icon"
    :style="{ display: 'inline-flex', height: iconSize, width: iconSize }"
  >
    <svg
      :class="[
        'yf-icon-' + name,
        {
          'icon-loading': ~name.indexOf('load'),
          'is-disabled': disabled //
        }
      ]"
      :style="{ fill: color }"
    >
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "yf-icon",
  props: {
    color: String,
    name: {
      type: String,
      required: true
    },
    size: {
      // 因为用户可能传带单位的与不带单位的
      type: [Number, String],
      default: "1em"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconSize() {
      if (typeof this.size === "number") {
        return this.size + "px";
      }
      return this.size;
    }
  }
};
</script>
