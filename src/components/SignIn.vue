<template>
  <v-app>
    <v-content>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 style="font-family:'Roboto Mono';" class="mx-auto">Login</h1>
          <v-card-text>
            <v-form>
              <v-text-field style="font-family:'Roboto Mono';" label="Username" />
              <v-text-field style="font-family:'Roboto Mono';" type="password" label="Password" />
            </v-form>
            <v-card-actions>
              <v-btn
                color="#4f9777"
                class="mx-auto"
                style="font-family:'Roboto Mono';"
                @click="handleSubmit"
              >Sign in</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card-title>
      </v-card>
    </v-content>
  </v-app>
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
    handleSubmit() {
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
