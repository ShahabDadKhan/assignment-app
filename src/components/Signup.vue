<!-- src/components/SignupForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <h2>Signup</h2>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <button type="submit">Signup</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle signup logic here
      console.log("Signup with", this.email, this.password);
    },
  },
};
</script>
