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
  computed: {
    dropDownIconAngle: function () {
      if (this.isOpen) {
        return {
          rotate: "90deg",
        };
      }
      return {
        rotate: "0deg",
      };
    },
  },
  components: {
    Menu: () => import("./Menu.vue"),
  },
};
</script>

<template>
  <div class="item">
    <button v-on:click="toggleChildMenu">
      {{ title }}
      <div
        v-if="children"
        class="drop-down-icon"
        v-bind:style="dropDownIconAngle"
      >
        >
      </div>
    </button>
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
  border-radius: 5px;
  height: 30px;
  background-color: #242526;
  color: white;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
}

.item button:hover {
  background-color: #2f3031;
}

.drop-down-icon {
  color: #969797;
  font-size: 30px;
  font-weight: normal;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  transition: rotate 200ms ease-in-out;
}
</style>
