<template>
  <form>
    <div class="form-group">
      <label for="inputEmail">Email address</label>
      <input
        v-model="email"
        class="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="inputPasswordIn">Password</label>
      <input
        v-model="password"
        class="form-control"
        id="inputPasswordIn"
        placeholder="Password"
      />
    </div>
    <button @click="doSubmit" class="btn btn-primary">SIGN IN</button>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  props: ["projects"],

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
