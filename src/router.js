import Vue from "vue";
import Router from "vue-router";

import ProductList from "./components/ProductList";
import CreateNewProduct from "./components/CreateNewProduct";
import ProductDetail from "./components/ProductDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname /* global __dirname */,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: ProductList
    },
    {
      name: "newProduct",
      path: "/newProduct",
      component: CreateNewProduct
    },
    {
      path: "/productDetail/:id",
      name: "productDetail",
      component: ProductDetail,
      params: true
    }
  ]
});
