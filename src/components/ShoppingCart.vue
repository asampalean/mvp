<template>
  <div class="Item mt-5" style="padding-top: 100px !important;">
    <h1 style="text-align:center; font-family:'Roboto Mono'">Checkout details</h1>
    <v-container>
      <v-row justify="space-between">
        <v-col v-for="(item, i) in cart" :key="i">
          <v-card>
            <img :src="item.image" width="200" />

            <h2 style="font-family:'Roboto Mono';">Size {{ item.sizes }}</h2>

            <h2 style="font-family:'Roboto Mono';">{{ item.price }}</h2>

            <h2 style="font-family:'Roboto Mono';">Quantity: {{ item.quantity }}</h2>

            <v-btn @click="emptyCart(item)">X</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <!-- <h3 style="text-align:center">Total:</h3> -->
      <v-btn
        @click="handleOrder()"
        class="#4f9777"
        style="margin-left:472px;font-family:'Roboto Mono' "
      >Confirm your order</v-btn>
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

  // computed:{
  //   let total = 0;
  //     for(let i = 0; i < this.item.length; i++) {
  //       total += this.item[i].price;
  //        return total;
  //     }

  //   },

  methods: {
    emptyCart(e) {
      console.log(e);
      this.$emit("deleteCart", e);
    },
    handleOrder() {
      this.$router.push("/confirmation");
    }
  }
};
</script>
<style>
</style>
