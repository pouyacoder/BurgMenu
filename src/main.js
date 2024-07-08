import Vue from "vue";
import App from "./App.vue";
// import { createRouter, createWebHistory } from "vue-router";

import "./main.css";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [{ path: "/", name: "Home", component: App }],
// });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
