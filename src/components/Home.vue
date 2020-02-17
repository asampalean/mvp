<template>
  <div>
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
      </div>
    </div>
    <div class="text-center">
      <img src="../assets/aa logo.png" class="logo" />
    </div>

    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/aa logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        AccessibleART
      </a>
      <button
        class="navbar-nav"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Nav navigation"
      ></button>
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
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    //here I am defining the data
    return {
      newClient: true
    };
  },
  methods: {
    handleClick() {
      this.newClient = true;
    }
  }
};
</script>

<style></style>
