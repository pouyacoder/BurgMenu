<script>
import MainMenu from "./components/MainMenu.vue";
import items from "./items";
export default {
  name: "App",
  components: { MainMenu },
  data: function () {
    return {
      items: items,
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="side-left"><MainMenu v-bind:menuItems="items" /></div>
    <div class="side-right">Right Menu</div>
  </div>
</template>
