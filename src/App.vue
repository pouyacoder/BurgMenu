<script>
import MainMenu from "./components/MainMenu.vue";
import items from "./items";
export default {
  name: "App",
  components: { MainMenu },
  data: function () {
    return {
      items: items,
      isActive: true,
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="side-left">
      <div class="burger-btn">
        <button>Btn</button>
      </div>
      <MainMenu v-bind:menuItems="items" v-bind:isActive="isActive" />
    </div>
    <div class="side-right">Right Menu</div>
  </div>
</template>

<style></style>
