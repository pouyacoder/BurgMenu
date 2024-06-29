<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "MainMenu",
  props: ["menuItems", "isActive"],
  data: function () {
    return {};
  },
  methods: {
    menuStyle: function (active) {
      console.log(active);
      if (active) {
        return {
          height: "100%",
          display: "flex",
        };
      }
      return {
        height: "0px",
        display: "none",
      };
    },
  },
  components: { MenuItem },
};
</script>

<template>
  <div v-if="isActive" class="side-menu open">
    <div class="item" v-for="item in menuItems">
      <MenuItem v-bind="{ title: item.name, sub: item.children }"></MenuItem>
    </div>
  </div>
  <div v-else class="side-menu close"></div>
</template>

<style>
.side-menu {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center top;
  flex-direction: column;
  transition: height 2s ease-in-out;
}

.side-menu .item {
  width: 100%;
}
.side-menu .open {
  height: 100%;
  /* display: flex; */
}

.side-menu .close {
  /* transition: height 0.2s ease-in-out; */
  height: 0;
  /* display: none; */
}
</style>
