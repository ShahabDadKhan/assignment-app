<!-- src/components/Modal.vue -->
<template>
  <transition name="modal-fade">
    <div
      v-show="isVisible"
      :class="{
        'modal-overlay': true,
        'modal-overlay-active': isVisible,
      }"
      @click="closeModal"
    >
      <transition name="modal-content-fade">
        <div
          v-show="isVisible"
          :class="{ 'modal-content': true, 'modal-content-active': isVisible }"
          @click.stop
        >
          <button v-if="showCloseBtn" class="close-button" @click="closeModal">
            x
          </button>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
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
  transition: all ease-in-out;
  backdrop-filter: blur(0px);
  opacity: 0;
}
.modal-overlay-active {
  backdrop-filter: blur(2px);
  opacity: 1;
}

.modal-content {
  background: $bg-primary;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #959595;
  position: relative;
  min-width: 463px;
  opacity: 0;
  transform: scale(0.8);
  transition: all ease-in-out;
}
.modal-content-active {
  opacity: 1;
  transform: scale(1);
}
@media (max-width: 768px) {
  .modal-content {
    min-width: 80%;
  }
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

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-content-fade-enter-active,
.modal-content-fade-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.modal-content-fade-enter, .modal-content-fade-leave-to /* .modal-content-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scale(0.8);
}
</style>
