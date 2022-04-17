<template>
  <main>
    <div class="top">
      <h2>Timer v0.1</h2>
      <div class="left">
        <h3>{{ dateNow }}</h3>
        <h1>{{ curr }}</h1>
        <h4 class="text-muted">{{ TimezoneTitle }}</h4>
      </div>
      <div class="right">
        Time format:
        <format-switcher-component
          :formats-list="formats"
          :value="modelFormat"
          @update-format="modelFormat = $event"
        ></format-switcher-component>
      </div>
    </div>
    <hr />
    <search-timezone-component v-model="search"></search-timezone-component>
    <tz-list-component
      :timezone-list="tzListDataFiltered"
      :value="timezone"
      @update-timezone="timezone = $event"
    ></tz-list-component>
  </main>
</template>

<script>
import tzListComponent from "@/components/TZList";
import tzListData from "@/parts/TimezoneList";
import FormatSwitcherComponent from "@/components/FormatSwitcher.vue";
import SearchTimezoneComponent from "@/components/SearchTZComponent.vue";

export default {
  name: "Timer",
  components: {
    tzListComponent,
    FormatSwitcherComponent,
    SearchTimezoneComponent,
  },
  data: () => ({
    curr: "",
    timezone: null,
    tzListData: tzListData.sort(),
    formats: [
      {
        title: "Metric",
        value: "HH:mm:ss",
      },
      {
        title: "Imperial",
        value: "h:mm:ss a",
      },
    ],
    modelFormat: 0,
    search: "",
  }),
  computed: {
    TimezoneTitle() {
      return this.timezone != null ? this.timezone.replace(/_/g, " ") : null;
    },
    currFormat() {
      return this.formats[this.modelFormat];
    },
    dateNow() {
      return this.moment().format("MMMM Do YYYY");
    },
    tzListDataFiltered() {
      return Object.values(this.tzListData).filter((item) => {
        let searchCond =
          !this.search ||
          item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        return searchCond;
      });
    },
  },
  methods: {
    Timer() {
      return (this.curr = this.moment()
        .tz(this.timezone)
        .format(this.currFormat.value));
    },
  },
  mounted() {
    this.timezone = this.moment.tz.guess();

    setInterval(() => {
      this.Timer();
    }, 1000);
  },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 15px;
}
.top {
  display: flex;
  flex-flow: row;
  margin-top: 20px;
  .left {
    width: 100%;
  }
}
</style>
