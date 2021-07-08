<template>
  <div id="backend">
    <LeftNavBar></LeftNavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNavBar from "@/components/common/backend/leftNavBar/LeftNavBar";
export default {
  name: "Backend",
  components: {LeftNavBar}
}
</script>

<style>
@import "../global/colors.scss";

#backend {
  display: flex;
  flex-direction: row;
}

body {
  margin: 0;
}

</style>