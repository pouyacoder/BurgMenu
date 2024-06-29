<script>
export default {
  name: "HamButton",
  props: ["toggle"],
  data: function () {
    return {};
  },
};
</script>

<template>
  <div class="burg-btn">
    <div class="burg-menu-btn" v-on:click="toggle"></div>
  </div>
</template>

<style>
.burg-btn {
  padding: 2px;
}

.burg-menu-btn {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  background: linear-gradient(#818181e7 50%, #0000 0) 0 0/100% 40%;
  width: 30px;
  height: 30px;
}

.burg-menu-btn-close {
  width: 150px; /* size of the icon */
  aspect-ratio: 1;
  background: conic-gradient(from 90deg at 33% 33%, #0000 90deg, #818181e7 0)
    100% 100%/60% 60%;
  transform: translateZ(0px) rotate(45deg);
  width: 30px;
  height: 30px;
}
</style>
