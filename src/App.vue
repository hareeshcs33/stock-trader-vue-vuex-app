<template>
  <div id="app">
    <div class="app-page">
      <template v-if="baseComponent">
        <navigation></navigation>
        <hr class="mt-0" />
        <router-view />
      </template>
      <template v-if="baseProducts">
        <base-component></base-component>
      </template>
      <template v-if="baseTodoComponent">
        <base-todo-component></base-todo-component>
      </template>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue";
import BaseComponent from "./pages/module/components/base-component.vue";
import BaseProducts from "./pages/module/components/base-products.vue";
import BaseTodoComponent from "./pages/module-todo/components/base-todo-component.vue";

export default {
  name: "App",
  data() {
    return {
      baseComponent: true,
      baseProducts: false,
      baseTodoComponent: false
    };
  },
  components: {
    Navigation,
    BaseComponent,
    BaseProducts,
    BaseTodoComponent
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c757d;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
}
.cta-300 {
  min-width: 300px;
}
ul {
  list-style: none;
  padding: 0;
}
h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.2;
  color: #343a40;
}
p {
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
