<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="model"
    />
    <button
      v-if="model"
      class="btn btn-outline-secondary"
      type="button"
      @click="model = null"
      id="button-addon1"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchTZComponent",
  data: () => ({
    model: "",
  }),
  watch: {
    model(new_val) {
      this.$emit("input", new_val);
    },
  },
};
</script>

<style>
</style>