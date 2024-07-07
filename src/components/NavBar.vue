<script>
import OpenLeftPanel from "./OpenLeftPanel.vue";

export default {
  name: "NavBar",
  props: {
    openPanelCallback: Function,
    toggleColorMode: Function,
    currentColorMode: Boolean,
  },
  components: { OpenLeftPanel },
};
</script>

<template>
  <div class="nav-bar">
    <OpenLeftPanel
      v-bind:open-panel-callback="openPanelCallback"
      v-bind:color-mode="currentColorMode"
    ></OpenLeftPanel>
    <button v-on:click="toggleColorMode">Change Color Mode</button>
  </div>
</template>

<style>
.nav-bar {
  position: absolute;
  background-color: var(--nav-bg);
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
}
</style>
