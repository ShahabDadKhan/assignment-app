<template>
  <div>
    <div class="post-container" v-for="(post, index) in postData" :key="index">
      <div class="profile-container">
        <img
          :src="require(`../assets/${post.pic}`)"
          width="48px"
          height="48px"
          alt="comment-image"
        />
        <div class="profile-bio">
          <h2>{{ post.name }}</h2>
          <div class="postTime-div">
            <span>{{ post.time }} ago</span
            ><span class="edited" v-if="post.edited">Edited</span>
          </div>
        </div>
        <!-- width="48px"
          height="48px" -->
        <img
          class="image-dots"
          src="../assets/Dots Horizontal.png"
          alt="dots-image"
        />
      </div>
      <div class="comment-container">
        <img
          :src="require(`../assets/${post.emoji}`)"
          width="48px"
          height="48px"
          alt="comment-image"
        />
        <p>
          {{ post.comment }}
        </p>
      </div>
      <div class="reply-container">
        <img src="../assets/Chat Bubble.png" alt="message image" />
        {{ post.reply }} comments
      </div>
      <!-- <AppButton class="post-btn" :width="'111px'">Post</AppButton> -->
    </div>
  </div>
</template>

<script>
import AppButton from "./base/AppButton.vue";
import mockData from "../data/mock-data.json";

export default {
  components: { AppButton },
  data() {
    return {
      postData: mockData,
    };
  },
};
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid $border-primary;
  background: $bg-primary;
  border-radius: 10px;
  margin: 15px 0px;
}
.comment-container {
  @include display-flex;
  justify-content: flex-start;
  background: $bg-secondary;
  padding: 15px;
  margin: 15px 0px;
  border-radius: 10px;
}
p {
  font-size: $medium;
  line-height: 18px;
  margin-left: 15px;
  color: $primary;
  background: transparent;
  border: none;
}
.post-btn {
  margin-top: 20px;
  margin-left: auto;
}
h2 {
  font-size: $large;
  line-height: 21px;
  color: $secondary;
  margin: 0px 0px 5px 0px;
}
.profile-bio {
  margin-left: 15px;
}
.postTime-div {
  font-size: $small;
  color: $primary;
}
.edited {
  position: relative;
  &::before {
    content: ".";
    position: absolute;
  }
}
.profile-container {
  @include display-flex;
  justify-content: flex-start;
}
.reply-container {
  @include display-flex;
  justify-content: flex-start;
  gap: 10px;
  font-size: $small;
  color: $primary;
  line-height: 16px;
  cursor: pointer;
}
.image-dots {
  margin-left: auto;
  cursor: pointer;
}
</style>
