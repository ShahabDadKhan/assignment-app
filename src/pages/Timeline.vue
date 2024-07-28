<template>
  <div class="container">
    <div class="inner-container">
      <h2>Hello {{ activeUser }}</h2>
      <p>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <CreatePost @login="openLoginModal" />
      <Posts />
    </div>
    <Modal :showCloseBtn="true" :isVisible="isVisible" @close="openLoginModal">
      <Login
        v-if="isLogin"
        @toggleSinup="switchScreen"
        @closeModal="openLoginModal"
        :modalType="'close'"
      />
      <Signup
        v-else
        @toggleLogin="switchScreen"
        @closeModal="openLoginModal"
        :modalType="'close'"
      />
    </Modal>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Modal from "../components/base/Modal.vue";
import Signup from "../components/Signup.vue";
// //////
import CreatePost from "@/components/CreatePost.vue";
import Posts from "@/components/Posts.vue";
export default {
  components: { CreatePost, Posts, Modal, Login, Signup },
  data() {
    return {
      activeUser: "Jane",
      isLogin: true,
      isVisible: false,
    };
  },
  methods: {
    openLoginModal() {
      this.isVisible = !this.isVisible;
    },
    switchScreen() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include display-flex;
  justify-content: center;
}
.inner-container {
  max-width: 50%;
}
h2 {
  font-size: 28px;
  line-height: 33px;
  color: #c5c7ca;
}
p {
  font-size: 16px;
  line-height: 24px;
  color: #7f8084;
}
</style>
