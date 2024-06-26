<script>
import DropDownMenu from "./DropDownMenu.vue";

export default {
  props: ["menuItems"],
  data: function () {
    return {};
  },
  components: { DropDownMenu },
};
</script>

<template>
  <div class="side-menu">
    <div class="item" v-for="item in menuItems">
      <DropDownMenu v-bind:title="item.name"></DropDownMenu>
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
