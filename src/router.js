import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./components/HelloWorld";
import ListPage from "./components/ListPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname /* global __dirname */,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/list",
      component: ListPage
    }
  ]
});
