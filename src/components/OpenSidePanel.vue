<script>
export default {
  name: "OpenSidePanel",
  props: {
    openPanelCallback: Function,
    colorMode: Boolean,
  },
  methods: {
    getColorMode: function (darkMode) {
      return {
        background: darkMode
          ? "linear-gradient(#ffffff 30%, #0000 0) 0 0/100% 40%"
          : "linear-gradient(#000000 30%, #0000 0) 0 0/100% 40%",
      };
    },
  },
};
</script>

<template>
  <div class="open-side-panel">
    <div class="open-panel-btn" v-bind:style="getColorMode(colorMode)" v-on:click="() => openPanelCallback(true)"></div>
  </div>
</template>

<style>
.open-side-panel {
  width: 20px;
  /* control the size */
  height: 20px;
}

.open-side-panel .open-panel-btn {
  width: 20px;
  /* control the size */
  height: 20px;
  aspect-ratio: 1;
}
</style>
