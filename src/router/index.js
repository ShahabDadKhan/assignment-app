import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import SignIn from "../components/Signup.vue"; // Make sure to import the SignIn component

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      footer: true,
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: {
      title: "Sign In",
      footer: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio `;
  next();
});

export default router;
