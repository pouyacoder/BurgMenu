<script>
export default {
  name: "MainPanel",
};
</script>

<template>
  <div class="main-panel">
    <router-view></router-view>
  </div>
</template>

<style>
.main-panel {
  position: fixed;
  background-color: var(--bg-color);
  top: 60px;
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 10px;
}
</style>
