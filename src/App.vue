<script>
import CoverPanel from "./components/CoverPanel.vue";
import SidePanel from "./components/SidePanel.vue";
import NavBar from "./components/NavBar.vue";
import OpenLeftPanel from "./components/OpenLeftPanel.vue";
import MainPanel from "./components/MainPanel.vue";
export default {
  name: "App",
  data: function () {
    return {
      showLeftPanel: false,
      isDarkMode: false,
      selectedIdLeftPanel: -1,
    };
  },
  computed: {
    getColorMode: function () {
      return { "color-scheme": this.isDarkMode ? "dark" : "light" };
    },
  },
  methods: {
    setShowLeftPanel: function (active) {
      this.showLeftPanel = active;
    },
    toggleColorMode: function () {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        this.isDarkMode ? "dark" : "light"
      );
    },
    setSelectedIdLeftPanel: function (hasSub, newId) {
      if (!hasSub) this.selectedIdLeftPanel = newId;
    },
  },
  components: { SidePanel, OpenLeftPanel, CoverPanel, NavBar, MainPanel },
};
</script>

<template>
  <div class="app" v-bind:style="getColorMode">
    <NavBar
      v-bind:open-panel-callback="setShowLeftPanel"
      v-bind:toggle-color-mode="toggleColorMode"
      v-bind:current-color-mode="isDarkMode"
    >
    </NavBar>
    <SidePanel
      v-bind:isActive="showLeftPanel"
      v-bind:closeBtnCallback="setShowLeftPanel"
      v-bind:dark-mode="isDarkMode"
      v-bind:selectedId="selectedIdLeftPanel"
      v-bind:changeSelectedId="setSelectedIdLeftPanel"
    ></SidePanel>
    <MainPanel></MainPanel>
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
  background: var(--bg-color);
}
</style>
