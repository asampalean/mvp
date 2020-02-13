<template>
  <div id="app" class="container">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Languages</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">English</a>
        <a class="dropdown-item" href="#">Spanish</a>
        <a class="dropdown-item" href="#">Italian</a>
      </div>
    </div>
    <div class="text-center">
      <img src="./assets/aa logo.png" class="logo" />
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-dark" @click="newClient = true">SIGN UP</button>
      <button type="button" class="btn btn-dark" @click="newClient = false">SIGN IN</button>

      <signUp v-if="newClient" @createUser="addProject" />
      <signIn v-else @letUser="addProject" />
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">AccessibleART</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Artwork></Artwork>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Fashion</a>
              <a class="dropdown-item" href="#">Graphics</a>
              <a class="dropdown-item" href="#">Nature</a>
              <a class="dropdown-item" href="#">Collage</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Favourites
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <ShoppingCart></ShoppingCart>
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button class="btn btn-primary my-2 my-sm-0 mr-auto" type="submit">Search</button>
          </form>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Artwork from "./components/Artwork";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "app",
  components: {
    SignIn,
    SignUp,
    Artwork,
    ShoppingCart
  },
  data() {
    //here I am defining the data
    return {
      newClient: true,
      allProjects: []
    };
  },
  methods: {
    addProject(project) {
      //project: catching the ball from the child
      this.allProjects.push(project);
    },
    handleClick() {
      this.newClient = true;
    }
  }
};
</script>

<style>
</style>
