<script>
export default {
  name: "CloseBar",
  props: {
    closeBtnCallback: Function,
  },
  methods: {
    getColorMode: function (darkMode) {
      if (darkMode) {
        return {
          background:
            "linear-gradient(45deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 43%,#fff 45%,#fff 55%,rgba(0, 0, 0, 0) 57%,rgba(0, 0, 0, 0) 100%), linear-gradient(135deg,#242526 0%,#242526 43%,#fff 45%,#fff 55%,#242526 57%,#242526 100%)",
        };
      }
      return {
        background:
          "linear-gradient(45deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 43%,#000000 45%,#020202 55%,rgba(0, 0, 0, 0) 57%,rgba(0, 0, 0, 0) 100%),linear-gradient(135deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 43%,#000000 45%,#020202 55%,rgba(0, 0, 0, 0) 57%,rgba(0, 0, 0, 0) 100%)",
      };
    },
  },
};
</script>

<template>
  <div class="close-bar">
    <div
      class="close-btn"
      v-bind:style="getColorMode(true)"
      v-on:click="() => closeBtnCallback(false)"
    ></div>
  </div>
</template>

<style>
.close-bar {
  height: 50px;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-bottom: 2px;
  padding-right: 10px;
}

.close-bar .close-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
