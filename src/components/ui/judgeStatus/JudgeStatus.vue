<template>
  <div class="judge-status">
    <img />
    <span></span>
  </div>
</template>

<script>
import {statusMap} from "../../../constants";
export default {
  name: "JudgeStatus",
  props: {
    status: Number
  },
  data(){
    return {
      statusMap: statusMap
    }
  }
}
</script>

<style scoped>

</style>