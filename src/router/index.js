import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import Artwork from "../components/Artwork.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import Fashion from "../components/Fashion.vue";
import Graphics from "../components/Graphics.vue";
import Nature from "../components/Nature.vue";
import Collage from "../components/Collage.vue";
import Confirmation from "../components/Confirmation.vue";
import Contact from "../components/Contact.vue";

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
    path: "/contact",
    name: "contact",
    component: Contact
  },

  {
    path: "/shopping-cart",
    name: "shoppingcart",
    component: ShoppingCart
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: Confirmation
  },

  {
    path: "/artwork",
    name: "artwork",
    component: Artwork,
    children: [
      {
        path: "fashion",
        component: Fashion
      },
      {
        path: "graphics",
        component: Graphics
      },
      {
        path: "nature",
        component: Nature
      },
      {
        path: "collage",
        component: Collage
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
