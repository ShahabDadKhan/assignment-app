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
  font-size: $xxl + 4px; // Just adding +4 to xxl, don't need to create a new variable just to use it at one place.
  line-height: 33px;
  color: $secondary;
}
p {
  font-size: $medium;
  line-height: 24px;
  color: $primary;
}
</style>
