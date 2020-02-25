<template>
  <div style="background-color:#ddcbc2;">
    <v-container class="mt-5" style="padding-top: 100px !important;">
      <v-row>
        <v-col v-for="(item, i) in collage" :key="i" md="3">
          <div>
            <div class="text-center">
              <v-dialog width="500" height="700">
                <template v-slot:activator="{ on }">
                  <div dark v-on="on">
                    <img :src="item.image" width="200" />
                  </div>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="300" />
                    <h6 style="font-family:'Roboto Mono';">{{ item.sizes }}</h6>

                    <h6 style="font-family:'Roboto Mono';">{{ item.price }}</h6>

                    <v-btn
                      @click="addToCart(item)"
                      style="font-family:'Roboto Mono';margin-right:30px; float:right;"
                    >ADD</v-btn>

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
  name: "Collage",
  data() {
    return {
      quantity: 0,
      artworks: [],
      total: 0
    };
  },

  computed: {
    collage() {
      return data.collage;
    }
  },
  methods: {
    addToCart(item) {
      if (this.quantity > 0) {
        this.$emit("updateCart", { ...item, quantity: this.quantity });
      }
    },

    increment() {
      this.quantity += 1;
    },
    decrease() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },

    getTotal() {
      this.$emit("updateTotal");
    }
  }
};
</script>

<style>
</style>