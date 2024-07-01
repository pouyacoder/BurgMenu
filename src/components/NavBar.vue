<script>
import OpenLeftPanel from "./OpenLeftPanel.vue";

export default {
  name: "NavBar",
  props: {
    openPanelCallback: Function,
  },
  components: { OpenLeftPanel },
};
</script>

<template>
  <div class="nav-bar">
    <OpenLeftPanel
      v-bind:open-panel-callback="openPanelCallback"
    ></OpenLeftPanel>
  </div>
</template>

<style>
.nav-bar {
  position: absolute;
  background-color: #242526;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
}
</style>
