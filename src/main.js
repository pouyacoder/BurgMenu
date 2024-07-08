import Vue from "vue";
import App from "./App.vue";
import children from "./items";
import VueRouter from "vue-router";
import "./main.css";

Vue.use(VueRouter);

var routes = [];

const buildRoutes = (items, address = "/") => {
  items.map((item) => {
    if (item.children) {
      buildRoutes(item.children, address + item.name + "/");
    } else {
      if (item.href && item.href != "" && item.href != "#") {
        routes = [
          ...routes,
          {
            path: address + item.name,
            link: item.href,
            component: () => import("./pages/" + item.name + ".vue"),
          },
        ];
      }
    }
  });
};

buildRoutes(children);

console.log(routes);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
