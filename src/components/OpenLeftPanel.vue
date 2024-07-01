<script>
export default {
  name: "OpenLeftPanel",
  props: {
    openPanelCallback: Function,
  },
};
</script>

<template>
  <div class="open-left-panel">
    <div
      class="open-panel-btn"
      v-on:click="() => openPanelCallback(true)"
    ></div>
  </div>
</template>

<style>
.open-left-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.open-left-panel .open-panel-btn {
  width: 20px; /* control the size */
  aspect-ratio: 1;
  background: linear-gradient(#ffffff 30%, #0000 0) 0 0/100% 40%;
}
</style>
