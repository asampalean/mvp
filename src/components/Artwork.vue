<template>
  <div>ARTWORKS</div>
</template>

<script>
import data from "./data";
export default {
  name: "Artwork",
  data() {
    return {
      image: "",
      sizes: "",
      frames: "",
      price: ""
    };
  },
  methods: {
    showArtwork() {
      this.$router.push("/Artwork");
    },
    getData() {
      data.fashion.map;
      data.graphics.map;
      data.nature.map;
      data.collage.map;
    }
  }
};
</script>
<style></style>