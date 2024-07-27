<!-- src/components/LoginForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <h3>WELCOME BACK</h3>
    <h2>Log into your account</h2>
    <div class="email-container">
      <label for="email">Email or Username</label>
      <input
        placeholder="Enter your email or username"
        type="email"
        v-model="email"
      />
    </div>
    <div class="password-container">
      <div class="password-labelContainer">
        <label for="password">Password</label>
        <span>Forgot password ?</span>
      </div>
      <div class="password-inputContainer">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          v-model="password"
          placeholder="Enter your password"
        />
        <img
          class="eye-icon"
          src="../assets/eye.svg"
          @click="togglePasswordVisibility"
        />
        <!-- <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i> -->
        <!-- </span> -->
      </div>
    </div>
    <AppButton class="login-btn" :width="'100%'" :height="'43px'">
      Login Now
    </AppButton>
    <div class="register-text">Not registered yet? <span> Register</span></div>
  </form>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {
      email: "",
      password: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    handleSubmit() {
      // Handle login logic here
      console.log("Login with", this.email, this.password);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #6b6c70;
  text-align: center;
  font-size: 14px;
}
h2 {
  color: $white;
  text-align: center;
  font-size: 18px;
}
label {
  line-height: 16px;
  font-weight: 500;
  font-size: 14px;
  color: #c5c7ca;
  margin: 20px 0px 10px 0px;
}
input {
  width: -webkit-fill-available;
  height: 43px;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  background: #27292d;
  padding: 0px 18px;
  color: #7f8084;

  &::placeholder {
    color: #7f8084;
    font-size: 16px;
    font-weight: 400;
  }
}

.register-text {
  color: #7f8084;
  font-size: 14px;

  span {
    color: $white;
    position: relative;

    &::after {
      content: "→";
      position: absolute;
      font-size: 24px;
      top: -9px;
    }
  }
}

.login-btn {
  margin: 15px 0px;
}
.email-container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
}
.password-container {
  display: flex;
  flex-direction: column;
  // color: $white;
}
.password-labelContainer {
  @include display-flex;

  span {
    color: #c5c7ca;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.2px;
  }
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
