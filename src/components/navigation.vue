<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center justify-content-between">
      <ul class="mb-0">
        <li>
          <router-link to="/home"
            ><i class="fa fa-home" aria-hidden="true"></i
            ><small>(Home)</small></router-link
          >
        </li>
      </ul>
      <ul class="mb-0">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/signUp">SignUp</router-link></li>
        <li>User</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>
ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
ul li {
  padding: 10px 15px;
}
</style>
