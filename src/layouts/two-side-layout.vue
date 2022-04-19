<template>
  <main class="p-2">
    <div
      class="card d-flex flex-column p-3 overflow-hidden"
      style="height: calc(100vh - 24px)"
    >
      <div class="row h-100">
        <div class="col col-md-5">
          <slot name="left-side"></slot>
        </div>
        <div class="col col-md-7 d-flex flex-column overflow-hidden">
          <div class="mt-3">
            <slot name="right-side-header"></slot>
            <hr />
          </div>
          <div
            class="
              d-flex
              flex-column
              overflow-hidden
              right-side-content-wrapper
            "
            style="flex: 1 1 0; min-height: 400px"
          >
            <slot name="right-side-content"></slot>
          </div>
        </div>
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
</style>