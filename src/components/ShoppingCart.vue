<template>
  <div class="Item mt-5" style="padding-top: 100px !important;">
    <h1 style="text-align:center;">Checkout details</h1>
    <v-container>
      <v-row justify="space-between">
        <v-col v-for="(item, i) in cart" :key="i">
          <v-card>
            <img :src="item.image" width="200" />

            <h2>Size {{ item.sizes }}</h2>

            <h2>{{ item.price }}</h2>

            <h2>Quantity: {{ item.quantity }}</h2>

            <v-btn @click="emptyCart(item)">X</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-btn class="yellow" style="margin-left:472px ">Confirm your order</v-btn>
    </v-container>
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
<style>
</style>
