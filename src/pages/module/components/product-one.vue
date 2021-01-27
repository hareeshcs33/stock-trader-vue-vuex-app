<template>
  <div class="product-one">
    <h3>Product one</h3>
    <ul>
      <li v-for="product in saleProducts">
        <span>{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button
      class="btn btn-lg btn-primary text-uppercase font-weight-bold"
      @click="reducePrice(4)"
    >
      Reduce Price
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    // products(){
    //     return this.$store.state.products;
    // },
    // saleProducts(){
    //     return this.$store.getters.saleProducts;
    // }
    ...mapGetters(["products", "saleProducts"])
  },
  methods: {
    // reducePrice(amount){
    //     this.$store.dispatch('reducePrice', amount);
    // }
    ...mapActions(["reducePrice"])
  }
};
</script>
<style scoped>
.product-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product-one ul {
  padding: 0;
}
.product-one li {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  color: #e8800c;
  font-weight: bold;
}
</style>
