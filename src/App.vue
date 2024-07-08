<script>
import CoverPanel from "./components/CoverPanel.vue";
import LeftPanel from "./components/LeftPanel.vue";
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
      this.isDarkMode = this.isDarkMode ? false : true;
      if (this.isDarkMode) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
    setSelectedIdLeftPanel: function (hasSub, newId) {
      if (!hasSub) {
        this.selectedIdLeftPanel = newId;
      }
    },
  },
  components: { LeftPanel, OpenLeftPanel, CoverPanel, NavBar, MainPanel },
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
    <LeftPanel
      v-bind:isActive="showLeftPanel"
      v-bind:closeBtnCallback="setShowLeftPanel"
      v-bind:dark-mode="isDarkMode"
      v-bind:selectedId="selectedIdLeftPanel"
      v-bind:changeSelectedId="setSelectedIdLeftPanel"
    ></LeftPanel>
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
