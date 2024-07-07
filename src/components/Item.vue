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
          rotate: "180deg",
        };
      }
      return {
        rotate: "90deg",
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
      <div v-if="children" v-bind:style="dropDownIconAngle" class="icon"></div>
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
  background-color: light-dark(var(--bg-color-light), var(--bg-color-dark));
  color: light-dark(var(--text-color-light), var(--text-color-dark));
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
  background-color: light-dark(var(--bg-color-light), var(--bg-color-dark));
}

.icon {
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='26px' height='26px' viewBox='0 0 24 24'><path fill='rgb(100, 100, 100)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'></path></svg>");
  transition: rotate 200ms ease-in-out;
  width: 26px;
  height: 26px;
  rotate: 90deg;
  object-fit: cover;
}
</style>
