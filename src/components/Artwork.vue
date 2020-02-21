<template>
  <div>
    <v-container class="mt-5" style="padding-top: 100px !important;">
      <h6>Fashion</h6>
      <v-row>
        <v-col v-for="(item, i) in fashion" :key="i" md="3">
          <div>
            <img :src="item.image" width="200" />

            <div class="text-center">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="400" />
                    <h6>{{ item.sizes }}</h6>

                    <h6>{{ item.price }}</h6>

                    <v-btn @click="addToCart(item)">ADD</v-btn>
                  </v-card-text>

                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
      </v-row>

      <h6>Graphics</h6>
      <v-row>
        <v-col v-for="(item, i) in graphics" :key="i" md="3">
          <div>
            <img :src="item.image" width="200" />

            <div class="text-center">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="400" />
                    <h6>{{ item.sizes }}</h6>

                    <h6>{{ item.price }}</h6>

                    <v-btn @click="addToCart(item)">ADD</v-btn>
                  </v-card-text>

                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
      </v-row>

      <h6>Nature</h6>
      <v-row>
        <v-col v-for="(item, i) in nature" :key="i" md="3">
          <div>
            <img :src="item.image" width="200" />

            <div class="text-center">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="400" />
                    <h6>{{ item.sizes }}</h6>

                    <h6>{{ item.price }}</h6>

                    <v-btn @click="addToCart(item)">ADD</v-btn>
                  </v-card-text>

                  <v-divider></v-divider>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
      </v-row>

      <h6>Collage</h6>
      <v-row>
        <v-col v-for="(item, i) in collage" :key="i" md="3">
          <div>
            <div class="text-center">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">
                    <img :src="item.image" width="200" />
                  </v-btn>
                </template>

                <v-card>
                  <v-card-text>
                    <img :src="item.image" width="400" />
                    <h6>{{ item.sizes }}</h6>

                    <h6>{{ item.price }}</h6>

                    <v-btn @click="addToCart(item)">ADD</v-btn>
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
// import FashionCard from "./components/FashionCard";
export default {
  name: "Artwork",
  props: ["product"],
  data() {
    return {
      // cart: []
      quantity: 1
    };
  },

  methods: {
    showArtwork() {
      this.$router.push("/Artwork");
    },
    addToCart(item, quantity) {
      this.$emit("updateCart", { ...item, quantity });
    }
  },

  computed: {
    fashion() {
      return data.fashion;
    },
    graphics() {
      return data.graphics;
    },
    nature() {
      return data.nature;
    },
    collage() {
      return data.collage;
    }
  }
};
</script>
<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
