<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "Menu",
  props: {
    items: Array,
    isOpen: Boolean,
    selectedId: Number,
    changeSelectedId: Function,
    menuAddress: String,
  },
  methods: {
    openMenu: function (open) {
      return {
        "max-height": open ? "500px" : 0,
        height: "auto",
      };
    },
  },
  components: { MenuItem },
};
</script>

<template>
  <div class="menu" v-bind:style="openMenu(isOpen)">
    <MenuItem
      v-for="item in items"
      v-bind:key="item.id"
      v-bind:id="item.id"
      v-bind:title="item.name"
      v-bind:children="item.children"
      v-bind:selectedId="selectedId"
      v-bind:changeSelectedId="changeSelectedId"
      v-bind:parentAddress="menuAddress"
    ></MenuItem>
  </div>
</template>

<style>
.menu {
  padding-top: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: top;
  transition: all 200ms ease-in-out;
}
</style>
