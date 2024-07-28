<!-- src/components/LoginForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <h3>SIGN UP</h3>
    <h2>Create an account to continue</h2>
    <div class="email-container">
      <label for="email">Email</label>
      <input placeholder="Enter your email" type="email" v-model="email" />
    </div>
    <div class="email-container">
      <label for="email">Username</label>
      <input
        placeholder="Choose a prefered username"
        type="email"
        v-model="username"
      />
    </div>
    <div class="password-container">
      <div class="password-labelContainer">
        <label for="password">Password</label>
      </div>
      <div class="password-inputContainer">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          v-model="password"
          placeholder="Choose a strong password"
        />
        <img
          class="eye-icon"
          src="../assets/eye.svg"
          @click="togglePasswordVisibility"
        />
      </div>
    </div>
    <AppButton
      @click="handleSubmit"
      class="login-btn"
      :width="'100%'"
      :height="'43px'"
    >
      Continue
    </AppButton>
    <div class="register-text">
      Already have an account? <span @click="toggleLogin"> Login</span>
    </div>
  </form>
</template>

<script>
import AppButton from "./base/AppButton.vue";
export default {
  components: { AppButton },
  props: ["modalType"],
  data() {
    return {
      email: "",
      username: "",
      password: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    toggleLogin() {
      this.$emit("toggleLogin");
    },
    handleSubmit() {
      if (this.modalType == "close") {
        this.$emit("closeModal");
      } else {
        this.$router.push("/timeline");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: $small;
  color: $tertiary;
  text-align: center;
}
h2 {
  font-size: $large;
  color: $white;
  text-align: center;
}
label {
  font-size: $small;
  line-height: 16px;
  font-weight: 500;
  color: $secondary;
  margin: 20px 0px 10px 0px;
}
input {
  width: -webkit-fill-available;
  height: 43px;
  border: 1.5px solid $border-primary;
  border-radius: 4px;
  background: $bg-primary;
  padding: 0px 18px;
  color: $primary;

  &::placeholder {
    font-size: $medium;
    color: $primary;
    font-weight: 400;
  }
}

.register-text {
  font-size: $small;
  color: $primary;

  span {
    color: $white;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "→";
      position: absolute;
      top: -9px;
      font-size: $xxl;
    }
  }
}

.login-btn {
  margin: 15px 0px;
}
.email-container {
  display: flex;
  flex-direction: column;
}
.password-container {
  display: flex;
  flex-direction: column;
}
.password-labelContainer {
  @include display-flex;
}

.password-inputContainer {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 17px;
  bottom: 30%;

  &:hover {
    cursor: pointer;
  }
}
</style>
