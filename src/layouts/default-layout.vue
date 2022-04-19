<template>
  <main class="flex-fill d-flex flex-column p-2">
    <div
      class="card d-flex flex-column p-3"
      style="height: calc(100vh - 24px); overflow: hidden"
    >
      <slot name="top"></slot>
      <div class="card-body-wrapper flex-grow-1">
        <slot name="body"></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
main {
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
}

.card-body-wrapper {
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #cfcfcd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
}
</style>