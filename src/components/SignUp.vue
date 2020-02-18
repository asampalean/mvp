<template>
  <form>
    <v-card class="mx-auto" max-width="500">
      <div>SIGN IN</div>
      <v-text-field v-model="name" label="Name" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>

      <v-btn class="mr-4" @click="handleSubmit">SIGN UP</v-btn>
    </v-card>
  </form>
</template>

<script>
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },

  methods: {
    handleSubmit() {
      this.$router.push("/");
    }
  }
};
</script>
