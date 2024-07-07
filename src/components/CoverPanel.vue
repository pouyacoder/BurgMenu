<script>
export default {
  name: "CoverPanel",
  props: {
    showCoverPanel: Boolean,
    closeLeftPanelCallback: Function,
  },
  methods: {
    coverStyle: function (active) {
      if (active)
        return {
          animation: "fadeIn 0.5s forwards",
        };
      return {
        animation: "fadeOut 0.5s forwards",
      };
    },
  },
};
</script>

<template>
  <div
    class="cover-panel"
    v-bind:style="coverStyle(showCoverPanel)"
    v-on:click="() => closeLeftPanelCallback(false)"
  ></div>
</template>

<style>
@keyframes fadeIn {
  0% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}

@keyframes fadeOut {
  0% {
    display: block;
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

.cover-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.274);
  z-index: 5;
  transition: all 500ms ease-in-out;
}
</style>
