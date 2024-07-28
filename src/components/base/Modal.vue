<!-- src/components/Modal.vue -->
<template>
  <div
    v-if="isVisible"
    :class="{ 'modal-overlay': true, 'modal-overlay-active': isVisible }"
    @click="closeModal"
  >
    <div class="modal-content" @click.stop>
      <button v-if="showCloseBtn" class="close-button" @click="closeModal">
        x
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    showCloseBtn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0px);
  transition: all 2s ease-in-out;
}
.modal-overlay-active {
  backdrop-filter: blur(2px);
}
.modal-content {
  background: $bg-primary;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #959595;
  position: relative;
  min-width: 463px;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: $xl;
  cursor: pointer;
  background: $bg-secondary;
  border-radius: 50%;
  color: $white;
  height: 35px;
  width: 35px;
}
</style>
