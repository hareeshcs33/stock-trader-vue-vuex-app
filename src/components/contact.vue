<template>
  <div class="container">
    <h3 class="text-center">contact</h3>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name"
          v-model="username"
        />
      </div>
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
      <div class="form-group">
        <label for="cpwd">Confirm Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Re-Enter password"
          id="cpwd"
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" @click="submitContactForm" class="btn btn-primary">
        Get a Callback
      </button>
    </form>
  </div>
</template>
<script>
import Contact from "../mixins/contact";

export default {
  mixins: [Contact]
};
</script>
<style></style>
