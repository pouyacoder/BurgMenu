<script>
export default {
  name: "CloseBar",
  props: {
    closeBtnCallback: Function,
  },
};
</script>

<template>
  <div class="close-bar">
    <div class="close-btn" v-on:click="() => closeBtnCallback(false)"></div>
  </div>
</template>

<style>
.close-bar {
  height: 50px;
  background-color: #242526;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-bottom: 2px;
  padding-right: 10px;
}

.close-bar .close-btn {
  --s: 30px; /* size */
  width: var(--s);
  aspect-ratio: 1;
  padding: calc(var(--s) * 0.1);
  --_g: radial-gradient(farthest-side, #000 96%, #0000);
  background: radial-gradient(closest-side at 50% 12.5%, #ffffff 96%, #0000) top /
      20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #ffffff 96%, #0000) left/80% 20%
      repeat-x,
    conic-gradient(from 90deg at 33% 33%, #0000 90deg, #ffffff 0) 100% 100%/60%
      60% padding-box content-box;
  transform: translateZ(0) rotate(45deg);
}
</style>
