<script>
export default {
  props: ["items"],
};
</script>

<template>
  <div class="sub-menu">
    <div class="item" v-for="item in items">
      <button>{{ item }}</button>
    </div>
  </div>
</template>

<style>
.sub-menu {
  padding: 0 4px;
}

.sub-menu .item {
}

.sub-menu .item button {
  background-color: rgb(197, 172, 221);
}
</style>
