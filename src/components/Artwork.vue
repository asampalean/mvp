<template>
  <div class="mt-5" style="padding-top: 100px !important; text-align:center;">
    <h1 style="font-family:'Roboto Mono'; margin-bottom:100px;">Category</h1>
    <nav style="text-align:center">
      <v-btn>
        <router-link to="/artwork/fashion">
          <p>Fashion</p>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/graphics">
          <p>Graphics</p>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/nature">
          <p>Nature</p>
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/collage">
          <p>Collage</p>
        </router-link>
      </v-btn>
    </nav>
    <router-view @updateCart="updateCart"></router-view>
  </div>
</template>

<script>
// import Fashion from "../Fashion";
// import Nature from "../Nature";
// import Graphics from "../Graphics";
// import Collage from "../Collage";

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
    updateCart(item) {
      this.$emit("updateCart", item);
    }
  }

  // computed: {
  //   fashion() {
  //     return data.fashion;
  //   },
  //   graphics() {
  //     return data.graphics;
  //   },
  //   nature() {
  //     return data.nature;
  //   },
  //   collage() {
  //     return data.collage;
  //   }
  // }
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

.v-btn {
  display: inline block;
  border-radius: 50px;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  text-decoration: none;
  margin-right: 20px;
}

.v-btn:hover {
  color: #4f9777;
  text-decoration: none;
  background: #333;
}
.v-btn p {
  color: #333333;
  padding-top: 10px;
  font-size: 16px!;
}
</style>
