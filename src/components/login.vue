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
        <div v-if="false">
          <span v-for="err in errorMsg" :key="err">{{ err.email }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
        />
        <div v-if="false">
          <span v-for="err in errorMsg" :key="err">{{ err.password }}</span>
        </div>
      </div>
      <button @click="login" class="btn btn-primary">Login</button>
      <router-link to="/signUp">SignUp</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errorMsg: [
        {
          username: "Enter username"
        },
        { email: "Enter email" },
        { password: "Enter password" }
      ]
    };
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
