<template>
  <div class="Item">
    SHOPPING CART
    <div v-for="(item, i) in cart" :key="i">
      <img :src="item.image" width="200" />
      <p>
        <h7>{{ item.sizes }}</h7>
      </p>
      <p>
        <h7>{{ item.price }}</h7>
      </p>
      <p>
        <v-btn @click="emptyCart(item)">DELETE</v-btn>
      </p>
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
