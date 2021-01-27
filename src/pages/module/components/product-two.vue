<template>
  <div class="product-two">
    <h3>Product Two</h3>
    <ul>
      <li v-for="product in saleProducts">
        <span>{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
</script>
<style scoped>
.product-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product-two ul {
  padding: 0;
}
.product-two li {
  display: block;
  margin: 10px 10px 0 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  color: #860ceb;
  font-weight: bold;
  display: block;
}
</style>
