<template>
  <div class="modal-componentDiv">
    <Modal :isVisible="true">
      <img class="logo" src="../assets/logo.svg" alt="Logo image" />
      <Login v-if="isLogin" />
      <Signup v-else />
    </Modal>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Modal from "./Modal.vue";
import Signup from "./Signup.vue";
export default {
  name: "Home",
  components: { Modal, Login, Signup },
  props: {
    msg: String,
  },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-componentDiv {
  position: relative;
}
.logo {
  position: absolute;
  top: -15%;
  left: 47%;
}
.hello {
  font-size: $small;
  color: black;
}
</style>
