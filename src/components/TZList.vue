<template>
  <div class="tz-list-wrapper">
    <ul class="list-group">
      <li
        v-for="(timezone, i) in timezoneList"
        :key="i"
        class="list-group-item"
        :class="value == timezone ? 'active' : ''"
        @click="$emit('update-timezone', timezone)"
      >
        {{ TimezoneTitle(timezone) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["timezoneList", "value"],
  data: () => ({}),
  methods: {
    TimezoneTitle: (title) => title.replace(/_/g, " "),
  },
};
</script>

<style lang="scss">
.tz-list-wrapper {
  // max-height: 80vh;
  overflow-y: auto;
}
</style>