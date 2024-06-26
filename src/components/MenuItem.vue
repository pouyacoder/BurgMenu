<script>
import HambergerMenu from "./HambergerMenu.vue";
export default {
  props: ["title", "sub"],
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isActive = this.isActive ? false : true;
      console.log(this.isActive);
    },
  },
  components: { HambergerMenu },
};
</script>

<template>
  <div class="container">
    <button v-on:click="toggleMenu">
      <div>
        {{ title }}
      </div>
      <div>></div>
    </button>
    <HambergerMenu v-bind="{ items: sub, isActive: isActive }" />
  </div>
</template>

<style>
.container {
  width: 100%;
  background-color: aqua;
}

.container button {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  background-color: blueviolet;
  margin: 2px 0 2px 0;
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
</style>
