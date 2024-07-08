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
      showSidePanel: false,
      isDarkMode: false,
      selectedIdSidePanel: -1,
    };
  },
  computed: {
    getColorMode: function () {
      return { "color-scheme": this.isDarkMode ? "dark" : "light" };
    },
  },
  methods: {
    setShowSidePanel: function (active) {
      this.showSidePanel = active;
    },
    toggleColorMode: function () {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        this.isDarkMode ? "dark" : "light"
      );
    },
    setSelectedIdSidePanel: function (hasSub, newId) {
      if (!hasSub) this.selectedIdSidePanel = newId;
    },
  },
  components: { SidePanel, OpenLeftPanel, CoverPanel, NavBar, MainPanel },
};
</script>

<template>
  <div class="app" v-bind:style="getColorMode">
    <NavBar
      v-bind:open-panel-callback="setShowSidePanel"
      v-bind:toggle-color-mode="toggleColorMode"
      v-bind:current-color-mode="isDarkMode"
    >
    </NavBar>
    <SidePanel
      v-bind:isActive="showSidePanel"
      v-bind:closeBtnCallback="setShowSidePanel"
      v-bind:dark-mode="isDarkMode"
      v-bind:selectedId="selectedIdSidePanel"
      v-bind:changeSelectedId="setSelectedIdSidePanel"
    ></SidePanel>
    <MainPanel></MainPanel>
    <CoverPanel
      v-bind:show-cover-panel="showSidePanel"
      v-bind:closeSidePanelCallback="setShowSidePanel"
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
