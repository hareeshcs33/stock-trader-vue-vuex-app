<template>
  <div class="container mx-5">
    <div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter username"
          id="username"
          v-model="username"
        />
        <div v-if="false">
          <span v-for="err in errorMsg" :key="err">{{ err.username }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          id="email"
          v-model="email"
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
          v-model="password"
        />
        <div v-if="false">
          <span v-for="err in errorMsg" :key="err">{{ err.password }}</span>
        </div>
      </div>
      <button @click="signUp" class="btn btn-primary">signUp</button>
      <router-link to="/">Login</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      userData: {},
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
    signUp() {
      console.log("signup");
      console.log(this.validateData);
      axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password
        })
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    validateData() {
      if ((this.username || this.email || this.password) == "") {
        return this.errorMsg;
      }
      return true;
    }
  }
};
</script>
