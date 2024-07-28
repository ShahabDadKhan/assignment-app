<template>
  <div class="modal-componentDiv">
    <Modal :isVisible="true">
      <img class="logo" src="../assets/logo.svg" alt="Logo image" />
      <Login v-if="isLogin" @toggleSinup="switchScreen" />
      <Signup v-else @toggleLogin="switchScreen" />
    </Modal>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Modal from "./base/Modal.vue";
import Signup from "../components/Signup.vue";
export default {
  name: "Home",
  components: { Modal, Login, Signup },
  props: {
    msg: String,
  },
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    switchScreen() {
      this.isLogin = !this.isLogin;
    },
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
  color: $black;
}
</style>
