<template>
  <ul class="list-group list">
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
<style lang="scss" scoped>
.list {
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
