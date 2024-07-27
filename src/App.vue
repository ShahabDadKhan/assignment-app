<!-- src/views/Auth.vue -->
<template>
  <div>
    <!-- <button @click="showModal('login')">Login</button>
    <button @click="showModal('signup')">Signup</button> -->
    <router-view />
    <!-- 
    <Modal :isVisible="isModalVisible" @close="isModalVisible = false">
      <component :is="currentComponent"></component>
    </Modal> -->
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      currentComponent: null,
    };
  },
  methods: {
    showModal(type) {
      this.currentComponent = type === "login" ? Login : Signup;
      this.isModalVisible = true;
    },
  },
};
</script>
