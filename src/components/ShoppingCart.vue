<template>
  <div class="Item">
    SHOPPING CART
    <div v-for="(item, i) in cart" :key="i">
      <img :src="item.image" width="200" />

      <h6>{{ item.sizes }}</h6>

      <h6>{{ item.price }}</h6>

      <v-btn @click="emptyCart(item)">X</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["cart"],
  data() {
    return {
      total: 0
    };
  },
  methods: {
    emptyCart(e) {
      console.log(e);
      this.$emit("deleteCart", e);
    }
  }
};
</script>
<style></style>
