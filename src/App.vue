<script>
import SideMenu from "./components/SideMenu.vue";
import data from "./items";
const myItems = data.main;
export default {
  name: "App",
  components: { SideMenu },
  data: function () {
    return {
      items: myItems,
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="side-left"><SideMenu v-bind:menuItems="items" /></div>
    <div class="side-right">Right Menu</div>
  </div>
</template>
