<template>
  <v-app>
    <v-app-bar app color="orange" dark>
      <v-spacer></v-spacer>
      <v-btn text rounded>
        <router-link to="/">
          <span>
            <a>Home</a>
          </span>
        </router-link>
      </v-btn>
      <v-btn text rounded>
        <router-link to="/sign-up">
          <span>
            <a>Sign up</a>
          </span>
        </router-link>
      </v-btn>
      <v-btn text rounded>
        <router-link to="/sign-in">
          <span>
            <a>Sign in</a>
          </span>
        </router-link>
      </v-btn>
      <v-btn text rounded>
        <router-link to="/artwork">
          <span>
            <a>Artwork</a>
          </span>
        </router-link>
      </v-btn>
      <v-btn text rounded>
        <router-link to="/shopping-cart">
          <span>
            <a>Cart({{cart.length}})</a>
          </span>
        </router-link>
      </v-btn>
    </v-app-bar>

    <router-view :cart="cart" @updateCart="updateCart" @deleteCart="deleteCart" />
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    updateCart(e) {
      this.cart.push(e);
    },

    deleteCart(item) {
      let index = this.cart.indexOf(item);
      this.cart.splice(index);
    }
  }
};
</script>
<style>
.v-application a {
  text-decoration: none;
  color: #dee2e6 !important;
}
</style>
