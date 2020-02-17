<template>
  <div>Shopping Cart</div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      items: "",
      totalamount: ""
    };
  },
  methods: {
    showShoppingCart() {
      this.$router.push("/ShoppingCart");
    }
  }
};
</script>
<style></style>