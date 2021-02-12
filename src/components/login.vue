<template>
  <div class="container mx-5">
    <div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
        />
      </div>
      <button @click="login" class="btn btn-primary">Login</button>
      <router-link to="/signUp">SignUp</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
