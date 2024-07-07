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
      isDarkMode: true,
    };
  },
  computed: {
    getColorMode: function () {
      if (this.isDarkMode) {
        return {
          "color-scheme": "dark",
        };
      }
      return {
        "color-scheme": "light",
      };
    },
  },
  methods: {
    setShowLeftPanel: function (active) {
      this.showLeftPanel = active;
    },
    toggleColorMode: function () {
      this.isDarkMode = this.isDarkMode ? false : true;
    },
  },
  components: { LeftPanel, OpenLeftPanel, CoverPanel, NavBar },
};
</script>

<template>
  <div class="app" v-bind:style="getColorMode">
    <NavBar
      v-bind:open-panel-callback="setShowLeftPanel"
      v-bind:toggle-color-mode="toggleColorMode"
    >
    </NavBar>
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
  background: light-dark(var(--bg-color-light), var(--bg-color-dark));
}

.dark-mode {
  color-scheme: dark;
}

.light-mode {
  color-scheme: light;
}
</style>
