<template>
  <div>
    <v-container class="mt-5" style="padding-top: 100px !important;">
      <h6>Fashion</h6>
      <v-row>
        <v-col v-for="(item, i) in fashion" :key="i" md="3">
          <div>
            <div class="text-center">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <div dark v-on="on">
                    <img :src="item.image" width="200" />
                  </div>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="400" />
                    <h6>{{ item.sizes }}</h6>

                    <h6>{{ item.price }}</h6>

                    <v-btn @click="addToCart(item)">ADD</v-btn>

                    <v-btn @click="increment()">+</v-btn>
                    <span>{{quantity}}</span>
                    <v-btn @click="decrease()" :disabled="quantity === 0">-</v-btn>
                  </v-card-text>

                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import data from "../data";

export default {
  name: "Fashion",

  data() {
    return {
      quantity: 0,
      artworks: []
    };
  },

  computed: {
    fashion() {
      return data.fashion;
    }
  },
  methods: {
    addToCart(item) {
      this.$emit("updateCart", { ...item, quantity: this.quantity });
    },
    increment() {
      this.quantity += 1;
    },
    decrease() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    }
  }
};
</script>

<style>
</style>