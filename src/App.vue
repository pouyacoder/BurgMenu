<script>
import CoverPanel from "./components/CoverPanel.vue";
import LeftPanel from "./components/LeftPanel.vue";
import NavBar from "./components/NavBar.vue";
import OpenLeftPanel from "./components/OpenLeftPanel.vue";
export default {
  name: "App",
  data: function () {
    return {
      showLeftPanel: false,
    };
  },
  methods: {
    setShowLeftPanel: function (active) {
      this.showLeftPanel = active;
    },
  },
  components: { LeftPanel, OpenLeftPanel, CoverPanel, NavBar },
};
</script>

<template>
  <div class="app">
    <NavBar v-bind:open-panel-callback="setShowLeftPanel"> </NavBar>
    <LeftPanel
      v-bind:isActive="showLeftPanel"
      v-bind:closeBtnCallback="setShowLeftPanel"
    ></LeftPanel>
    <CoverPanel
      v-bind:show-cover-panel="showLeftPanel"
      v-bind:closeLeftPanelCallback="setShowLeftPanel"
    ></CoverPanel>
  </div>
</template>

<style>
.app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #1b1b1d;
}
</style>
