<script>
export default {
  props: ["items", "isActive"],
};
</script>

<template>
  <div v-if="isActive" id="hamberger" class="hamberger .active">
    <div class="item" v-for="item in items">
      <button>{{ item.name }}</button>
    </div>
  </div>
  <div v-else class="hamberger"></div>
</template>

<style>
.hamberger {
  padding: 0 4px;
  height: 100%;
  overflow: hidden;
  /* transition: height 1s ease-in-out; */
}

.hamberger .item {
}

.hamberger .item button {
  background-color: rgb(197, 172, 221);
  display: flex;
  justify-content: center;
}

/* .hamberger .active {
  height: 100%;
} */
</style>
