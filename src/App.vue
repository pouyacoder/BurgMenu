<script>
import HamButton from "./components/HamButton.vue";
import SideMenu from "./components/SideMenu.vue";
import items from "./items";
export default {
  name: "App",
  data: function () {
    return {
      items: items,
      showSideMenu: false,
    };
  },
  methods: {
    toggleSideMenu: function () {
      this.showSideMenu = this.showSideMenu ? false : true;
    },
  },
  components: { SideMenu, HamButton },
};
</script>

<template>
  <div id="app">
    <div>
      <div class="left">
        <div v-if="showSideMenu" class="side-left">
          <SideMenu v-bind:menuItems="items" v-bind:isActive="showSideMenu" />
        </div>
        <div class="burger-btn">
          <HamButton v-bind:toggle="toggleSideMenu" />
        </div>
      </div>
    </div>
    <div class="side-right">Right Menu</div>
  </div>
</template>

<style></style>
