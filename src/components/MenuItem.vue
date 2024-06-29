<script>
import MainMenu from "./MainMenu.vue";
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
  components: { MainMenu: () => import("./MainMenu.vue") },
};
</script>

<template>
  <div class="container">
    <button v-on:click="toggleMenu">
      <div>
        {{ title }}
      </div>
      <div class="dropdown-icon">
        <div v-if="isActive && sub" class="active">></div>
        <div v-else-if="!isActive && sub" class="off">></div>
      </div>
    </button>
    <MainMenu v-if="sub && isActive" v-bind="{ menuItems: sub }" />
  </div>
</template>

<style>
.container {
  width: 100%;
  padding: 0 0 0 7px;
  overflow: hidden;
}

.container button {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  opacity: 80%;
  border-radius: 15px;
  border: 0;
  margin: 2px 0px 2px 0;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.container button:hover {
  background-color: rgba(202, 202, 202, 0.692);
}

.dropdown-icon {
  font-size: 25px;
  font-weight: bold;
}

.dropdown-icon .active {
  rotate: 90deg;
  transition: rotate 300ms ease-in-out;
}

.dropdown-icon .off {
  rotate: 0deg;
  transition: rotate 300ms ease-in-out;
}
</style>
