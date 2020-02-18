<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <div>
        <v-row class="mb-6" no-gutters>
          <v-col v-for="n in 1" :key="n">
            <h6>Fashion</h6>
            <div v-for="(item, i) in fashion" :key="i">
              <img :src="item.image" width="200" />
              <p>
                <h7>{{ item.sizes }}</h7>
              </p>
              <p>
                <h7>{{ item.price }}</h7>
              </p>
              <p>
                <v-btn @click="updateCart(item)">ADD</v-btn>
              </p>
            </div>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row justify="space-between">
          <v-col v-for="n in 1" :key="n">
            Graphics
            <div v-for="(item, i) in graphics" :key="i">
              <img :src="item.image" width="200" />
              <p>
                <h7>{{ item.sizes }}</h7>
              </p>
              <p>
                <h7>{{ item.price }}</h7>
              </p>
              <p>
                <v-btn @click="updateCart(item)">ADD</v-btn>
              </p>
            </div>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row justify="space-between">
          <v-col v-for="n in 1" :key="n">
            Nature
            <div v-for="(item, i) in nature" :key="i">
              <img :src="item.image" width="200" />
              <p>
                <h7>{{ item.sizes }}</h7>
              </p>
              <p>
                <h7>{{ item.price }}</h7>
              </p>
              <p>
                <v-btn @click="updateCart(item)">ADD</v-btn>
              </p>
            </div>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row justify="space-between">
          <v-col v-for="n in 1" :key="n">
            Collage
            <div v-for="(item, i) in collage" :key="i">
              <img :src="item.image" width="200" />
              <p>
                <h7>{{ item.sizes }}</h7>
              </p>
              <p>
                <h7>{{ item.price }}</h7>
              </p>
              <p>
                <v-btn @click="updateCart(item)">ADD</v-btn>
              </p>
            </div>
          </v-col>

          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import data from "../data";
export default {
  name: "Artwork",
  data() {
    return {
      total: 0
    };
  },

  methods: {
    showArtwork() {
      this.$router.push("/Artwork");
    },
    updateCart(e) {
      //this.cart.push(e);
      //this.total = this.shoppingCartTotal;
      this.$emit("addToCart", e);
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
