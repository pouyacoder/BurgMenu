<script>
import Item from "./Item.vue";
export default {
  name: "Menu",
  props: {
    items: Array,
    isOpen: Boolean,
  },
  methods: {
    openMenu: function (open) {
      if (open) {
        return {
          "max-height": "500px",
          height: "auto",
        };
      }
      return {
        height: "auto",
        "max-height": 0,
      };
    },
  },
  components: { Item },
};
</script>

<template>
  <div class="menu" v-bind:style="openMenu(isOpen)">
    <Item
      v-for="item in items"
      v-bind:key="item.id"
      v-bind:title="item.name"
      v-bind:children="item.children"
    ></Item>
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
