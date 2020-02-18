<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/sign-up">Sign Up</router-link>|
      <router-link to="/sign-in">Sign In</router-link>|
      <router-link to="/artwork">Artwork</router-link>|
      <router-link to="/shopping-cart">Shopping Cart</router-link>
    </div>
    <router-view :cart="cart" @addToCart="addToCart" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    }
  }
};
</script>
