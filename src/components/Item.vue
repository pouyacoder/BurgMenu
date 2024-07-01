<script>
export default {
  name: "Item",
  props: {
    title: String,
    children: Array,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleChildMenu: function () {
      this.isOpen = this.isOpen ? false : true;
    },
  },
  components: {
    Menu: () => import("./Menu.vue"),
  },
};
</script>

<template>
  <div class="item">
    <button v-on:click="toggleChildMenu">{{ title }}</button>
    <Menu v-if="children" v-bind:items="children" v-bind:isOpen="isOpen"></Menu>
  </div>
</template>

<style>
.item {
  padding: 0 0px 3px 4px;
}
.item button {
  width: 100%;
  border: 0;
  border-radius: 10px;
  height: 25px;
  background-color: #e0e0e0;
  color: #000;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
}

.item button:hover {
  background-color: #b3b0b0;
}
</style>
