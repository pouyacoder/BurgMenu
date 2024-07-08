<script>
import CloseBar from "./CloseBar.vue";
import Menu from "./Menu.vue";
import children from "../items";

export default {
  name: "SidePanel",
  data() {
    return {
      items: children,
    };
  },
  props: {
    isActive: Boolean,
    closeBtnCallback: Function,
    darkMode: Boolean,
    selectedId: Number,
    changeSelectedId: Function,
  },
  methods: {
    setLeftPosition: function (active) {
      return { left: active ? "0px" : "-400px" };
    },
  },
  components: { CloseBar, Menu },
};
</script>

<template>
  <div class="side-panel" v-bind:style="setLeftPosition(isActive)">
    <CloseBar
      v-bind:closeBtnCallback="closeBtnCallback"
      v-bind:dark-mode="darkMode"
    ></CloseBar>
    <div class="side-panel-menu-container">
      <Menu
        v-bind:items="items"
        v-bind:isOpen="true"
        v-bind:selectedId="selectedId"
        v-bind:changeSelectedId="changeSelectedId"
        v-bind:menuAddress="'/'"
      ></Menu>
    </div>
  </div>
</template>

<style>
.side-panel {
  height: 100%;
  width: 300px;
  background-color: var(--bg-color);
  position: relative;
  transition: left 500ms ease-in-out;
  z-index: 100;
}

.side-panel-menu-container {
  padding-right: 4px;
}
</style>
