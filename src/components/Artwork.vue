<template>
  <div class="mt-5" style="padding-top: 100px !important;">
    <h1>Category {{ $route.params.id }}</h1>
    <nav>
      <v-btn>
        <router-link to="/artwork/fashion">Fashion</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/graphics">Graphics</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/nature">Nature</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/artwork/collage">Collage</router-link>
      </v-btn>
    </nav>
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
  margin-right: 10px;
}
</style>
