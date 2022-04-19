<template>
  <two-side-layout>
    <template v-slot:left-side>
      <div class="top d-flex flex-row mt-1">
        <div class="w-100">
          <h3>{{ dateNow }}</h3>
          <h1>{{ curr }}</h1>
          <h4 class="text-muted">{{ TimezoneTitle }}</h4>
          <hr />
          Time format:
          <format-switcher-component
            :formats-list="formats"
            :value="modelFormat"
            @update-format="modelFormat = $event"
          ></format-switcher-component>
          <button
            v-show="localTimezone != timezone"
            @click="resetTimezone"
            class="btn btn-secondary mt-4 btn-sm text-uppercase"
            type="button"
          >
            show local time
          </button>
        </div>
      </div>
    </template>
    <template v-slot:right-side-header>
      <search-component v-model="search"></search-component>
    </template>
    <template v-slot:right-side-content>
      <list-component
        :timezone-list="timezoneListFiltered"
        :value="timezone"
        @update-timezone="updateTimezone($event)"
      ></list-component>
    </template>
  </two-side-layout>
</template>

<script>
import TwoSideLayout from "@/layouts/two-side-layout.vue";
import ListComponent from "@/components/ListComponent";
import FormatSwitcherComponent from "@/components/FormatSwitcher.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  name: "Timer",
  components: {
    TwoSideLayout,
    ListComponent,
    FormatSwitcherComponent,
    SearchComponent,
  },
  data: () => ({
    curr: "",
    timezone: null,
    localTimezone: null,
    timezoneList: [],
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
    timezoneListFiltered() {
      return Object.values(this.timezoneList).filter((item) => {
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
    updateTimezone(val) {
      this.timezone = val;
    },
    resetTimezone() {
      this.timezone = this.localTimezone;
      this.search = "";
    },
  },
  async created() {
    const response = await fetch("http://worldtimeapi.org/api/timezone");
    this.timezoneList = await response.json();
  },
  mounted() {
    this.localTimezone = this.moment.tz.guess();
    this.timezone = this.moment.tz.guess();
    setInterval(() => {
      this.Timer();
    }, 1000);
  },
};
</script>

