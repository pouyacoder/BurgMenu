<script>
export default {
  props: ["items", "isActive"],
};
</script>

<template>
  <div v-if="isActive" id="sub-menu" class="sub-menu .active">
    <div class="item" v-for="item in items">
      <button>{{ item }}</button>
    </div>
  </div>
  <div v-else class="sub-menu"></div>
</template>

<style>
.sub-menu {
  padding: 0 4px;
  height: 100%;
  overflow: hidden;
  /* transition: height 1s ease-in-out; */
}

.sub-menu .item {
}

.sub-menu .item button {
  background-color: rgb(197, 172, 221);
}

/* .sub-menu .active {
  height: 100%;
} */
</style>
