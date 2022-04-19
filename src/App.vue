<template>
  <div id="app">
    <timer></timer>
  </div>
</template>

<script>
import Timer from "@/views/Timer";

export default {
  name: "App",
  components: {
    Timer,
  },
};
</script>
<style>
#app {
  background: #bbbbbb;
}
</style>