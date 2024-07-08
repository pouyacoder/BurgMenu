<script>
import CloseBar from "./CloseBar.vue";
import Menu from "./Menu.vue";
import children from "./../items";

export default {
  name: "LeftPanel",
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
      if (active) {
        return {
          left: "0px",
        };
      }
      return {
        left: "-400px",
      };
    },
  },
  components: { CloseBar, Menu },
};
</script>

<template>
  <div class="left-panel" v-bind:style="setLeftPosition(isActive)">
    <CloseBar
      v-bind:closeBtnCallback="closeBtnCallback"
      v-bind:dark-mode="darkMode"
    ></CloseBar>
    <div class="left-pane-menu-container">
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
.left-panel {
  height: 100%;
  width: 300px;
  background-color: var(--bg-color);
  position: relative;
  transition: left 500ms ease-in-out;
  z-index: 100;
}

.left-pane-menu-container {
  padding-right: 4px;
}
</style>
