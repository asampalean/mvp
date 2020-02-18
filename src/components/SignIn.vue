<template>
  <form>
    <v-card class="mx-auto" max-width="500">
      <div>SIGN IN</div>

      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>

      <v-btn class="mr-4" @click="doSubmit">SIGN IN</v-btn>
    </v-card>
  </form>
</template>

<script>
export default {
  name: "SignIn",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    doSubmit() {
      // this.$emit("letUser", {
      //   email: this.email,
      //   password: this.password
      // });
      // redirect the user to homepage
      this.$router.push("/");
    }
  }
};
</script>
<style></style>
