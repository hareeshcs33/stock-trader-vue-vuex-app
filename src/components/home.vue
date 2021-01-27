<template>
  <div class="container">
    <h3>Home</h3>
    <div class="home-content-page">
      <span><i class="fa fa-home home-bg-icon" aria-hidden="true"></i></span>
    </div>
  </div>
</template>
<script>
import Home from "../mixins/home";

export default {
  mixins: [Home]
};
</script>
<style scoped>
.container {
  position: relative;
  height: calc(100vh - 100px);
}
.home-bg-icon {
  position: absolute;
  font-size: 190px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
