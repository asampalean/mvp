<template>
  <div>
    ARTWORKS
    <div>
      fashion
      <div v-for="(item, i) in fashion" :key="i">
        <img :src="item.image" width="100" />
      </div>
    </div>
    <div>
      graphics
      <div v-for="(item, i) in graphics" :key="i">
        <img :src="item.image" width="100" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data";
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
    }
  },
  computed: {
    fashion() {
      return data.fashion;
    },
    graphics() {
      return data.graphics;
    }
  }
};
</script>
<style></style>
