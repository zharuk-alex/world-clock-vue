<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Enter timezone"
      v-model="inputVal"
    />
    <button
      v-if="value.length"
      class="btn btn-outline-secondary"
      type="button"
      @click="inputVal = ''"
      id="button-addon1"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: ["value"],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>