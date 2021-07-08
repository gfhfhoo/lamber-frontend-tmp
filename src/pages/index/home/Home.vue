<template>
  <div class="home">
    <div class="showcase">
      <round-pic></round-pic>
      <race-show></race-show>
    </div>
    <div class="middle-container">
      <ranking></ranking>
    </div>
    <side-utils></side-utils>
  </div>
</template>

<script>

import RoundPic from "@/components/section/roundPic/RoundPic";
import RaceShow from "@/components/section/raceShow/RaceShow";
import SideUtils from "@/components/section/sideUtils/SideUtils";
import Ranking from "@/components/section/ranking/Ranking";

export default {
  components: {RoundPic, RaceShow, SideUtils, Ranking},
  name: 'Home'
}
</script>

<style>
.showcase {
  width: 1000px;
  height: 300px;
  margin: 60px auto 0;
  box-shadow: 0 0 4px rgba(117, 116, 116, 0.8);
}

.middle-container {
  width: 1000px;
  height: 600px;
  margin: 60px auto 0;
}
</style>