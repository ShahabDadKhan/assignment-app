<template>
  <div class="create-post-container">
    <h2>Create post</h2>
    <div class="comment-container">
      <img
        src="../assets/Group 1.png"
        width="48px"
        height="48px"
        alt="comment-image"
      />
      <input type="text" placeholder="How are you feeling today?" />
    </div>
    <AppButton class="post-btn" :width="'111px'" @click="handlePost"
      >Post</AppButton
    >
  </div>
</template>

<script>
import AppButton from "./base/AppButton.vue";
export default {
  components: { AppButton },
  methods: {
    handlePost() {
      this.$emit("login");
    },
  },
};
</script>

<style lang="scss" scoped>
.create-post-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #35373b;
  background: #27292d;
  border-radius: 10px;
}
.comment-container {
  @include display-flex;
  justify-content: flex-start;
  background: #131319;
  padding: 15px;
  border-radius: 10px;
}
input {
  font-size: 16px;
  line-height: 18px;
  margin-left: 15px;
  color: #7f8084;
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
    border: none;
  }
}
.post-btn {
  margin-top: 20px;
  margin-left: auto;
}
h2 {
  font-size: 18px;
  line-height: 21px;
  color: #c5c7ca;
}
</style>
