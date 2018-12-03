import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import ClientesList from "./components/ClientesList.vue";
import MensagensList from "./components/MensagensList.vue";
import Comentarios from "./components/Comentarios.vue";
import Login from "./components/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/clientes",
      name: "clientes",
      component: ClientesList
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/mensagens",
      name: "mensagens",
      component: MensagensList
    },
    {
      path: "/comentarios",
      name: "comentarios",
      component: Comentarios
    }
  ]
});
