<template>
  <div class="formats-input-wrapper">
    <div class="form-check mx-2" v-for="(format, i) in formatsList" :key="i">
      <input
        class="form-check-input"
        type="radio"
        :id="`format-radio-${i}`"
        v-model="model_format"
        :value="i"
      />
      <label class="form-check-label" :for="`format-radio-${i}`">
        {{ format.title }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formatsList: {
      type: [Object, Array],
      require: true,
    },
  },
  data: () => {
    return {
      model_format: 0,
    };
  },
  watch: {
    model_format(new_val) {
      this.$emit("update-format", new_val);
    },
  },
};
</script>

<style lang="scss" scoped>
.formats-input-wrapper {
  display: flex;
}
.formats-input-item {
  margin: 8px 12px;
  display: flex;
  align-items: center;
}
</style>