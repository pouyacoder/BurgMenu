<script>
import SubMenu from "./SubMenu.vue";
export default {
  props: ["title", "sub"],
  data: function () {
    return {};
  },
  components: { SubMenu },
};
</script>

<template>
  <div class="container">
    <button>{{ title }}</button>
    <SubMenu v-bind:items="sub" />
  </div>
</template>

<style>
.container {
  width: 100%;
  background-color: aqua;
}

.container button {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  background-color: blueviolet;
  margin: 2px 0 2px 0;
}
</style>
