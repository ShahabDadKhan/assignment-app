<!-- src/components/LoginForm.vue -->
<template>
  <form>
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
      </div>
    </div>
    <AppButton
      @click="handleSubmit"
      class="login-btn"
      :width="'100%'"
      :height="'43px'"
    >
      Login Now
    </AppButton>
    <div class="register-text">
      Not registered yet? <span @click="toggleSinup"> Register</span>
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
      password: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    toggleSinup() {
      this.$emit("toggleSinup");
    },
    handleSubmit() {
      event.preventDefault();
      if (this.modalType == "close") {
        this.$emit("closeModal");
      } else {
        this.$router.push("/timeline");
      }
      this.email = "";
      this.password = "";
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
      font-size: $xxl;
      position: absolute;
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
}
.password-container {
  display: flex;
  flex-direction: column;
}
.password-labelContainer {
  @include display-flex;

  span {
    font-size: $xs;
    color: $secondary;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.2px;

    &:hover {
      cursor: pointer;
    }
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
