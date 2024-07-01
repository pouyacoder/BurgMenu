<script>
export default {
  name: "CloseBar",
  props: {
    closeBtnCallback: Function,
  },
};
</script>

<template>
  <div class="close-bar">
    <button v-on:click="closeBtnCallback">Close Me</button>
  </div>
</template>

<style>
.close-bar {
  height: 50px;
  background-color: rgba(82, 82, 82, 0.726);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
}

.close-bar button {
  background-color: gray;
  border: 0;
  border-radius: 30px;
  width: 80px;
  height: 40px;
  font-size: 15px;
}

.close-bar button:hover {
  background-color: rgb(107, 107, 107);
}
</style>
