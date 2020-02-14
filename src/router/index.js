import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
