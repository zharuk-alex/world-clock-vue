<template>
  <div id="app">
    <timer></timer>
  </div>
</template>

<script>
import metaInfo from "@/metaInfo";
import Timer from "@/views/Timer";

export default {
  name: "App",
  metaInfo,
  components: {
    Timer,
  },
};
</script>
<style>
html {
  height: -webkit-fill-available;
}
body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}
#app {
  height: 100vh;
  background: #bbbbbb;
}
</style>