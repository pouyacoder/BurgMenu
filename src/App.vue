<script>
import LeftPanel from "./components/LeftPanel.vue";
export default {
  name: "App",
  data: function () {
    return {
      showLeftPanel: true,
    };
  },
  methods: {
    closeLeftPanel: function () {
      this.showLeftPanel = false;
    },
  },
  components: { LeftPanel },
};
</script>

<template>
  <div class="app">
    <LeftPanel
      v-bind:isActive="showLeftPanel"
      v-bind:closeBtnCallback="closeLeftPanel"
    ></LeftPanel>
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
