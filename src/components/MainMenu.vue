<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "MainMenu",
  props: ["menuItems"],
  data: function () {
    return {};
  },
  components: { MenuItem },
};
</script>

<template>
  <div class="side-menu">
    <div class="item" v-for="item in menuItems">
      <MenuItem v-bind="{ title: item.name, sub: item.children }"></MenuItem>
    </div>
  </div>
</template>

<style>
.side-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center top;
  flex-direction: column;
}

.side-menu .item {
  width: 100%;
}
</style>
