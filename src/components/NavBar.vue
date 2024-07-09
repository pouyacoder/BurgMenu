<script>
import OpenSidePanel from "./OpenSidePanel.vue";

export default {
  name: "NavBar",
  props: {
    openPanelCallback: Function,
    toggleColorMode: Function,
    currentColorMode: Boolean,
  },
  methods: {
    getToggleBtnText: function (darkMode) {
      // its a toggle for the opposite mode
      if (darkMode) return "Light";
      return "Dark";
    },
  },
  components: { OpenSidePanel },
};
</script>

<template>
  <div class="nav-bar">
    <OpenSidePanel v-bind:open-panel-callback="openPanelCallback" v-bind:color-mode="currentColorMode"></OpenSidePanel>
    <button v-on:click="toggleColorMode">
      {{ getToggleBtnText(currentColorMode) }}
    </button>
  </div>
</template>

<style>
.nav-bar {
  position: absolute;
  background-color: var(--nav-bg-color);
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  z-index: 2;
}

.nav-bar button {
  margin-right: 30px;
  width: 60px;
  height: 30px;
  font-weight: bold;
  border: 0px;
  border-radius: 10px;
  background-color: var(--bg-color-mode-btn);
  color: var(--text-color-mode-btn);
}
</style>
