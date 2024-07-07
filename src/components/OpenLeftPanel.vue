<script>
export default {
  name: "OpenLeftPanel",
  props: {
    openPanelCallback: Function,
    colorMode: Boolean,
  },
  methods: {
    getColorMode: function (darkMode) {
      if (darkMode) {
        return {
          background: "linear-gradient(#ffffff 30%, #0000 0) 0 0/100% 40%",
        };
      }
      return {
        background: "linear-gradient(#000000 30%, #0000 0) 0 0/100% 40%",
      };
    },
  },
};
</script>

<template>
  <div class="open-left-panel">
    <div
      class="open-panel-btn"
      v-bind:style="getColorMode(colorMode)"
      v-on:click="() => openPanelCallback(true)"
    ></div>
  </div>
</template>

<style>
.open-left-panel {
  width: 20px; /* control the size */
  height: 20px;
}

.open-left-panel .open-panel-btn {
  width: 20px; /* control the size */
  height: 20px;
  aspect-ratio: 1;
}
</style>
