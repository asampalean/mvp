<template>
  <div>
    <section class="hero">
      <div>
        <h1>Welcome to AccessibleArt!</h1>
        <p>Affordable, museum-quality prints for your home.</p>
        <router-link to="/artwork">
          <v-btn style="margin-top:30px">Browse</v-btn>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  handleBrowse() {
    this.$router.push("/artwork");
  }
};
</script>


<style scoped>
.hero {
  background-position: static;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=patrick-perkins-3wylDrjxH-E-unsplash.jpg);
  height: 1000px;
}
.hero div {
  max-width: 540px;
  margin-left: 310px;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  padding-top: 180px;
  font-family: "Roboto Mono";
}
</style>