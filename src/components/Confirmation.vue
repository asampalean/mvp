<template>
  <div>
    <section class="last-hero">
      <div>
        <h1>Thank you for your order!</h1>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Confirmation",
  methods: {}
};
</script>
<style scoped>
.last-hero {
  background-image: url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=samantha-gades-BlIhVfXbi9s-unsplash.jpg);
  background-size: cover;
  background-position: top left;
  padding-top: 230px;
  padding-bottom: 200px;
}
.last-hero div {
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  height: 500px;
}
.last-hero div h1 {
  padding-top: 300px;
  font-size: 30px;
  font-family: "Roboto Mono";
}
</style>