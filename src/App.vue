<script>
import CoverPanel from "./components/CoverPanel.vue";
import LeftPanel from "./components/LeftPanel.vue";
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
  components: { LeftPanel, OpenLeftPanel, CoverPanel },
};
</script>

<template>
  <div class="app">
    <OpenLeftPanel v-bind:openPanelCallback="setShowLeftPanel"></OpenLeftPanel>
    <LeftPanel
      v-bind:isActive="showLeftPanel"
      v-bind:closeBtnCallback="setShowLeftPanel"
    ></LeftPanel>
    <CoverPanel
      v-if="showLeftPanel"
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
  background: rgb(36, 36, 36);
}
</style>
