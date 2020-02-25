<template>
  <v-app>
    <v-content>
      <v-card class="mx-auto mt-5" max-width="400">
        <v-card-title>
          <h1 class="mx-auto">Register</h1>
          <v-card-text>
            <v-form>
              <v-text-field style="font-family:'Roboto Mono';" v-model="name" label="Name" required></v-text-field>
              <v-text-field
                style="font-family:'Roboto Mono';"
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                style="font-family:'Roboto Mono';"
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-form>
            <v-card-actions>
              <v-btn
                style="font-family:'Roboto Mono';"
                class="mx-auto"
                color="#4f9777"
                @click="handleSubmit"
              >Join</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card-title>
      </v-card>
    </v-content>
  </v-app>
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
