<script>
import HambergerMenu from "./HambergerMenu.vue";
export default {
  name: "MenuItem",
  props: ["title", "sub"],
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isActive = this.isActive ? false : true;
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
}

.container button {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ff597b;
  opacity: 80%;
  border-radius: 15px;
  border: 0;
  margin: 2px 0 2px 0;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.container button:hover {
  background-color: #ff8e9e;
}
</style>
