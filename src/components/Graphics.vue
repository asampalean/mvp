<template>
  <div>
    <v-container class="mt-5" style="padding-top: 100px !important;">
      <h6>Graphics</h6>
      <v-row>
        <v-col v-for="(item, i) in graphics" :key="i" md="3">
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

                    <!-- <v-btn @click="addToCart(item)">ADD</v-btn> -->
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
  name: "Graphics",
  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    graphics() {
      return data.graphics;
    }
  }
  //   methods: {
  //     increment() {
  //       this.quantity += 1;
  //     },
  //     decrease() {
  //       this.quantity - 1;
  //     }
  //   }
};
</script>

<style>
</style>