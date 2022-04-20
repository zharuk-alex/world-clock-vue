<template>
  <main class="p-2 my-0 mx-auto">
    <div class="h-100">
      <div
        class="card d-flex flex-column mx-auto p-3 overflow-hidden"
        style="height: -webkit-fill-available; max-width: 600px"
      >
        <div class="row h-100">
          <div class="col-12 col-lg-5">
            <slot name="left-side"></slot>
          </div>
          <div
            class="col col-lg-7 d-flex flex-column overflow-hidden"
            style="height: -webkit-fill-available"
          >
            <div class="mt-3">
              <slot name="right-side-header"></slot>
              <hr />
            </div>
            <div
              class="d-flex flex-column overflow-hidden"
              style="flex-grow: 1; flex-shrink: 1; flex-basis: 0"
            >
              <slot name="right-side-content"></slot>
            </div>
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
  height: 100%;
}
</style>