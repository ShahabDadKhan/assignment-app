import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Timeline from "../pages/Timeline.vue";
import SignIn from "../components/Signup.vue"; // Make sure to import the SignIn component

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
    meta: {
      title: "TimeLine",
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
  document.title = `${to.meta.title} `;
  next();
});

export default router;
