<script>
export default {
  name: "MenuItem",
  props: {
    id: Number,
    title: String,
    children: Array,
    selectedId: Number,
    changeSelectedId: Function,
    parentAddress: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onItemBtnClick: function () {
      this.isOpen = !this.isOpen;
      this.changeSelectedId(this.children, this.id);
      if (!this.children)
        this.$router.replace(this.parentAddress + this.title).catch(() => { });
    },
    getSelectedItemStyle: function () {
      if (this.children && this.isOpen)
        return {
          "background-color": "var(--hover-bg-color)",
        };
      return {
        color:
          !this.children && this.id == this.selectedId
            ? "#764ABC"
            : "var(--text-color)",
        "text-decoration":
          !this.children && this.id == this.selectedId ? "underline" : "none",
      };
    },
  },
  computed: {
    dropDownIconAngle: function () {
      return { rotate: this.isOpen ? "180deg" : "90deg" };
    },
  },
  components: {
    Menu: () => import("./Menu.vue"),
  },
};
</script>

<template>
  <div class="item">
    <button v-on:click="onItemBtnClick" v-bind:style="getSelectedItemStyle()">
      {{ title }}
      <div v-if="children" v-bind:style="dropDownIconAngle" class="icon"></div>
    </button>
    <Menu v-if="children" v-bind:items="children" v-bind:isOpen="isOpen" v-bind:selectedId="selectedId"
      v-bind:changeSelectedId="changeSelectedId" v-bind:menuAddress="parentAddress + title + '/'"></Menu>
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
  background-color: var(--bg-color);
  color: var(--text-color);
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
  background-color: var(--hover-bg-color);
  cursor: pointer;
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
