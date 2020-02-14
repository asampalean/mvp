<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="name" class="form-control" id="name" placeholder="Name" />
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        v-model="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="inputPassword">Password</label>
      <input
        v-model="password"
        class="form-control"
        id="inputPassword"
        placeholder="Password"
      />

      <button @click="handleSubmit" class="btn btn-primary">SIGN UP</button>
    </div>
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
      this.$emit("createUser", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
