<script>
import SideMenu from "./components/SideMenu.vue";
import items from "./items";
export default {
  name: "App",
  components: { SideMenu },
  data: function () {
    return {
      items: items,
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
