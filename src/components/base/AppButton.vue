<template>
  <button class="appButton" :style="computedStyle" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    backgroundColor: {
      type: String,
      default: "#4A95FE",
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "43",
    },
  },
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.backgroundColor,
        width: this.width,
        height: this.height,
      };
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.appButton {
  font-size: $medium;
  border-radius: 4px;
  height: 43px;
  border: none;
  color: $white;

  &:hover {
    cursor: pointer;
  }
}
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: white;
}
.btn-default {
  background-color: #007bff;
}
.btn-secondary {
  background-color: #6c757d;
}
</style>
