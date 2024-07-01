<script>
export default {
  name: "CoverPanel",
  props: {
    closeLeftPanelCallback: Function,
  },
};
</script>

<template>
  <div
    class="cover-panel"
    v-on:click="() => closeLeftPanelCallback(false)"
  ></div>
</template>

<style>
.cover-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.315);
  z-index: 5;
}
</style>
