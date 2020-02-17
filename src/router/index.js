import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import Artwork from "../components/Artwork.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sign-up",
    name: "signup",
    component: SignUp
  },
  {
    path: "/sign-in",
    name: "signin",
    component: SignIn
  },
  {
    path: "/artwork",
    name: "artwork",
    component: Artwork
  },
  {
    path: "/shopping-cart",
    name: "shoppingcart",
    component: ShoppingCart
  }
];

const router = new VueRouter({
  routes
});

export default router;
